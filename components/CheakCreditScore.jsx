"use client"
import React from 'react'

const CheakCreditScore = () => {
  return (
    <div className="bg-[#2583fd] flex items-center justify-center py-16">
      <div className="bg-[#2583fd] text-white text-center p-6 rounded-lg w-full max-w-md shadow-lg">
        <img src="/creditscore.png" alt="Credit Score" className="mx-auto mb-6 w-32 h-32 object-contain" />
        <h1 className="text-2xl font-bold">Check your credit score for free!</h1>
        <p className="mt-4">Also unlock your personal loan eligibility</p>
 
        <div className="mt-6 flex">
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="p-2 rounded-l-md text-black flex-grow"
          />
          <button className="bg-white text-blue-600 font-semibold p-2 rounded-r-md hover:bg-gray-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default CheakCreditScore
