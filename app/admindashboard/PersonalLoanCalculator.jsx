"use client";
import React, { useState } from "react";

const PersonalLoanCalculator = () => {
  const [salary, setSalary] = useState("");
  const [foir, setFoir] = useState(50);
  const [existingEmi, setExistingEmi] = useState("");
  const [interestRate, setInterestRate] = useState("13");
  const [tenure, setTenure] = useState(5);
  const [eligibleEmi, setEligibleEmi] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const calculateLoan = () => {
    const monthlyIncome = parseFloat(salary);
    const existing = parseFloat(existingEmi);
    const roi = parseFloat(interestRate);

    if (isNaN(monthlyIncome) || isNaN(existing) || isNaN(roi)) {
      alert("Please enter valid numbers.");
      return;
    }

    const maxEmi = (monthlyIncome * foir) / 100;
    const availableEmi = maxEmi - existing;

    const monthlyRate = roi / 100 / 12;
    const totalMonths = tenure * 12;

    const loan =
      (availableEmi * (1 - Math.pow(1 + monthlyRate, -totalMonths))) /
      monthlyRate;

    const totalPay = availableEmi * totalMonths;
    const interestPaid = totalPay - loan;

    setEligibleEmi(availableEmi > 0 ? availableEmi : 0);
    setLoanAmount(availableEmi > 0 ? Math.round(loan) : 0);
    setTotalInterest(availableEmi > 0 ? Math.round(interestPaid) : 0);
    setTotalPayment(availableEmi > 0 ? Math.round(totalPay) : 0);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left - Input Form */}
      <div className="bg-white p-6 shadow-lg rounded-2xl">
        <h2 className="text-xl font-bold mb-4 text-center">Personal Loan Calculator</h2>

        <div className="mb-4">
          <label className="block mb-1">Monthly Salary (₹)</label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your monthly salary"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">FOIR (%)</label>
          <input
            type="number"
            value={foir}
            onChange={(e) => setFoir(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Existing EMI (₹)</label>
          <input
            type="number"
            value={existingEmi}
            onChange={(e) => setExistingEmi(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Interest Rate (% per annum)</label>
          <input
            type="number"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="e.g., 13.5"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Tenure (in years)</label>
          <select
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full p-2 border rounded"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((year) => (
              <option key={year} value={year}>
                {year} {year === 1 ? "year" : "years"}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={calculateLoan}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Calculate Loan Eligibility
        </button>
      </div>

      {/* Right - Result Card */}
      {loanAmount > 0 && (
        <div className="bg-gray-100 p-6 shadow-xl rounded-2xl">
          <h3 className="text-lg font-semibold mb-4 text-center text-blue-700">
            Loan Summary
          </h3>
          <div className="space-y-3 text-gray-800 text-base">
            <p><strong>Eligible EMI:</strong> ₹{eligibleEmi.toFixed(0)}</p>
            <p><strong>Loan Amount:</strong> ₹{loanAmount.toLocaleString()}</p>
            <p><strong>Total Interest:</strong> ₹{totalInterest.toLocaleString()}</p>
            <p><strong>Total Payment:</strong> ₹{totalPayment.toLocaleString()}</p>
            <p className="text-sm text-gray-500">
              ({tenure} yrs @ {interestRate}% interest)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalLoanCalculator;
