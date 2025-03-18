import { lazy } from 'react'
import { APP_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const appsRoute: Routes = [
    {
        key: 'appsJobcard.dashboard',
        path: `${APP_PREFIX_PATH}/jobcards/dashboard`,
        component: lazy(() => import('@/views/project/ProjectDashboard')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsJobcard.jobcardList',
        path: `${APP_PREFIX_PATH}/jobcards/jobcard-list`,
        component: lazy(() => import('@/views/sales/JobCardList/JobCardList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsJobcard.pendingList',
        path: `${APP_PREFIX_PATH}/jobcards/pending-list`,
        component: lazy(() => import('@/views/sales/PendingList/PendingList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsJobcard.returnList',
        path: `${APP_PREFIX_PATH}/jobcards/return-list`,
        component: lazy(() => import('@/views/sales/ReturnList/ReturnList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsJobcard.completedList',
        path: `${APP_PREFIX_PATH}/jobcards/completed-list`,
        component: lazy(() => import('@/views/sales/CompletedList/CompletedList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsJobcard.billedList',
        path: `${APP_PREFIX_PATH}/jobcards/billed-list`,
        component: lazy(() => import('@/views/sales/BilledList/BilledList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsJobcard.jobcardNew',
        path: `${APP_PREFIX_PATH}/jobcards/jobcard-new`,
        component: lazy(() => import('@/views/sales/JobCardList/JobCardForm')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsJobcard.JobcardEdit',
        path: `${APP_PREFIX_PATH}/jobcards/jobcard-edit/:id`,
        component: lazy(() => import('@/views/sales/EditJobcard/EditJobCardForm')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsSales.jobcardView',
        path: `${APP_PREFIX_PATH}/jobcards/jobcard/:id`,
        component: lazy(() => import('@/views/sales/JobCardList/JobCardView')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsSales.productEdit',
        path: `${APP_PREFIX_PATH}/sales/product-edit/:productId`,
        component: lazy(() => import('@/views/sales/ProductEdit')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Edit Product',
        },
    },
    {
        key: 'appsJobcard.onsiteNew',
        path: `${APP_PREFIX_PATH}/onsite/form`,
        component: lazy(() => import('@/views/onSite/OnsiteCreation/OnSiteComplaintForm')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsJobcard.onsiteNew',
        path: `${APP_PREFIX_PATH}/onsite/form/:id`,
        component: lazy(() => import('@/views/onSite/OnsiteCreation/OnSiteComplaintForm')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsOnsite.onsiteView',
        path: `${APP_PREFIX_PATH}/onsite/:id`,
        component: lazy(() => import('@/views/onSite/SingleOnSiteComplaintView')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsOnsite.onsiteList',
        path: `${APP_PREFIX_PATH}/onsite`,
        component: lazy(() => import('@/views/onSite/OnsiteView/OnSiteComplaintsList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsOnsite.pendingList',
        path: `${APP_PREFIX_PATH}/onsite-pending`,
        component: lazy(() => import('@/views/onSite/PendingList/PendingOnSiteComplaintsList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsOnsite.closedList',
        path: `${APP_PREFIX_PATH}/onsite-closed`,
        component: lazy(() => import('@/views/onSite/ClosedList/ClosedOnSiteComplaintsList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsOnsite.sentList',
        path: `${APP_PREFIX_PATH}/onsite-sent`,
        component: lazy(() => import('@/views/onSite/SentToSite/SentToWorkshopOnSiteComplaintsList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsWorker.workerList',
        path: `${APP_PREFIX_PATH}/worker`,
        component: lazy(() => import('@/views/worker/WorkerList/WorkersList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsWorker.newWorker',
        path: `${APP_PREFIX_PATH}/worker/form`,
        component: lazy(() => import('@/views/worker/WorkerList/WorkeCreatePage')),
        authority: [ADMIN, USER],
    },
    
    

]

export default appsRoute
