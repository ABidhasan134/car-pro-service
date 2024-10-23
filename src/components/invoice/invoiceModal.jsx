import React from "react";
import logo from "@/../../public/assets/logo.svg";
import Image from "next/image";

const InvoiceModal = ({ service, user }) => {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}/${month}/${year}`;
  const getOffer=1;
  const finalBill = getOffer>2?service.price*getOffer: service.price; 
  const saveMoney= service.price-finalBill;

  console.log(service);
  return (
    <div className="w-full">
      <div className="mx-2">
        <div className="flex flex-col p-1 sm:p-10 bg-white shadow-md rounded-xl dark:bg-neutral-800">
          <div className="flex justify-between">
            <div>
              <Image src={logo} height={50} width={50}></Image>
            </div>

            <div className="text-end">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-neutral-200">
                Invoice #
              </h2>
              <span className="mt-1 block text-gray-500 dark:text-neutral-500">
                3682303
              </span>

              <address className="mt-4 not-italic text-gray-800 dark:text-neutral-200">
                45 Mirpur
                <br />
                Dhaka
                <br />
                Bangladesh
              </address>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Bill to:
              </h3>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                {user.data.user.name}
              </h3>
              <address className="mt-2 not-italic text-gray-500 dark:text-neutral-500">
                {user.data.user.email}
              </address>
            </div>

            <div className="sm:text-end space-y-2">
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                    Invoice date:
                  </dt>
                  <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                    {currentDate}
                  </dd>
                </dl>
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">
                    payment date:
                  </dt>
                  <dd className="col-span-2 text-gray-500 dark:text-neutral-500">
                    {currentDate}
                  </dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-white">
                  <th></th>
                  <th>Service</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="text-white">
                  <th>1</th>
                  <td>{service.title}</td>
                  <td>Quality Control Specialist</td>
                  <td>{service.price}</td>
                </tr>
                <tr className="text-white border-none">
                  <th></th>
                  <td></td>
                  <td>Offers save </td>
                  <td>{saveMoney}</td>
                </tr>
                <tr className="text-white">
                  <th></th>
                  <td></td>
                  <td>Payable Bill</td>
                  <td>{finalBill}</td>
                </tr>
              </tbody>
            </table>
           
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-x-3">
          <a
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            href="#"
          >
            {/* SVG Icon */}
            Invoice PDF
          </a>
          <a
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            {/* SVG Icon */}
            Print
          </a>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
