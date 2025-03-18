import { useEffect, useState } from "react";
import { Formik, Form, Field, FormikProps } from "formik";
import * as Yup from "yup";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/toast";
import Notification from "@/components/ui/Notification";
import axios from "axios";
import JobCardImages from "./JobCardImages";
import JobCardWorkDetailsFields from "./JobCardWorkDetailsFields";
import JobCardMachineDetailsFields from "../JobCardList/Components/JobCardMachineDetailsFields";
import JobCardBasicInfoFields from "../JobCardList/Components/JobCardBasicInfoFields";
import Button from "@/components/ui/Button"; // Import the Button component

const validationSchema = Yup.object().shape({
  customerName: Yup.string().required("Customer Name is required"),
  customerAddress: Yup.string().required("Customer Address is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
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
  invoiceNumber: Yup.string().nullable(),
  removedImages: Yup.array().of(Yup.string()), // Add removedImages to validation schema
});

const EditJobCardForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState({
    customerName: "",
    customerAddress: "",
    phoneNumber: "",
    Make: "",
    HP: undefined,
    KVA: undefined,
    RPM: undefined,
    Type: "",
    Frame: "",
    SrNo: "",
    DealerName: "",
    DealerNumber: "",
    works: "",
    spares: "",
    industrialworks: "",
    attachments: [],
    warranty: false,
    others: "",
    images: [],
    invoiceNumber: "",
    removedImages: [], // Add removedImages to initialValues
  });
  const [isBilled, setIsBilled] = useState(false); // Track if the job card is in "Billed" state

  // Fetch job card data
  useEffect(() => {
    const fetchJobCard = async () => {
      try {
        const response = await axios.get(`https://mytest.hitechengineeringcompany.in/api/jobcards/${id}`);
        const jobCard = response.data.data; // Access the `data` property in the response

        // Check if the job card is in "Billed" state
        setIsBilled(jobCard.jobCardStatus === "Billed");

        setInitialValues({
          customerName: jobCard.customerName,
          customerAddress: jobCard.customerAddress,
          phoneNumber: jobCard.phoneNumber,
          Make: jobCard.Make,
          HP: jobCard.HP,
          KVA: jobCard.KVA,
          RPM: jobCard.RPM,
          Type: jobCard.Type,
          Frame: jobCard.Frame,
          SrNo: jobCard.SrNo,
          DealerName: jobCard.DealerName,
          DealerNumber: jobCard.DealerNumber,
          works: jobCard.works,
          spares: jobCard.spares,
          industrialworks: jobCard.industrialworks,
          attachments: jobCard.attachments || [], // Ensure attachments is an array
          warranty: jobCard.warranty,
          others: jobCard.others,
          images: jobCard.images || [], // Ensure images is an array
          invoiceNumber: jobCard.invoiceNumber,
          removedImages: [], // Initialize removedImages as an empty array
        });
      } catch (error) {
        console.error("Error fetching job card:", error);
        toast.push(
          <Notification title="Error" type="danger" duration={2500}>
            Failed to fetch job card. Please try again.
          </Notification>,
          { placement: "top-center" }
        );
      }
    };
    fetchJobCard();
  }, [id]);
  const handleFormSubmit = async (values: any, { setSubmitting }: any) => {
    setSubmitting(true);
  
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      const value = values[key];
      if (key === "attachments" && Array.isArray(value)) {
        value.forEach((attachment, index) => {
          formData.append(`attachments[${index}]`, attachment);
        });
      } else if (key === "images" && Array.isArray(value)) {
        value.forEach((file) => {
          if (file instanceof File) {
            formData.append("images", file); // Only append new files
          }
        });
      } else if (key === "removedImages" && Array.isArray(value)) {
        // Stringify removedImages only once
        formData.append(key, JSON.stringify(value));
      } else if (value !== undefined && value !== null) {
        formData.append(key, value.toString());
      }
    });
  
    try {
      const response = await axios.put(
        `https://mytest.hitechengineeringcompany.in/api/jobcards/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      if (response.status !== 200) {
        throw new Error("Failed to update job card");
      }
  
      toast.push(
        <Notification title="Job Card Updated" type="success" duration={2500}>
          Job card updated successfully.
        </Notification>,
        { placement: "top-center" }
      );
  
      navigate("/sales/jobcard-list");
    } catch (error) {
      console.error("Error updating job card:", error);
      toast.push(
        <Notification title="Error" type="danger" duration={2500}>
          Failed to update job card. Please try again.
        </Notification>,
        { placement: "top-center" }
      );
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
      enableReinitialize // Ensure the form updates when initialValues change
    >
      {({ values, touched, errors, isSubmitting, setFieldValue }) => (
        <Form>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <JobCardBasicInfoFields touched={touched} errors={errors} />
              <JobCardMachineDetailsFields touched={touched} errors={errors} values={values} />
              <JobCardWorkDetailsFields touched={touched} errors={errors} />

              {/* Show Invoice Number Field if Job Card is in "Billed" State */}
              {isBilled && (
                <div className="mb-4">
                  <label htmlFor="invoiceNumber" className="block text-sm font-medium text-gray-700">
                    Invoice Number
                  </label>
                  <Field
                    type="text"
                    name="invoiceNumber"
                    placeholder="Invoice Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-[#1f2937] dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
              )}
            </div>
            <div className="lg:col-span-1">
              <JobCardImages values={{ images: values.images, removedImages: values.removedImages }} setFieldValue={setFieldValue} />
            </div>
          </div>

          {/* Update Job Card Button */}
          <div className="mt-6">
            <Button
              variant="solid" // Use the solid variant
              type="submit"
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Updating..." : "Update Job Card"}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditJobCardForm;