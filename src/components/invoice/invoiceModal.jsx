'use client'
import Image from "next/image";
import logo from "@/../../public/assets/logo.svg";
import React from 'react';
import jsPDF from 'jspdf';
import uuid4 from "uuid4";

// Generate a new UUID
var id = uuid4();


const InvoiceModal = ({ service, user }) => {
  // Generate a new UUID
  const invoceId = uuid4();
  const date = new Date();
  const currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  const getOffer = 1;
  const finalBill = getOffer > 2 ? service.price * getOffer : service.price;
  const saveMoney = service.price - finalBill;
  // console.log(currentDate);

const generatePdf = (service, user) => {
  const doc = new jsPDF();

  // Invoice content
  

  // Add content to the PDF
  doc.setFontSize(20);
  doc.text('Invoice', 10, 10); // Title

  doc.setFontSize(12);
  doc.text(`Invoice #${invoceId}`, 10, 20); // Invoice Number
  doc.text(`Date: ${currentDate}`, 10, 30); // Date
  doc.text(`Bill To: ${user.data.user.name}`, 10, 40); // Customer Name
  doc.text(`Email: ${user.data.user.email}`, 10, 50); // Customer Email

  // Service Table-like structure
  doc.text('Service:', 10, 60);
  doc.text(service.title, 50, 60); // Service Title

  doc.text('Job:', 10, 70);
  doc.text('Quality Control Specialist', 50, 70); // Example Job

  doc.text('Price:', 10, 80);
  doc.text(`${service.price}`, 50, 80); // Service Price

  doc.text('Offers Save:', 10, 90);
  doc.text(`${saveMoney}`, 50, 90); // Offer Save

  doc.text('Payable Bill:', 10, 100);
  doc.text(`${finalBill}`, 50, 100); // Final Bill

  // Save the PDF
  doc.save('invoice.pdf');
};
  return (
    <div className="w-full">
      <div className="mx-2">
        <div className="flex flex-col p-1 sm:p-10 bg-white shadow-md rounded-xl dark:bg-neutral-800">
          <div className="flex justify-between">
            <div>
              <Image src={logo} height={50} width={50} alt="Logo" />
            </div>

            <div className="text-end">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-neutral-200">Invoice #</h2>
              <span className="mt-1 block text-gray-500 dark:text-neutral-500">{invoceId}</span>
              <address className="mt-4 not-italic text-gray-800 dark:text-neutral-200">
                45 Mirpur<br />Dhaka<br />Bangladesh
              </address>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">Bill to:</h3>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">{user.data.user.name}</h3>
              <address className="mt-2 not-italic text-gray-500 dark:text-neutral-500">
                {user.data.user.email}
              </address>
            </div>

            <div className="sm:text-end space-y-2">
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">Invoice date:</dt>
                  <dd className="col-span-2 text-gray-500 dark:text-neutral-500">{currentDate}</dd>
                </dl>
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 dark:text-neutral-200">Payment date:</dt>
                  <dd className="col-span-2 text-gray-500 dark:text-neutral-500">{currentDate}</dd>
                </dl>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="text-white">
                  <th></th>
                  <th>Service</th>
                  <th>Job</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-white">
                  <th>1</th>
                  <td>{service.title}</td>
                  <td>Quality Control Specialist</td>
                  <td>{service.price}</td>
                </tr>
                <tr className="text-white border-none">
                  <th></th>
                  <td></td>
                  <td>Offers Save</td>
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
          <button onClick={() => generatePdf(service, user)} className="download-btn">
            Download PDF
          </button>
          <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border bg-blue-600 text-white hover:bg-blue-700">
            Print
          </a>
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal;
