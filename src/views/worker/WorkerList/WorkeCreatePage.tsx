import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Input, FormItem, toast, Notification } from '@/components/ui';
import AvatarImage from './AvatarImage'; // Import the AvatarImage component

// Define the form values type
type FormValues = {
  workerName: string;
  phoneNumber: string;
  workerImage: File | null;
};

// Validation Schema
const validationSchema = Yup.object().shape({
  workerName: Yup.string().required('Worker Name is required'),
  phoneNumber: Yup.string()
    .required('Phone Number is required')
    .matches(/^\d{10}$/, 'Phone Number must be 10 digits'),
  workerImage: Yup.mixed().required('Worker Image is required'),
});

const WorkerCreatePage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('workerName', values.workerName);
    formData.append('phoneNumber', values.phoneNumber);
    if (values.workerImage) {
      formData.append('image', values.workerImage);
    }

    try {
      const response = await axios.post(
        'https://mytest.hitechengineeringcompany.in/api/worker',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status !== 201) {
        throw new Error('Failed to create worker');
      }

      toast.push(
        <Notification title="Worker Created" type="success" duration={2500}>
          Worker created successfully.
        </Notification>,
        { placement: 'top-center' }
      );

      navigate(-1);
    } catch (error) {
      console.error('Error creating worker:', error);
      toast.push(
        <Notification title="Error" type="danger" duration={2500}>
          Failed to create worker. Please try again.
        </Notification>,
        { placement: 'top-center' }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6">
      <h3 className="mb-6">Create Worker</h3>
      <Formik
        initialValues={{
          workerName: '',
          phoneNumber: '',
          workerImage: null,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, touched, errors }) => (
          <Form>
            <div className="space-y-6">
              {/* Worker Name Field */}
              <FormItem
                label="Worker Name"
                invalid={!!errors.workerName && touched.workerName}
                errorMessage={errors.workerName}
              >
                <Field
                  type="text"
                  autoComplete="off"
                  name="workerName"
                  placeholder="Worker Name"
                  component={Input}
                />
              </FormItem>

              {/* Phone Number Field */}
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

              {/* Worker Image Upload */}
              <FormItem
                label="Worker Image"
                invalid={!!errors.workerImage && touched.workerImage}
                errorMessage={errors.workerImage}
              >
                <AvatarImage
                  onFileUpload={(files) => {
                    if (files.length > 0) {
                      setFieldValue('workerImage', files[0]); // Update Formik's state
                    }
                  }}
                />
              </FormItem>

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="solid"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                >
                  Create Worker
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default WorkerCreatePage;