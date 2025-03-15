import AdaptableCard from '@/components/shared/AdaptableCard';
import Input from '@/components/ui/Input';
import { FormItem } from '@/components/ui/Form';
import { Field, FormikErrors, FormikTouched } from 'formik';
import { useState } from 'react';

type FormFieldsName = {
    make: string;
    hp: string;
    kva: string;
    rpm: string;
    type: string;
    frame: string;
    srNo: string;
    dealerName: string;
    dealerNumber: string;
    warranty: boolean;
};

type JobCardMachineDetailsFieldsProps = {
    touched: FormikTouched<FormFieldsName>;
    errors: FormikErrors<FormFieldsName>;
    values: {
        hp: string;
        kva: string;
    };
};

const JobCardMachineDetailsFields = (props: JobCardMachineDetailsFieldsProps) => {
    const { touched, errors, values } = props;
    const [selectedOption, setSelectedOption] = useState<'hp' | 'kva'>('hp'); // Default to 'hp'

    return (
        <AdaptableCard divider className="mb-4">
            <h5>Machine Details</h5>
            <p className="mb-6">Section to configure machine information</p>

            {/* Make Field */}
            <FormItem
                label="Make"
                invalid={!!errors.make && touched.make}
                errorMessage={errors.make}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="make"
                    placeholder="Make"
                    component={Input}
                />
            </FormItem>

            {/* HP/KVA Radio Buttons and Input */}
            <FormItem label="Select HP or KVA">
                <div className="flex items-center gap-4 mb-4">
                    <label className="flex items-center">
                        <Field
                            type="radio"
                            name="selectedOption"
                            value="hp"
                            checked={selectedOption === 'hp'}
                            onChange={() => setSelectedOption('hp')}
                            className="mr-2"
                        />
                        HP
                    </label>
                    <label className="flex items-center">
                        <Field
                            type="radio"
                            name="selectedOption"
                            value="kva"
                            checked={selectedOption === 'kva'}
                            onChange={() => setSelectedOption('kva')}
                            className="mr-2"
                        />
                        KVA
                    </label>
                </div>
                {selectedOption === 'hp' && (
                    <FormItem
                        label="HP"
                        invalid={!!errors.hp && touched.hp}
                        errorMessage={errors.hp}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="hp"
                            placeholder="Enter HP"
                            component={Input}
                        />
                    </FormItem>
                )}
                {selectedOption === 'kva' && (
                    <FormItem
                        label="KVA"
                        invalid={!!errors.kva && touched.kva}
                        errorMessage={errors.kva}
                    >
                        <Field
                            type="text"
                            autoComplete="off"
                            name="kva"
                            placeholder="Enter KVA"
                            component={Input}
                        />
                    </FormItem>
                )}
            </FormItem>

            {/* RPM Dropdown */}
            <FormItem
                label="RPM"
                invalid={!!errors.rpm && touched.rpm}
                errorMessage={errors.rpm}
            >
                <Field
                    as="select"
                    name="rpm"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-[#1f2937] dark:border-gray-600 dark:text-white"
                >
                    <option value="">Select RPM</option>
                    <option value="710">710 RPM</option>
                    <option value="960">960 RPM</option>
                    <option value="1440">1440 RPM</option>
                    <option value="2800">2800 RPM</option>
                </Field>
            </FormItem>

            {/* Type Field */}
            <FormItem
                label="Type"
                invalid={!!errors.type && touched.type}
                errorMessage={errors.type}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="type"
                    placeholder="Type"
                    component={Input}
                />
            </FormItem>

            {/* Frame Field */}
            <FormItem
                label="Frame"
                invalid={!!errors.frame && touched.frame}
                errorMessage={errors.frame}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="frame"
                    placeholder="Frame"
                    component={Input}
                />
            </FormItem>

            {/* Serial Number Field */}
            <FormItem
                label="Serial Number"
                invalid={!!errors.srNo && touched.srNo}
                errorMessage={errors.srNo}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="srNo"
                    placeholder="Serial Number"
                    component={Input}
                />
            </FormItem>

            {/* Dealer Name Field */}
            <FormItem
                label="Dealer Name"
                invalid={!!errors.dealerName && touched.dealerName}
                errorMessage={errors.dealerName}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="dealerName"
                    placeholder="Dealer Name"
                    component={Input}
                />
            </FormItem>

            {/* Dealer Number Field */}
            <FormItem
                label="Dealer Number"
                invalid={!!errors.dealerNumber && touched.dealerNumber}
                errorMessage={errors.dealerNumber}
            >
                <Field
                    type="text"
                    autoComplete="off"
                    name="dealerNumber"
                    placeholder="Dealer Number"
                    component={Input}
                />
            </FormItem>

            {/* Warranty Checkbox */}
            <FormItem label="Warranty">
                <label className="flex items-center">
                    <Field
                        type="checkbox"
                        name="warranty"
                        className="mr-2"
                    />
                    Has Warranty
                </label>
            </FormItem>
        </AdaptableCard>
    );
};

export default JobCardMachineDetailsFields;