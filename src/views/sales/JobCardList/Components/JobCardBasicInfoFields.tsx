import AdaptableCard from '@/components/shared/AdaptableCard';
import Input from '@/components/ui/Input';
import { FormItem } from '@/components/ui/Form';
import { Field, FormikErrors, FormikTouched } from 'formik';

type FormFieldsName = {
    customerName: string;
    customerAddress: string;
    phoneNumber: string;
};

type JobCardBasicInfoFieldsProps = {
    touched: FormikTouched<FormFieldsName>;
    errors: FormikErrors<FormFieldsName>;
};

const JobCardBasicInfoFields = (props: JobCardBasicInfoFieldsProps) => {
    const { touched, errors } = props;

    return (
        <AdaptableCard divider className="mb-4">
            <h5>Customer Details</h5>
            <p className="mb-6">Section to configure customer information</p>
            <FormItem
                label="Customer Name"
                invalid={!!errors.customerName && touched.customerName}
                errorMessage={errors.customerName}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="customerName"
                    placeholder="Customer Name"
                    component={Input}
                />
            </FormItem>
            <FormItem
                label="Customer Address"
                invalid={!!errors.customerAddress && touched.customerAddress}
                errorMessage={errors.customerAddress}
            >
                <Field
                    as="textarea"
                    name="customerAddress"
                    placeholder="Customer Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-[#1f2937] dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                    rows={4}
                />
            </FormItem>
            <FormItem
                label="Phone Number"
                invalid={!!errors.phoneNumber && touched.phoneNumber}
                errorMessage={errors.phoneNumber}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    component={Input}
                />
            </FormItem>
        </AdaptableCard>
    );
};

export default JobCardBasicInfoFields;