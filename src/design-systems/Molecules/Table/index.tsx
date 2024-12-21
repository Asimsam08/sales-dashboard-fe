// // // components/DynamicTable.tsx

// // import Image, { StaticImageData } from "next/image";
// // import React, { useState } from "react";

// // interface Product {
// //   id: number;
// //   product: {
// //     name: string;
// //     image: StaticImageData;
// //   };
// //   date: string;
// //   time: string;
// //   timeSpent: string;
// //   orderValue: string;
// //   commission: string;
// // }

// // interface DynamicTableProps {
// //   headers: string[]; // Array of strings representing the headers
// //   data: Product[]; // Array of product data to populate the rows
// //   itemsPerPage: number; // Number of items to display per page
// // }

// // const DynamicTable: React.FC<DynamicTableProps> = ({
// //   headers,
// //   data,
// //   itemsPerPage,
// // }) => {
// //   const [currentPage, setCurrentPage] = useState(1);

// //   // Calculate the total number of pages
// //   const totalPages = Math.ceil(data.length / itemsPerPage);

// //   // Get the data for the current page
// //   const indexOfLastItem = currentPage * itemsPerPage;
// //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //   const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

// //   // Handle page change
// //   const handlePageChange = (page: number) => {
// //     if (page < 1) page = 1;
// //     if (page > totalPages) page = totalPages;
// //     setCurrentPage(page);
// //   };

// //   return (
// //     <div>
// //       <table className="min-w-full table-auto border-collapse">
// //         <thead className="bg-gray-200 text-sm text-[#667085]">
// //           <tr>
// //             {headers.map((header, index) => (
// //               <th key={index} className="py-3 px-6 text-left border-b">
// //                 {header}
// //               </th>
// //             ))}
// //             <th className="py-3 px-6 text-left border-b"></th>
         
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {currentData.map((row) => (
// //             <tr key={row.id} className="border-b text-base text-[#212636]">
// //               <td className="flex items-center gap-4 py-3 px-6">
// //                 <Image src={row.product.image} alt="item image" height={40} width={40} />
// //                 {row.product.name}</td>
// //               <td className="py-3 px-6">{row.date} <span className="text-xs">{row.time}</span></td>
// //               <td className="py-3 px-6">{row.timeSpent}</td>
// //               <td className="py-3 px-6">{row.orderValue}</td>
// //               <td className="py-3 px-6">{row.commission}</td>
// //               <td className="py-3 px-6">View Chat</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //       {/* Pagination Controls */}
// //       <div className="flex justify-between items-center mt-4">
// //         <button
// //           className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
// //           onClick={() => handlePageChange(currentPage - 1)}
// //           disabled={currentPage === 1}
// //         >
// //           Previous
// //         </button>

// //         <div className="flex space-x-2">
// //           {Array.from({ length: totalPages }, (_, index) => (
// //             <button
// //               key={index}
// //               className={`px-4 py-2 rounded ${
// //                 currentPage === index + 1
// //                   ? "bg-blue-500 text-white"
// //                   : "bg-gray-200"
// //               }`}
// //               onClick={() => handlePageChange(index + 1)}
// //             >
// //               {index + 1}
// //             </button>
// //           ))}
// //         </div>

// //         <button
// //           className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
// //           onClick={() => handlePageChange(currentPage + 1)}
// //           disabled={currentPage === totalPages}
// //         >
// //           Next
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DynamicTable;

// // components/DynamicTable.tsx
// import Image, { StaticImageData } from "next/image";
// import React, { useState } from "react";
// import { DynamicTableProps } from "./interface";
// import { RedirectIcon } from "@/design-systems/Atoms/Icons";


// const DynamicTable: React.FC<DynamicTableProps> = ({
//   headers,
//   data,
//   itemsPerPage,
// }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   // Calculate the total number of pages
//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   // Get the data for the current page
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

//   // Handle page change
//   const handlePageChange = (page: number) => {
//     if (page < 1) page = 1;
//     if (page > totalPages) page = totalPages;
//     setCurrentPage(page);
//   };

//   return (
//     <div>
//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto border-collapse">
//           <thead className="bg-gray-200 font-normal text-sm text-[#667085]">
//             <tr>
//               {headers.map((header, index) => (
//                 <th key={index} className="py-3 px-6 text-left border-b">
//                   {header}
//                 </th>
//               ))}
//               <th className="py-3 px-6 text-left border-b"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentData.map((row) => (
//               <tr key={row.id} className="border-b text-base text-[#212636]">
//                 <td className="flex items-center gap-4 py-3 px-6">
//                   <Image
//                     src={row.product.image}
//                     alt="item image"
//                     height={40}
//                     width={40}
//                   />
//                   {row.product.name}
//                 </td>
//                 <td className="py-3 px-6">
//                   <div className="text-sm">{row.date}</div>
//                   <div className="text-xs text-gray-500">{row.time}</div>
//                 </td>
//                 <td className="py-3 px-6">{row.timeSpent}</td>
//                 <td className="py-3 px-6">{row.orderValue}</td>
//                 <td className="py-3 px-6 font-bold">{row.commission}</td>
//                 <td className="py-3 px-6 text-[#8A94A6] text-xs -4 items-start cursor-pointer">
//                   View Chat
//                <RedirectIcon /> 
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-end items-center mt-4 space-x-2">
//         <button
//           className="px-4 py-2 bg-greenTheme text-white rounded disabled:bg-gray-300"
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>

//         <div className="flex space-x-2">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index}
//               className={`px-4 py-2 rounded ${
//                 currentPage === index + 1
//                   ? "bg-greenTheme text-white"
//                   : "bg-gray-200"
//               }`}
//               onClick={() => handlePageChange(index + 1)}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>

//         <button
//           className="px-4 py-2 bg-greenTheme text-white rounded disabled:bg-gray-300"
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DynamicTable;


// components/DynamicTable.tsx
import Image from "next/image";
import React, { useState } from "react";
import { DynamicTableProps } from "./interface";
import { RedirectIcon } from "@/design-systems/Atoms/Icons";

const DynamicTable: React.FC<DynamicTableProps> = ({
  headers,
  data,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get the data for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="overflow-x-auto rounded-[8px] border border-[#DCDFE4]">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-200 font-normal text-sm text-[#667085]">
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="py-3 px-6 text-left border-b">
                  {header}
                </th>
              ))}
              <th className="py-3 px-6 text-left border-b"></th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row) => (
              <tr key={row.id} className="border-b text-base text-[#212636] hover:bg-gray-200">
                <td className="flex items-center gap-4 py-3 px-6">
                  <Image
                    src={row.product.image}
                    alt="item image"
                    height={40}
                    width={40}
                  />
                  {row.product.name}
                </td>
                <td className="py-3 px-6">
                  <div className="text-sm">{row.date}</div>
                  <div className="text-xs text-gray-500">{row.time}</div>
                </td>
                <td className="py-3 px-6">{row.timeSpent}</td>
                <td className="py-3 px-6">{row.orderValue}</td>
                <td className="py-3 px-6 font-bold">{row.commission}</td>
                <td className="py-3 px-6 text-[#8A94A6] text-xs gap-4 cursor-pointer">
                <div className="inline-block mr-4">View Chat</div>
                  <div className="inline-block align-middle">
                    <RedirectIcon />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-end items-center mt-4 space-x-2">
        <button
          className="px-4 py-2 bg-greenTheme text-white rounded disabled:bg-gray-300"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-greenTheme text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          className="px-4 py-2 bg-greenTheme text-white rounded disabled:bg-gray-300"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DynamicTable;
