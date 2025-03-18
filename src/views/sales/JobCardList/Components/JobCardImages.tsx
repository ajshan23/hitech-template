import { useState } from 'react';
import AdaptableCard from '@/components/shared/AdaptableCard';
import Upload from '@/components/ui/Upload';
import { Field, FieldProps } from 'formik';
import { FormItem } from '@/components/ui';

type JobCardImagesProps = {
    values: {
        images: File[];
    };
};

const JobCardImages = (props: JobCardImagesProps) => {
    const { values } = props;

    const beforeUpload = (file: FileList | null, fileList: File[]) => {
        if (!file || file.length === 0) {
            return 'Please upload an image file!';
        }

        const uploadedFile = file[0]; // Get the first file from the FileList

        // Check if the file is an image
        const isImage = uploadedFile.type.startsWith('image/');
        if (!isImage) {
            return 'Please upload an image file!';
        }

        // Check if the file size is less than 500KB
        const isLt500KB = uploadedFile.size / 1024 <= 500;
        if (!isLt500KB) {
            return 'Image size must be less than 500KB!';
        }

        return true; // Return true if the file is valid
    };

    return (
        <AdaptableCard className="mb-4">
            <h5>Job Card Images</h5>
            <p className="mb-6">Add or change images for the job card</p>
            <FormItem>
                <Field name="images">
                    {({ field, form }: FieldProps) => (
                        <Upload
                            draggable
                            beforeUpload={beforeUpload}
                            onChange={(files) => form.setFieldValue(field.name, files)}
                        >
                            <div className="my-16 text-center">
                                <p className="font-semibold">
                                    <span className="text-gray-800 dark:text-white">
                                        Drop your image here, or{' '}
                                    </span>
                                    <span className="text-blue-500">browse</span>
                                </p>
                                <p className="mt-1 opacity-60 dark:text-white">
                                    Support: jpeg, png
                                </p>
                            </div>
                        </Upload>
                    )}
                </Field>
            </FormItem>
        </AdaptableCard>
    );
};

export default JobCardImages;