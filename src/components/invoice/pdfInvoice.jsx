import React from "react";
import DownloadPdf from "./downloadPdf";
import InvoiceModal from "./invoiceModal";

const PdfInvoice = ({ service,user }) => {
  // console.log(service);
  return (
    <div className="bg-black text-white  mx-3 mt-4 rounded-xl">
      <h1 className="font-semibold p-2">Download</h1>
      <button
        className="w-full text-white"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <DownloadPdf title={service.title}></DownloadPdf>
      </button>
      <dialog id="my_modal_2" className="modal text-black w-full">
        <div className="modal-box w-full max-w-7xl max-h-max">
          <InvoiceModal service={service} user={user}></InvoiceModal>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default PdfInvoice;
