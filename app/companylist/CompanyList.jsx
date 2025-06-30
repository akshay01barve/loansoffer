"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const CompanyList = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 


  return (
    <div>
     <div className="">
       <div className="flex flex-row gap-3">
      
         <div className="basis-2/3">

          <Accordion
            open={open === 1} icon={<Icon id={1} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 transition-colors ${
                open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              HDFC BANK (PAN INDIA)
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>


          <Accordion
            open={open === 2}  icon={<Icon id={2} open={open} />}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 transition-colors ${
                open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              ICICI BANK  (PAN INDIA) 
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <iframe
                width="100%"
                height="600px"
                 src="/files/ICII_COM.pdf"
                title="ICICI Bank"
              ></iframe>
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 3} icon={<Icon id={3} open={open} />}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 transition-colors ${
                open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              INDUSIND BANK  (PAN INDIA)
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 4} icon={<Icon id={4} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`border-b-0 transition-colors ${
                open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              IDFC FIRST BANK (PAN INDIA)
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          


          <Accordion
            open={open === 5}  icon={<Icon id={5} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className={`border-b-0 transition-colors ${
                open === 5 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              AXIS BANK
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 6}  icon={<Icon id={6} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className={`border-b-0 transition-colors ${
                open === 6 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              YES BANK
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 7}  icon={<Icon id={7} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(7)}
              className={`border-b-0 transition-colors ${
                open === 7 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              KOTAK BANK
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

           <Accordion
            open={open === 8}  icon={<Icon id={8} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(8)}
              className={`border-b-0 transition-colors ${
                open === 8 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              PIRAMAL FINANCE
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

           <Accordion
            open={open === 9}  icon={<Icon id={9} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(9)}
              className={`border-b-0 transition-colors ${
                open === 9 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              POONAWALA FINANCE
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 10} icon={<Icon id={10} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(10)}
              className={`border-b-0 transition-colors ${
                open === 10 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              INCRED FINANCE
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
               <iframe
                width="100%"
                height="600px"
                 src="/files/INCRED.pdf"
                title="ICICI Bank"
              ></iframe>
            </AccordionBody>
          </Accordion>

           <Accordion
            open={open === 11} icon={<Icon id={11} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(11)}
              className={`border-b-0 transition-colors ${
                open === 11 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              ADITYA BIRLA CAPITAL LTD
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

           <Accordion
            open={open === 12} icon={<Icon id={12} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(12)}
              className={`border-b-0 transition-colors ${
                open === 12 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              FINNABLE FINANCE
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <iframe
                width="100%"
                height="600px"
                 src="/files/FINABLE.pdf"
                title="FINNABLE Finance"
              ></iframe>
            </AccordionBody>
          </Accordion>


          <Accordion
            open={open === 13} icon={<Icon id={13} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(13)}
              className={`border-b-0 transition-colors ${
                open === 13 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              FIBE FINANCE
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <iframe
                width="100%"
                height="600px"
                 src="/files/FIBE.pdf"
                title="FIBE Finance"
              ></iframe>
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 14} icon={<Icon id={14} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(14)}
              className={`border-b-0 transition-colors ${
                open === 14 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              CREDIT SESSION
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

           <Accordion
            open={open === 15} icon={<Icon id={15} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(15)}
              className={`border-b-0 transition-colors ${
                open === 15 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              FULLTRON
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>


          <Accordion
            open={open === 16} icon={<Icon id={16} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(16)}
              className={`border-b-0 transition-colors ${
                open === 16 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              CHOLA MANDALAM
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>


            <Accordion
            open={open === 17} icon={<Icon id={17} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(17)}
              className={`border-b-0 transition-colors ${
                open === 17 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              BAJAJ FINANCE
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>






        </div>
       
        <div className="xs:hidden basis-1/3">
          {/* <h1>POLICY </h1> */}
          
         <div>

          <Accordion
            open={open === 1} icon={<Icon id={1} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 transition-colors ${
                open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              HDFC BANK POLICY
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>


          <Accordion
            open={open === 2}  icon={<Icon id={2} open={open} />}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 transition-colors ${
                open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              ICICI BANK  POLICY 
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              <iframe
                width="100%"
                height="600px"
                src="https://drive.google.com/file/d/1nmm0R9Wcj0W64WS-iZNeLBMWw8-U9kwC/view?usp=drive_link"
                title="GeeksforGeeks"
              ></iframe>
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 3} icon={<Icon id={3} open={open} />}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 transition-colors ${
                open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              INDUSIND BANK  POLICY
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 4} icon={<Icon id={4} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`border-b-0 transition-colors ${
                open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              IDFC FIRST BANK POLICY
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          


          <Accordion
            open={open === 5}  icon={<Icon id={5} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className={`border-b-0 transition-colors ${
                open === 5 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              AXIS BANK POLICY
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 6}  icon={<Icon id={6} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(6)}
              className={`border-b-0 transition-colors ${
                open === 6 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              YES BANK  POLICY
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 7}  icon={<Icon id={7} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(7)}
              className={`border-b-0 transition-colors ${
                open === 7 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              KOTAK BANK POLICY
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

           <Accordion
            open={open === 8}  icon={<Icon id={8} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(8)}
              className={`border-b-0 transition-colors ${
                open === 8 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              PIRAMAL FINANCE POLICY
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

           <Accordion
            open={open === 9}  icon={<Icon id={9} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(9)}
              className={`border-b-0 transition-colors ${
                open === 9 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              POONAWALA FINANCE POLICY
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 10} icon={<Icon id={10} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(10)}
              className={`border-b-0 transition-colors ${
                open === 10 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              INCRED FINANCE POLICY
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

           <Accordion
            open={open === 11} icon={<Icon id={11} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(11)}
              className={`border-b-0 transition-colors ${
                open === 11 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              ADITYA BIRLA CAPITAL LTD  POLICY
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

           <Accordion
            open={open === 12} icon={<Icon id={12} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(12)}
              className={`border-b-0 transition-colors ${
                open === 12 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              FINNABLE FINANCE POLICY
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>


          <Accordion
            open={open === 13} icon={<Icon id={13} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(13)}
              className={`border-b-0 transition-colors ${
                open === 13 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              FIBE FINANCE  POLICY
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 14} icon={<Icon id={14} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(14)}
              className={`border-b-0 transition-colors ${
                open === 14 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              CREDIT SESSION  POLICY
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>

           <Accordion
            open={open === 15} icon={<Icon id={15} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(15)}
              className={`border-b-0 transition-colors ${
                open === 15 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              FULLTRON POLICY
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>


          <Accordion
            open={open === 16} icon={<Icon id={16} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(16)}
              className={`border-b-0 transition-colors ${
                open === 16 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              CHOLA MANDALAM POLICY
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>


            <Accordion
            open={open === 17} icon={<Icon id={17} open={open} />}
            className="rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(17)}
              className={`border-b-0 transition-colors ${
                open === 17 ? "text-blue-500 hover:!text-blue-700" : ""
              }`}
            >
              BAJAJ FINANCE POLICY
            </AccordionHeader>
            <AccordionBody className="pt-0 text-base font-normal">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>






        </div>

      
          
        </div>


      </div>
     </div>
    </div>
  );
};

export default CompanyList;
