"use client";
import React from "react";
import {
  FiCreditCard,
  FiHome,
  FiUser,
  FiBriefcase,
  FiBookOpen,
  FiHeart,
} from "react-icons/fi"; // ✅ all these exist

export default function Product() {
  const cardData = [
    {
      title: "Personal Loan",
      description:
        "Flexible loan for your personal needs with low interest rates.",
      linkText: "Apply Now",
      linkUrl: "/loans/personal",
      icon: "./personal_loan.png",
    },
    {
      title: "Business Loan",
      description: "Finance your business growth with our easy loan options.",
      linkText: "Get Started",
      linkUrl: "/loans/business",
      icon: "./buis_loan.png",
    },
    {
      title: "Doctor Loan",
      description: "Exclusive loan offers for medical professionals.",
      linkText: "Explore",
      linkUrl: "/loans/doctor",
     icon: "./doctor_loan.png", // substituted for FiStethoscope
    },
    {
      title: "Teacher Loan",
      description: "Special loan schemes for teachers and educators.",
      linkText: "Learn More",
      linkUrl: "/loans/teacher",
      icon: "./teacher.png",
    },
    {
      title: "Credit Card Loan",
      description: "Instant loan on your credit card limit.",
      linkText: "Check Now",
      linkUrl: "/loans/credit-card",
      icon: "./credit_loan.png",
    },
    {
      title: "Home Loan",
      description: "Make your dream home a reality with our home loans.",
      linkText: "See Details",
      linkUrl: "/loans/home",
      icon: "./home_loan.png",
    },
     {
      title: "Car Loan",
      description: "Make your dream home a reality with our home loans.",
      linkText: "See Details",
      linkUrl: "/loans/home",
      icon: "./car_loan.png",
    },

     {
      title: " Loan Against Car ",
      description: "Make your dream home a reality with our home loans.",
      linkText: "See Details",
      linkUrl: "/loans/home",
      icon: "./ca_loan.png",
    },
  ];

  return (
    <div>
  <h1 className="text-3xl font-bold text-center mb-6">
    Popular Loan Products
    <span className="text-4xl bg-black "></span>
  </h1>

  <div className="md:p-9">
    <div className="grid  grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-0">
    {cardData.map((card, index) => (
      <div
        key={index}
        className="relative w-full bg-white border border-gray-200 shadow-md rounded-2xl p-4 flex flex-col transform transition-transform duration-300 hover:scale-[1.03]"
      >
        {/* Top Badge */}
        <div className="absolute -top-3 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-md z-10">
          Best Offer
        </div>

        {/* Header Row */}
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm font-semibold text-gray-800">
            {card.title.toUpperCase()}
          </div>
          
          <img src={card.icon} alt={card.title} className="w-[100px] h-15" />
        </div>

        {/* Description */}
        <div className="text-gray-600 text-sm mb-4">
          {card.description}
        </div>

        {/* Call to Action */}
        <div className="mt-auto pt-2">
          <a href={card.linkUrl}>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
              {card.linkText}
            </button>
          </a>
        </div>
      </div>
    ))}
  </div>
  </div>
</div>

  );
}
