import { forwardRef, useState } from 'react';
import { FormContainer } from '@/components/ui/Form';
import Button from '@/components/ui/Button';
import StickyFooter from '@/components/shared/StickyFooter';
import { Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import toast from '@/components/ui/toast';
import Notification from '@/components/ui/Notification';
import { useNavigate } from 'react-router-dom';
import JobCardBasicInfoFields from './Components/JobCardBasicInfoFields';
import JobCardMachineDetailsFields from './Components/JobCardMachineDetailsFields';
import JobCardWorkDetailsFields from './Components/JobCardWorkDetailsFields';
import JobCardImages from './Components/JobCardImages';
import axios from 'axios';

// Types
type FormikRef = FormikProps<any>;

type InitialData = {
    customerName: string;
    customerAddress: string;
    phoneNumber: string;
    Make: string;
    HP?: number;
    KVA?: number;
    RPM?: number;
    Type?: string;
    Frame: string;
    SrNo: string;
    DealerName?: string;
    DealerNumber?: string;
    works?: string;
    spares?: string;
    industrialworks?: string;
    attachments: string[];
    warranty?: boolean;
    others?: string;
    images: File[];
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
    Make: Yup.string().nullable(),
    HP: Yup.number().nullable(),
    KVA: Yup.number().nullable(),
    RPM: Yup.number().nullable(),
    Type: Yup.string().nullable(),
    Frame: Yup.string().nullable(),
    SrNo: Yup.string().nullable(),
    DealerName: Yup.string().nullable(),
    DealerNumber: Yup.string().nullable(),
    works: Yup.string().nullable(),
    spares: Yup.string().nullable(),
    industrialworks: Yup.string().nullable(),
    attachments: Yup.array().of(Yup.string()),
    warranty: Yup.boolean(),
    others: Yup.string().nullable(),
    images: Yup.array().of(Yup.mixed()),
});

const JobCardForm = forwardRef<FormikRef, JobCardFormProps>((props, ref) => {
    const { type, onDiscard } = props;
    const navigate = useNavigate();

    const initialValues: FormModel = {
        customerName: '',
        customerAddress: '',
        phoneNumber: '',
        Make: '',
        HP: undefined,
        KVA: undefined,
        RPM: undefined,
        Type: '',
        Frame: '',
        SrNo: '',
        DealerName: '',
        DealerNumber: '',
        works: '',
        spares: '',
        industrialworks: '',
        attachments: [],
        warranty: false,
        others: '',
        images: [],
    };

    const handleFormSubmit = async (values: FormModel, { setSubmitting }: { setSubmitting: SetSubmitting }) => {
        setSubmitting(true);

        const formData = new FormData();
        Object.keys(values).forEach((key) => {
            const value = values[key as keyof FormModel];
            if (key === 'attachments' && Array.isArray(value)) {
                value.forEach((attachment, index) => {
                    formData.append(`attachments[${index}]`, attachment);
                });
            } else if (key === 'images' && Array.isArray(value)) {
                value.forEach((file) => {
                    formData.append('images', file);
                });
            } else if (value !== undefined && value !== null) {
                formData.append(key, value.toString());
            }
        });

        try {
            const response = await axios.post('https://mytest.hitechengineeringcompany.in/api/jobcards', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status !== 201) {
                throw new Error('Failed to create job card');
            }

            toast.push(
                <Notification title="Job Card Created" type="success" duration={2500}>
                    Job Card created successfully.
                </Notification>,
                { placement: 'top-center' }
            );

            navigate('/sales/jobcard-list');
        } catch (error) {
            console.error('Error creating job card:', error);
            toast.push(
                <Notification title="Error" type="danger" duration={2500}>
                    Failed to create job card. Please try again.
                </Notification>,
                { placement: 'top-center' }
            );
        } finally {
            setSubmitting(false);
        }
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
                                        values={values}
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