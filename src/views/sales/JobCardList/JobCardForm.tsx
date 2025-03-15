import { forwardRef, useState } from 'react';
import { FormContainer } from '@/components/ui/Form';
import Button from '@/components/ui/Button';
import StickyFooter from '@/components/shared/StickyFooter';
import ConfirmDialog from '@/components/shared/ConfirmDialog';
import { Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import toast from '@/components/ui/toast';
import Notification from '@/components/ui/Notification';
import { useNavigate } from 'react-router-dom';
// import { apiCreateJobCard } from '@/services/JobCardService'; // Adjust the service import
import JobCardBasicInfoFields from './Components/JobCardBasicInfoFields'; // Custom fields component
import JobCardMachineDetailsFields from './Components/JobCardMachineDetailsFields'; // Custom fields component
import JobCardWorkDetailsFields from './Components/JobCardWorkDetailsFields'; // Custom fields component
import JobCardImages from './Components/JobCardImages'; // Custom images component

// Types
type FormikRef = FormikProps<any>;

type InitialData = {
    customerName: string;
    customerAddress: string;
    phoneNumber: string;
    make: string;
    hp: string;
    kva: string;
    rpm: string;
    type: string;
    frame: string;
    srNo: string;
    dealerName: string;
    dealerNumber: string;
    works: string;
    spares: string;
    industrialWorks: string;
    attachments: string[];
    warranty: boolean;
    images: File[]; // Added images property
};

export type FormModel = InitialData;

export type SetSubmitting = (isSubmitting: boolean) => void;

type JobCardFormProps = {
    type: 'new';
    onDiscard?: () => void;
    onFormSubmit: (formData: FormModel, setSubmitting: SetSubmitting) => void;
};

// Validation Schema
const validationSchema = Yup.object().shape({
    customerName: Yup.string().required('Customer Name is required'),
    customerAddress: Yup.string().required('Customer Address is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    make: Yup.string().required('Make is required'),
    hp: Yup.string().test(
        'hp-or-kva',
        'HP or KVA is required',
        function (value) {
            const { kva } = this.parent;
            return !!value || !!kva;
        }
    ),
    kva: Yup.string().test(
        'hp-or-kva',
        'HP or KVA is required',
        function (value) {
            const { hp } = this.parent;
            return !!value || !!hp;
        }
    ),
    // Other fields are optional
    rpm: Yup.string(),
    type: Yup.string(),
    frame: Yup.string(),
    srNo: Yup.string(),
    dealerName: Yup.string(),
    dealerNumber: Yup.string(),
    works: Yup.string(),
    spares: Yup.string(),
    industrialWorks: Yup.string(),
    attachments: Yup.array().of(Yup.string()),
    warranty: Yup.boolean(),
    images: Yup.array().of(Yup.mixed()),
});

const JobCardForm = forwardRef<FormikRef, JobCardFormProps>((props, ref) => {
    const { type, onDiscard, onFormSubmit } = props;
    const navigate = useNavigate();

    const initialValues: FormModel = {
        customerName: '',
        customerAddress: '',
        phoneNumber: '',
        make: '',
        hp: '',
        kva: '',
        rpm: '',
        type: '',
        frame: '',
        srNo: '',
        dealerName: '',
        dealerNumber: '',
        works: '',
        spares: '',
        industrialWorks: '',
        attachments: [],
        warranty: false,
        images: [], // Initialize images as an empty array
    };

    const handleFormSubmit = async (values: FormModel, { setSubmitting }: { setSubmitting: SetSubmitting }) => {
        setSubmitting(true);
        // try {
        //     const response = await apiCreateJobCard(values); // Call your API service
        //     if (response.success) {
        //         toast.push(
        //             <Notification title="Job Card Created" type="success" duration={2500}>
        //                 Job Card created successfully.
        //             </Notification>,
        //             { placement: 'top-center' }
        //         );
        //         navigate('/app/jobcards'); // Redirect to job cards list
        //     }
        // } catch (error) {
        //     console.error('Error creating job card:', error);
        //     toast.push(
        //         <Notification title="Error" type="danger" duration={2500}>
        //             Failed to create job card. Please try again.
        //         </Notification>,
        //         { placement: 'top-center' }
        //     );
        // } finally {
        //     setSubmitting(false);
        // }
    };

    return (
        <>
            <Formik
                innerRef={ref}
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
            >
                {({ values, touched, errors, isSubmitting }) => (
                    <Form>
                        <FormContainer>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                <div className="lg:col-span-2">
                                    <JobCardBasicInfoFields
                                        touched={touched}
                                        errors={errors}
                                    />
                                    <JobCardMachineDetailsFields
                                        touched={touched}
                                        errors={errors}
                                        values={values} // Pass values here
                                    />
                                    <JobCardWorkDetailsFields
                                        touched={touched}
                                        errors={errors}
                                    />
                                </div>
                                <div className="lg:col-span-1">
                                    <JobCardImages values={{ images: values.images }} />
                                </div>
                            </div>
                            <StickyFooter
                                className="-mx-8 px-8 flex items-center justify-between py-4"
                                stickyClass="border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                            >
                                <div>
                                    <Button
                                        size="sm"
                                        className="ltr:mr-3 rtl:ml-3"
                                        type="button"
                                        onClick={onDiscard}
                                    >
                                        Discard
                                    </Button>
                                </div>
                                <div className="md:flex items-center">
                                    <Button
                                        size="sm"
                                        variant="solid"
                                        loading={isSubmitting}
                                        type="submit"
                                    >
                                        Create Job Card
                                    </Button>
                                </div>
                            </StickyFooter>
                        </FormContainer>
                    </Form>
                )}
            </Formik>
        </>
    );
});

JobCardForm.displayName = 'JobCardForm';

export default JobCardForm;