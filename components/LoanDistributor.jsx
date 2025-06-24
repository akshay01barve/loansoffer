"use client";
import React from "react";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

// Stats data
const statsData = [
  {
    value: "25+",
    label: "Years of Experience",
    image: "/growth.png",
  },
  {
    value: "275+",
    label: "Partner Banks & NBFCs",
    image: "/partner.png",
  },
  {
    value: "4,000+",
    label: "Cities Across India",
    image: "/cities.png",
  },
  {
    value: "₹1,000cr+",
    label: "Successful Disbursal",
    image: "/dis.png",
  },
];

const LoanDistributor = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-9 text-center">
        Offer Loan – India’s Leading Loan Distribution Company
      </h1>

      <div className="">
        <div className="grid grid-cols-2 gap-5   md:flex md:flex-row md:justify-around">
          {statsData.map((item, index) => (
            <Card
              key={index}
              className="p-4 "
            >
              <div className="flex justify-center">
                <img
                src={item.image}
                alt={item.label}
                className="w-[120px] h-[90px] object-contain mb-4"
              />
              </div>
              <Typography variant="h4" color="blue-gray" className="text-center">
                {item.value}
              </Typography>
              <Typography color="gray" className="mt-1 text-center text-sm">
                {item.label}
              </Typography>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanDistributor;
