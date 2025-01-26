import React, { useState } from "react";

type Employee = {
  employee_id: number;
  first_name: string;
  last_name: string;
  dob: string;
  email: string;
  phone_number: string;
  address: string;
  job_title: string;
  department: string;
  salary: number;
  date_hired: string;
  status: string;
  manager_id: number;
  performance_score: number;
  gender: string;
  marital_status: string;
  work_email: string;
  work_phone: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
};

const employeeData: Employee[] = [
  {
    employee_id: 1,
    first_name: "John",
    last_name: "Doe",
    dob: "1985-06-15",
    email: "john.doe@example.com",
    phone_number: "+1234567890",
    address: "123 Main St, Springfield, IL",
    job_title: "Software Engineer",
    department: "Engineering",
    salary: 80000,
    date_hired: "2015-03-01",
    status: "Active",
    manager_id: 3,
    performance_score: 4.5,
    gender: "Male",
    marital_status: "Single",
    work_email: "john.doe@company.com",
    work_phone: "+1987654321",
    emergency_contact_name: "Jane Doe",
    emergency_contact_phone: "+1123456789",
  },
  {
    employee_id: 2,
    first_name: "Jane",
    last_name: "Smith",
    dob: "1990-11-22",
    email: "jane.smith@example.com",
    phone_number: "+1098765432",
    address: "456 Oak Rd, Greenfield, WI",
    job_title: "Product Manager",
    department: "Product",
    salary: 95000,
    date_hired: "2018-07-10",
    status: "Active",
    manager_id: 4,
    performance_score: 4.8,
    gender: "Female",
    marital_status: "Married",
    work_email: "jane.smith@company.com",
    work_phone: "+1987654322",
    emergency_contact_name: "Tom Smith",
    emergency_contact_phone: "+1123456780",
  },
  {
    employee_id: 3,
    first_name: "Michael",
    last_name: "Johnson",
    dob: "1982-03-30",
    email: "michael.johnson@example.com",
    phone_number: "+1222333444",
    address: "789 Pine Blvd, Madison, WI",
    job_title: "HR Manager",
    department: "Human Resources",
    salary: 85000,
    date_hired: "2016-02-15",
    status: "Active",
    manager_id: 5,
    performance_score: 4.2,
    gender: "Male",
    marital_status: "Married",
    work_email: "michael.johnson@company.com",
    work_phone: "+1987654323",
    emergency_contact_name: "Sarah Johnson",
    emergency_contact_phone: "+1122334455",
  },
  {
    employee_id: 4,
    first_name: "Emily",
    last_name: "Davis",
    dob: "1995-02-10",
    email: "emily.davis@example.com",
    phone_number: "+1256987453",
    address: "101 Maple St, Chicago, IL",
    job_title: "UX Designer",
    department: "Design",
    salary: 70000,
    date_hired: "2019-01-20",
    status: "Active",
    manager_id: 3,
    performance_score: 4.7,
    gender: "Female",
    marital_status: "Single",
    work_email: "emily.davis@company.com",
    work_phone: "+1987654324",
    emergency_contact_name: "David Davis",
    emergency_contact_phone: "+1123456790",
  },
  {
    employee_id: 1,
    first_name: "John",
    last_name: "Doe",
    dob: "1985-06-15",
    email: "john.doe@example.com",
    phone_number: "+1234567890",
    address: "123 Main St, Springfield, IL",
    job_title: "Software Engineer",
    department: "Engineering",
    salary: 80000,
    date_hired: "2015-03-01",
    status: "Active",
    manager_id: 3,
    performance_score: 4.5,
    gender: "Male",
    marital_status: "Single",
    work_email: "john.doe@company.com",
    work_phone: "+1987654321",
    emergency_contact_name: "Jane Doe",
    emergency_contact_phone: "+1123456789",
  },
  {
    employee_id: 2,
    first_name: "Jane",
    last_name: "Smith",
    dob: "1990-11-22",
    email: "jane.smith@example.com",
    phone_number: "+1098765432",
    address: "456 Oak Rd, Greenfield, WI",
    job_title: "Product Manager",
    department: "Product",
    salary: 95000,
    date_hired: "2018-07-10",
    status: "Active",
    manager_id: 4,
    performance_score: 4.8,
    gender: "Female",
    marital_status: "Married",
    work_email: "jane.smith@company.com",
    work_phone: "+1987654322",
    emergency_contact_name: "Tom Smith",
    emergency_contact_phone: "+1123456780",
  },
  {
    employee_id: 3,
    first_name: "Michael",
    last_name: "Johnson",
    dob: "1982-03-30",
    email: "michael.johnson@example.com",
    phone_number: "+1222333444",
    address: "789 Pine Blvd, Madison, WI",
    job_title: "HR Manager",
    department: "Human Resources",
    salary: 85000,
    date_hired: "2016-02-15",
    status: "Active",
    manager_id: 5,
    performance_score: 4.2,
    gender: "Male",
    marital_status: "Married",
    work_email: "michael.johnson@company.com",
    work_phone: "+1987654323",
    emergency_contact_name: "Sarah Johnson",
    emergency_contact_phone: "+1122334455",
  },
  {
    employee_id: 4,
    first_name: "Emily",
    last_name: "Davis",
    dob: "1995-02-10",
    email: "emily.davis@example.com",
    phone_number: "+1256987453",
    address: "101 Maple St, Chicago, IL",
    job_title: "UX Designer",
    department: "Design",
    salary: 70000,
    date_hired: "2019-01-20",
    status: "Active",
    manager_id: 3,
    performance_score: 4.7,
    gender: "Female",
    marital_status: "Single",
    work_email: "emily.davis@company.com",
    work_phone: "+1987654324",
    emergency_contact_name: "David Davis",
    emergency_contact_phone: "+1123456790",
  },
  {
    employee_id: 1,
    first_name: "John",
    last_name: "Doe",
    dob: "1985-06-15",
    email: "john.doe@example.com",
    phone_number: "+1234567890",
    address: "123 Main St, Springfield, IL",
    job_title: "Software Engineer",
    department: "Engineering",
    salary: 80000,
    date_hired: "2015-03-01",
    status: "Active",
    manager_id: 3,
    performance_score: 4.5,
    gender: "Male",
    marital_status: "Single",
    work_email: "john.doe@company.com",
    work_phone: "+1987654321",
    emergency_contact_name: "Jane Doe",
    emergency_contact_phone: "+1123456789",
  },
  {
    employee_id: 2,
    first_name: "Jane",
    last_name: "Smith",
    dob: "1990-11-22",
    email: "jane.smith@example.com",
    phone_number: "+1098765432",
    address: "456 Oak Rd, Greenfield, WI",
    job_title: "Product Manager",
    department: "Product",
    salary: 95000,
    date_hired: "2018-07-10",
    status: "Active",
    manager_id: 4,
    performance_score: 4.8,
    gender: "Female",
    marital_status: "Married",
    work_email: "jane.smith@company.com",
    work_phone: "+1987654322",
    emergency_contact_name: "Tom Smith",
    emergency_contact_phone: "+1123456780",
  },
  {
    employee_id: 3,
    first_name: "Michael",
    last_name: "Johnson",
    dob: "1982-03-30",
    email: "michael.johnson@example.com",
    phone_number: "+1222333444",
    address: "789 Pine Blvd, Madison, WI",
    job_title: "HR Manager",
    department: "Human Resources",
    salary: 85000,
    date_hired: "2016-02-15",
    status: "Active",
    manager_id: 5,
    performance_score: 4.2,
    gender: "Male",
    marital_status: "Married",
    work_email: "michael.johnson@company.com",
    work_phone: "+1987654323",
    emergency_contact_name: "Sarah Johnson",
    emergency_contact_phone: "+1122334455",
  },
  {
    employee_id: 4,
    first_name: "Emily",
    last_name: "Davis",
    dob: "1995-02-10",
    email: "emily.davis@example.com",
    phone_number: "+1256987453",
    address: "101 Maple St, Chicago, IL",
    job_title: "UX Designer",
    department: "Design",
    salary: 70000,
    date_hired: "2019-01-20",
    status: "Active",
    manager_id: 3,
    performance_score: 4.7,
    gender: "Female",
    marital_status: "Single",
    work_email: "emily.davis@company.com",
    work_phone: "+1987654324",
    emergency_contact_name: "David Davis",
    emergency_contact_phone: "+1123456790",
  },
  {
    employee_id: 1,
    first_name: "John",
    last_name: "Doe",
    dob: "1985-06-15",
    email: "john.doe@example.com",
    phone_number: "+1234567890",
    address: "123 Main St, Springfield, IL",
    job_title: "Software Engineer",
    department: "Engineering",
    salary: 80000,
    date_hired: "2015-03-01",
    status: "Active",
    manager_id: 3,
    performance_score: 4.5,
    gender: "Male",
    marital_status: "Single",
    work_email: "john.doe@company.com",
    work_phone: "+1987654321",
    emergency_contact_name: "Jane Doe",
    emergency_contact_phone: "+1123456789",
  },
  {
    employee_id: 2,
    first_name: "Jane",
    last_name: "Smith",
    dob: "1990-11-22",
    email: "jane.smith@example.com",
    phone_number: "+1098765432",
    address: "456 Oak Rd, Greenfield, WI",
    job_title: "Product Manager",
    department: "Product",
    salary: 95000,
    date_hired: "2018-07-10",
    status: "Active",
    manager_id: 4,
    performance_score: 4.8,
    gender: "Female",
    marital_status: "Married",
    work_email: "jane.smith@company.com",
    work_phone: "+1987654322",
    emergency_contact_name: "Tom Smith",
    emergency_contact_phone: "+1123456780",
  },
  {
    employee_id: 3,
    first_name: "Michael",
    last_name: "Johnson",
    dob: "1982-03-30",
    email: "michael.johnson@example.com",
    phone_number: "+1222333444",
    address: "789 Pine Blvd, Madison, WI",
    job_title: "HR Manager",
    department: "Human Resources",
    salary: 85000,
    date_hired: "2016-02-15",
    status: "Active",
    manager_id: 5,
    performance_score: 4.2,
    gender: "Male",
    marital_status: "Married",
    work_email: "michael.johnson@company.com",
    work_phone: "+1987654323",
    emergency_contact_name: "Sarah Johnson",
    emergency_contact_phone: "+1122334455",
  },
  {
    employee_id: 4,
    first_name: "Emily",
    last_name: "Davis",
    dob: "1995-02-10",
    email: "emily.davis@example.com",
    phone_number: "+1256987453",
    address: "101 Maple St, Chicago, IL",
    job_title: "UX Designer",
    department: "Design",
    salary: 70000,
    date_hired: "2019-01-20",
    status: "Active",
    manager_id: 3,
    performance_score: 4.7,
    gender: "Female",
    marital_status: "Single",
    work_email: "emily.davis@company.com",
    work_phone: "+1987654324",
    emergency_contact_name: "David Davis",
    emergency_contact_phone: "+1123456790",
  },
];

const ITEMS_PER_PAGE = 5;

const CondensedTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination data
  const totalPages = Math.ceil(employeeData.length / ITEMS_PER_PAGE);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  return (
    <>
      <div className="overflow-auto h-80">
        <table className="min-w-fit text-xs text-left text-gray-700 border border-gray-200">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              {Object.keys(employeeData[0]).map((key) => (
                <th key={key} className="px-2 py-1">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employeeData.map((employee) => (
              <tr key={employee.employee_id} className="hover:bg-gray-50">
                {Object.keys(employee).map((key) => (
                  <td
                    key={key}
                    className="px-2 py-1 truncate border border-gray-200"
                  >
                    {employee[key as keyof Employee] || ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg border ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-100 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg border ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-100 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CondensedTable;
