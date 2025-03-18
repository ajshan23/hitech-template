import { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import DataTable from '@/components/shared/DataTable';
import Badge from '@/components/ui/Badge';
import type { ColumnDef, DataTableResetHandle } from '@/components/shared/DataTable';
import { HiCheck, HiX } from 'react-icons/hi'; // Icons for the toggle button

interface Worker {
  _id: string;
  workerName: string;
  workerImage: string;
  phoneNumber: string;
  status: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const statusColorMap: Record<string, { dotClass: string }> = {
  true: { dotClass: 'bg-emerald-500' }, // Active status
  false: { dotClass: 'bg-red-500' },   // Inactive status
};

const WorkersTable = ({
  searchTerm,
}: {
  searchTerm: string;
}) => {
  const tableRef = useRef<DataTableResetHandle>(null);
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setPageIndex(1);
  }, [searchTerm]);

  useEffect(() => {
    const fetchWorkers = async () => {
      setLoading(true);
      try {
        const params: any = {
          page: pageIndex,
          limit: pageSize,
          searchTerm: searchTerm ? searchTerm : "",
        };

        const response = await axios.get('https://mytest.hitechengineeringcompany.in/api/worker', { params });
        setWorkers(response.data?.data?.workers);
        setTotal(response.data?.data?.totalPages);
      } catch (error) {
        console.error('Error fetching workers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkers();
  }, [pageIndex, pageSize, searchTerm]);

  const toggleWorkerStatus = async (workerId: string, currentStatus: boolean) => {
    try {
      // Make API call to toggle status
      const response = await axios.put(
        `https://mytest.hitechengineeringcompany.in/api/worker/change-status?id=${workerId}`
      );

      // Update local state
      setWorkers((prevWorkers) =>
        prevWorkers.map((worker) =>
          worker._id === workerId
            ? { ...worker, status: !currentStatus } // Toggle status locally
            : worker
        )
      );

      console.log('Status updated successfully:', response.data);
    } catch (error) {
      console.error('Error toggling worker status:', error);
    }
  };

  const columns: ColumnDef<Worker>[] = useMemo(
    () => [
      {
        header: 'Image',
        accessorKey: 'workerImage',
        cell: (props) => (
          <img
            src={props.row.original.workerImage}
            alt={props.row.original.workerName}
            className="w-10 h-10 rounded-full"
          />
        ),
      },
      {
        header: 'Worker Name',
        accessorKey: 'workerName',
        cell: (props) => (
          <span className="capitalize">{props.row.original.workerName}</span>
        ),
      },
      {
        header: 'Phone',
        accessorKey: 'phoneNumber',
      },
      {
        header: 'Status',
        accessorKey: 'status',
        cell: (props) => {
          const status = props.row.original.status;
          const isActive = status; // No need to convert to boolean if it's already a boolean
          return (
            <div className="flex items-center gap-2">
              <Badge className={statusColorMap[String(isActive)]?.dotClass || 'bg-gray-500'} />
              <span className="capitalize font-semibold">
                {isActive ? 'Active' : 'Inactive'}
              </span>
            </div>
          );
        },
      },
      {
        header: 'Actions',
        id: 'actions',
        cell: (props) => {
          const isActive = props.row.original.status;
          return (
            <div className="flex justify-end">
              <button
                className={`flex items-center justify-center w-24 h-8 rounded-full transition-colors ${
                  isActive
                    ? 'bg-red-500 hover:bg-red-600' // Red for deactivate
                    : 'bg-emerald-500 hover:bg-emerald-600' // Green for activate
                }`}
                onClick={() => toggleWorkerStatus(props.row.original._id, isActive)}
              >
                <span className="flex items-center gap-1 text-white">
                  {isActive ? (
                    <>
                     
                      <span>Deactivate</span>
                    </>
                  ) : (
                    <>
                      
                      <span>Activate</span>
                    </>
                  )}
                </span>
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  const onPaginationChange = (page: number) => setPageIndex(page);
  const onSelectChange = (size: number) => {
    setPageSize(size);
    setPageIndex(1);
  };

  return (
    <DataTable
      ref={tableRef}
      columns={columns}
      data={workers}
      loading={loading}
      pagingData={{ total, pageIndex, pageSize }}
      onPaginationChange={onPaginationChange}
      onSelectChange={onSelectChange}
    />
  );
};

export default WorkersTable;