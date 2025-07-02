"use client";
import React from "react";
import TableAdmin from "./TableAdmin";

const Dashboard = () => {
  return (
    <div>
      <div className="p-4">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg rounded-2xl p-4">
          <h1 className="text-xl font-bold mb-2">All Case</h1>
          <h4 className="text-lg mb-1">49</h4>
          <h6 className="text-sm">75 lakh</h6>
        </div>

        <div className="bg-gradient-to-r from-light-blue-400 to-blue-500 text-white shadow-lg rounded-2xl p-4">
          <h1 className="text-xl font-bold mb-2">Login Pending</h1>
          <h4 className="text-lg mb-1">49</h4>
          <h6 className="text-sm">75 lakh</h6>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg rounded-2xl p-4">
          <h1 className="text-xl font-bold mb-2">Underwriting</h1>
          <h4 className="text-lg mb-1">49</h4>
          <h6 className="text-sm">75 lakh</h6>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-lg rounded-2xl p-4">
          <h1 className="text-xl font-bold mb-2">Query</h1>
          <h4 className="text-lg mb-1">49</h4>
          <h6 className="text-sm">75 lakh</h6>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg rounded-2xl p-4">
          <h1 className="text-xl font-bold mb-2">Disbursed</h1>
          <h4 className="text-lg mb-1">49</h4>
          <h6 className="text-sm">75 lakh</h6>
        </div>

        <div className=" bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg rounded-2xl p-4">
          <h1 className="text-xl font-bold mb-2">Reject</h1>
          <h4 className="text-lg mb-1">49</h4>
          <h6 className="text-sm">75 lakh</h6>
        </div>

        <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg rounded-2xl p-4">
          <h1 className="text-xl font-bold mb-2">Connector</h1>
          <h4 className="text-lg mb-1">49</h4>
          <h6 className="text-sm">75 lakh</h6>
        </div>
        
      </div>
    </div>
  <div className="w-full overflow-x-auto">
  <div className="min-h-[200px]">
    <TableAdmin />
  </div>
</div>

    </div>
  );
};

export default Dashboard;
