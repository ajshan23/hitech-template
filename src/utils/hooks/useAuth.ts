import { apiSignIn, apiSignOut, apiSignUp } from '@/services/AuthService'
import {
    setUser,
    signInSuccess,
    signOutSuccess,
    useAppSelector,
    useAppDispatch,
} from '@/store'
import appConfig from '@/configs/app.config'
import { REDIRECT_URL_KEY } from '@/constants/app.constant'
import { useNavigate } from 'react-router-dom'
import useQuery from './useQuery'
import type { SignInCredential, SignUpCredential } from '@/@types/auth'

type Status = 'success' | 'failed'

function useAuth() {
    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const query = useQuery()

    const { token, signedIn } = useAppSelector((state) => state.auth.session)

    const signIn = async (
        values: SignInCredential,
    ): Promise<
        | {
              status: Status
              message: string
          }
        | undefined
    > => {
        try {
            // Simulate a successful login with a dummy user matching the mock server
            const dummyUser = {
                avatar: '/img/avatars/thumb-1.jpg', // Match the mock server avatar path
                userName: 'Carolyn Perkins', // Match the mock server user name
                authority: ['admin', 'user'], // Match the mock server authority (lowercase)
                email: 'carolyn.p@elstar.com', // Match the mock server email
            }
    
            const dummyToken = 'wVYrxaeNa9OxdnULvde1Au5m5w63' // Match the mock server token
    
            dispatch(signInSuccess(dummyToken))
            dispatch(setUser(dummyUser))
    
            const redirectUrl = query.get(REDIRECT_URL_KEY)
            navigate(
                redirectUrl
                    ? redirectUrl
                    : appConfig.authenticatedEntryPath,
            )
    
            return {
                status: 'success',
                message: '',
            }
        } catch (errors: any) {
            return {
                status: 'failed',
                message: errors?.response?.data?.message || errors.toString(),
            }
        }
    }

    const signUp = async (values: SignUpCredential) => {
        try {
            const resp = await apiSignUp(values)
            if (resp.data) {
                const { token } = resp.data
                dispatch(signInSuccess(token))
                if (resp.data.user) {
                    dispatch(
                        setUser(
                            resp.data.user || {
                                avatar: '',
                                userName: 'Anonymous',
                                authority: ['USER'],
                                email: '',
                            },
                        ),
                    )
                }
                const redirectUrl = query.get(REDIRECT_URL_KEY)
                navigate(
                    redirectUrl
                        ? redirectUrl
                        : appConfig.authenticatedEntryPath,
                )
                return {
                    status: 'success',
                    message: '',
                }
            }
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        } catch (errors: any) {
            return {
                status: 'failed',
                message: errors?.response?.data?.message || errors.toString(),
            }
        }
    }

    const handleSignOut = () => {
        dispatch(signOutSuccess())
        dispatch(
            setUser({
                avatar: '',
                userName: '',
                email: '',
                authority: [],
            }),
        )
        navigate(appConfig.unAuthenticatedEntryPath)
    }

    const signOut = async () => {
        await apiSignOut()
        handleSignOut()
    }

    return {
        authenticated: token && signedIn,
        signIn,
        signUp,
        signOut,
    }
}

export default useAuth