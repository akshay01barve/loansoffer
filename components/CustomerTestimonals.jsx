"use client";
import React, { useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const loanCategories = [
  {
    title: "Personal Loan",
    description: "Flexible repayment options for your personal needs.",
    logo: "/icons/personal-loan.png",
    customer: "Amit Sharma",
    date: "June 10",
  },
  {
    title: "Business Loan",
    description: "Fuel your business growth with easy loans.",
    logo: "/icons/business-loan.png",
    customer: "Priya Kapoor",
    date: "May 22",
  },
  {
    title: "Doctor Loan",
    description: "Customized loans for medical professionals.",
    logo: "/icons/doctor-loan.png",
    customer: "Dr. Mehul Jain",
    date: "April 15",
  },
  {
    title: "Teacher Loan",
    description: "Affordable financing for educators.",
    logo: "/icons/teacher-loan.png",
    customer: "Anjali Desai",
    date: "March 5",
  },
  {
    title: "Startup Loan",
    description: "Support your startup dreams with easy funds.",
    logo: "/icons/startup-loan.png",
    customer: "Ravi Kumar",
    date: "Feb 2",
  },
  {
    title: "Home Loan",
    description: "Loans for building your dream home.",
    logo: "/icons/home-loan.png",
    customer: "Neha Sinha",
    date: "Jan 12",
  },
];

const CustomerTestimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="py-8 px-4 relative">
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <h1 className="text-center text-[#424242] text-2xl md:text-4xl mb-8">
        Customer Reviews
      </h1>

      {/* Left Arrow */}
      <div className="absolute top-[50%] left-0 z-10">
        <Button onClick={() => scroll("left")} variant="text" className="rounded-full">
          <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
        </Button>
      </div>

      {/* Right Arrow */}
      <div className="absolute top-[50%] right-0 z-10">
        <Button onClick={() => scroll("right")} variant="text" className="rounded-full">
          <ChevronRightIcon className="h-6 w-6 text-gray-700" />
        </Button>
      </div>

      {/* Scrollable Review Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 px-8 hide-scrollbar"
        style={{ scrollBehavior: "smooth" }}
      >
        {loanCategories.map((loan, index) => (
          <Card key={index} className="min-w-[270px] w-[270px] flex-shrink-0 shadow-lg">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 flex justify-center items-center p-4"
            >
              <img
                src={loan.logo}
                alt={`${loan.title} logo`}
                className="w-16 h-16 object-contain"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h6" color="blue-gray">
                {loan.title}
              </Typography>
              <Typography variant="small" color="gray" className="mt-2 font-normal">
                {loan.description}
              </Typography>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <Tooltip content={loan.customer}>
                <Avatar
                  size="sm"
                  variant="circular"
                  alt={loan.customer}
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${loan.customer}`}
                  className="border-2 border-white hover:z-10"
                />
              </Tooltip>
              <Typography className="text-sm text-gray-600">{loan.date}</Typography>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
