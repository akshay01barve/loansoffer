"use client";
import { Card, Typography } from "@material-tailwind/react";

// Reusable Table Component
const TeamTable = ({ title, description, tableHead, tableRows }) => {
  return (
    <section className="w-full bg-white">
      <div className="p-6">
        <Typography variant="lead" color="blue-gray" className="font-bold">
          {title}
        </Typography>
        <Typography className="mb-4 w-80 font-normal text-gray-600 md:w-full">
          {description}
        </Typography>
      </div>
      <Card className="h-full w-full overflow-scroll border border-gray-300 px-6">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {tableHead.map((head) => (
                <th key={head} className="border-b border-gray-300 pb-4 pt-10">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => {
              const isLast = index === tableRows.length - 1;
              const classes = isLast
                ? "py-4"
                : "py-4 border-b border-gray-300";

              return (
                <tr key={row.email} className="hover:bg-gray-50">
                  {Object.values(row).map((cell, i) => (
                    <td key={i} className={classes}>
                      <Typography
                        variant="small"
                        className={`${
                          i === 0 ? "font-bold text-blue-gray-700" : "font-normal text-gray-600"
                        }`}
                      >
                        {cell}
                      </Typography>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </section>
  );
};

export default TeamTable;
