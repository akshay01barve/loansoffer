"use client";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline"; // Heroicon for close button

const Documents = () => {
  const [open, setOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const handleOpen = (url) => {
    setPdfUrl(url);
    setOpen(true);
  };

  const documents = [
    {
      name: "HDFC Fresh Agreement PDF",
      url: "/files/HDFC_FRESH_AGREEMENT.pdf",
    },
    { name: "HDFC BT Agreement PDF", url: "/files/HDFC_BT_AGREEMENT.pdf" },
    {
      name: "HDFC Top-up Agreement PDF",
      url: "/files/HDFC_TOP_UP_AGREEMENT.pdf",
    },
    {
      name: "HDFC Top-up BT Agreement PDF",
      url: "/files/HDFC_TOP_UP_BT_AGREEMENT.pdf",
    },
    {
      name: "Signature Verification PDF",
      url: "/files/Signatute_Verification.pdf",
    },
    { name: "Key Fact PDF", url: "/pdfs/key-fact.pdf" },
    { name: "Aadhar Consent PDF", url: "/pdfs/aadhar-consent.pdf" },
    { name: "Army Consent PDF", url: "/pdfs/army-consent.pdf" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
        HDFC Document PDFs
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {documents.map((doc, index) => (
          <div
            key={index}
            onClick={() => handleOpen(doc.url)}
            className="cursor-pointer bg-gradient-to-br from-deep-purple-100 to-blue-500 text-white shadow-xl rounded-2xl h-36 flex items-center justify-center text-center p-4 hover:scale-105 transition-transform"
          >
            <h3 className="text-lg font-medium leading-snug">{doc.name}</h3>
          </div>
        ))}
      </div>

      <Dialog open={open} handler={() => setOpen(false)} size="sm"  >
        <DialogHeader className="flex justify-between items-center">
          <span className="text-lg font-semibold">Document Viewer</span>
          <button onClick={() => setOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-gray-700 hover:text-red-500" />
          </button>
        </DialogHeader>
        <DialogBody divider className="h-[80vh] p-0">
          {pdfUrl ? (
            <iframe
              src={pdfUrl}
              title="PDF Viewer"
              className="w-full h-full"
              frameBorder="0"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            ></iframe>
          ) : (
            <p className="p-4">No PDF selected</p>
          )}
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="red" onClick={() => setOpen(false)}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default Documents;
