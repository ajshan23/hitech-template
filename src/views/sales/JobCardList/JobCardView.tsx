import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import classNames from "classnames";
import Container from "@/components/shared/Container";
import Loading from "@/components/shared/Loading";
import DoubleSidedImage from "@/components/shared/DoubleSidedImage";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import { FaTools, FaCalendarAlt, FaUser, FaCog } from "react-icons/fa";
import isEmpty from "lodash/isEmpty";
import dayjs from "dayjs";

const apiBaseUrl = "https://mytest.hitechengineeringcompany.in/api";

interface JobCard {
  _id: string;
  customerName: string;
  customerAddress: string;
  phoneNumber: string;
  jobCardNumber: string;
  InDate: string;
  Make: string;
  HP: number;
  KVA: number | null;
  RPM: number | null;
  Type: string;
  Frame: string;
  SrNo: string;
  DealerName: string;
  DealerNumber: string;
  warranty: boolean;
  jobCardStatus: string;
  works: string;
  spares: string;
  industrialworks: string;
  attachments: string[];
  images: { _id: string; image: string }[];
  others: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const JobCardView = () => {
  const [data, setData] = useState<JobCard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    if (!id) {
      navigate("/admin/jobcard");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(`${apiBaseUrl}/jobcards/${id}`);
      if (response.data.success) {
        setData(response.data.data);
      } else {
        setError("Failed to fetch job card data");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <DoubleSidedImage
          src="/img/others/img-2.png"
          darkModeSrc="/img/others/img-2-dark.png"
          alt="Error"
          className="w-48 h-48"
        />
        <h3 className="mt-8 text-xl font-semibold text-gray-800 dark:text-gray-200">{error}</h3>
      </div>
    );
  }

  return (
    <Container className="py-8">
      <Loading loading={loading}>
        {!isEmpty(data) && (
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gray-50 dark:bg-gray-700 p-6 border-b border-gray-200 dark:border-gray-600">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <FaTools className="text-blue-600 dark:text-blue-400 text-3xl" />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      Job Card #{data?.jobCardNumber || "N/A"}
                    </h2>
                    <div className="flex items-center gap-2 mt-1 text-gray-600 dark:text-gray-400">
                      <FaCalendarAlt />
                      <span>{dayjs(data?.InDate).format("MMM DD, YYYY")}</span>
                      <Tag
                        className={classNames(
                          "rounded-full px-2 py-1 text-sm",
                          data?.jobCardStatus === "Pending" &&
                            "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-100",
                          data?.jobCardStatus === "Completed" &&
                            "bg-green-100 text-green-700 dark:bg-green-700 dark:text-green-100",
                          data?.jobCardStatus === "Cancelled" &&
                            "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100",
                          (!data?.jobCardStatus ||
                            !["Pending", "Completed", "Cancelled"].includes(data.jobCardStatus)) &&
                            "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-100"
                        )}
                      >
                        {data?.jobCardStatus || "Unknown"}
                      </Tag>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="solid"
                    className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-2 rounded-md"
                    onClick={() => navigate(`/admin/edit-jobcard/${id}`)}
                    disabled={data?.jobCardStatus !== "Pending"}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="default"
                    className="border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 px-4 py-2 rounded-md"
                    onClick={() => navigate("/admin/jobcard")}
                  >
                    Back
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-6 space-y-8">
              <section className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                  <FaUser className="text-blue-600 dark:text-blue-400" /> Customer Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Name:</strong> {data?.customerName || "N/A"}
                  </p>
                  <p>
                    <strong>Address:</strong> {data?.customerAddress || "N/A"}
                  </p>
                  <p>
                    <strong>Phone:</strong> {data?.phoneNumber || "N/A"}
                  </p>
                </div>
              </section>

              <section className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Make:</strong> {data?.Make || "N/A"}
                  </p>
                  <p>
                    <strong>HP:</strong> {data?.HP || "N/A"}
                  </p>
                  <p>
                    <strong>KVA:</strong> {data?.KVA ?? "N/A"}
                  </p>
                  <p>
                    <strong>RPM:</strong> {data?.RPM ?? "N/A"}
                  </p>
                  <p>
                    <strong>Type:</strong> {data?.Type || "N/A"}
                  </p>
                  <p>
                    <strong>Frame:</strong> {data?.Frame || "N/A"}
                  </p>
                  <p>
                    <strong>Serial No:</strong> {data?.SrNo || "N/A"}
                  </p>
                </div>
              </section>

              <section className="border-b border-gray-200 dark:border-gray-700 pb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                  <FaCog className="text-blue-600 dark:text-blue-400" /> Dealer & Work Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data?.works && (
                      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                        <h5 className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-2">Works</h5>
                        <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{data.works}</p>
                      </div>
                    )}
                    {data?.spares && (
                      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                        <h5 className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-2">Spares</h5>
                        <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{data.spares}</p>
                      </div>
                    )}
                    {data?.industrialworks && (
                      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                        <h5 className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-2">Industrial Works</h5>
                        <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{data.industrialworks}</p>
                      </div>
                    )}
                    {data?.others && (
                      <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                        <h5 className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-2">Others</h5>
                        <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{data.others}</p>
                      </div>
                    )}
                  </div>
              </section>

              {data?.images && data.images.length > 0 && (
                <section className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    Images
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {data.images.map((img, index) => (
                      <DoubleSidedImage
                        key={index}
                        src={img.image}
                        darkModeSrc={img.image} // Adjust if dark mode images differ
                        alt={`Job image ${index + 1}`}
                        className="w-32 h-32 object-cover rounded-md shadow-sm"
                      />
                    ))}
                  </div>
                </section>
              )}

              <section>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Status & Warranty
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                  <p>
                    <strong>Warranty:</strong> {data?.warranty ? "Yes" : "No"}
                  </p>
                  <p>
                    <strong>Status:</strong> {data?.jobCardStatus || "N/A"}
                  </p>
                </div>
              </section>
            </div>
          </div>
        )}
      </Loading>
      {!loading && isEmpty(data) && (
        <div className="h-full flex flex-col items-center justify-center">
          <DoubleSidedImage
            src="/img/others/img-2.png"
            darkModeSrc="/img/others/img-2-dark.png"
            alt="No job card found!"
            className="w-48 h-48"
          />
          <h3 className="mt-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
            No job card found!
          </h3>
        </div>
      )}
    </Container>
  );
};

export default JobCardView;