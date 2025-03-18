import { useState } from "react";
import AdaptableCard from "@/components/shared/AdaptableCard";
import Upload from "@/components/ui/Upload";
import { Field, FieldProps } from "formik";
import { FormItem } from "@/components/ui";

type JobCardImagesProps = {
  values: {
    images: Array<{ _id: string; image: string }>; // Existing images
    removedImages: string[]; // Track removed images
  };
  setFieldValue: (field: string, value: any) => void;
};

const JobCardImages = (props: JobCardImagesProps) => {
  const { values, setFieldValue } = props;
  const [newImages, setNewImages] = useState<File[]>([]); // Track newly uploaded images

  const beforeUpload = (file: FileList | null, fileList: File[]) => {
    if (!file || file.length === 0) {
      return "Please upload an image file!";
    }

    const uploadedFile = file[0]; // Get the first file from the FileList

    // Check if the file is an image
    const isImage = uploadedFile.type.startsWith("image/");
    if (!isImage) {
      return "Please upload an image file!";
    }

    // Check if the file size is less than 500KB
    const isLt500KB = uploadedFile.size / 1024 <= 500;
    if (!isLt500KB) {
      return "Image size must be less than 500KB!";
    }

    return true; // Return true if the file is valid
  };

  const handleRemoveImage = (imageId: string) => {
    // Add the image ID to the removedImages list
    const updatedRemovedImages = [...values.removedImages, imageId];
    setFieldValue("removedImages", updatedRemovedImages);

    // Remove the image from the form values
    const updatedImages = values.images.filter((img) => img._id !== imageId);
    setFieldValue("images", updatedImages);
  };

  const handleRemoveNewImage = (index: number) => {
    // Remove the new image from the newImages list
    const updatedNewImages = newImages.filter((_, i) => i !== index);
    setNewImages(updatedNewImages);

    // Update the form values
    setFieldValue("newImages", updatedNewImages);
  };

  return (
    <AdaptableCard className="mb-4">
      <h5>Job Card Images</h5>
      <p className="mb-6">Add or change images for the job card</p>
      <FormItem>
        <Field name="images">
          {({ field, form }: FieldProps) => (
            <>
              {/* Display existing images */}
              <div className="flex flex-wrap gap-4 mb-4">
                {values.images.map((img) => (
                  <div key={img._id} className="relative">
                    <img
                      src={img.image}
                      alt="Job Card Image"
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                      onClick={() => handleRemoveImage(img._id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              {/* Display new images */}
              <div className="flex flex-wrap gap-4 mb-4">
                {newImages.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)} // Create a URL for the new image
                      alt="New Job Card Image"
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                      onClick={() => handleRemoveNewImage(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              {/* Upload new images */}
              <Upload
                draggable
                beforeUpload={beforeUpload}
                onChange={(files) => {
                  const newFiles = Array.from(files);
                  setNewImages((prev) => [...prev, ...newFiles]); // Add new files to the newImages state
                  setFieldValue("newImages", [...newImages, ...newFiles]); // Update form values
                }}
              >
                <div className="my-16 text-center">
                  <p className="font-semibold">
                    <span className="text-gray-800 dark:text-white">
                      Drop your image here, or{" "}
                    </span>
                    <span className="text-blue-500">browse</span>
                  </p>
                  <p className="mt-1 opacity-60 dark:text-white">
                    Support: jpeg, png
                  </p>
                </div>
              </Upload>

              {/* Hidden input to track removed images */}
              <input
                type="hidden"
                name="removedImages"
                value={JSON.stringify(values.removedImages)}
              />
            </>
          )}
        </Field>
      </FormItem>
    </AdaptableCard>
  );
};

export default JobCardImages;