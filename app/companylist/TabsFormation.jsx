"use client"
import React from 'react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import CompanyList from './CompanyList'
import PersonalLoan from './PersonalLoan'
import BuissnessLoan from './BuissnessLoan'
import Others from './Others'

const TabsFormation = () => {
  
  const data = [
    { label: "Comp Listing", value: "companylisting", desc: <CompanyList /> },
    { label: "Personal Loan", value: "personalloan", desc: <PersonalLoan /> },
    { label: "Buisness Loan", value: "buisnessloan", desc: <BuissnessLoan /> },
    { label: "Others", value: "other", desc: <Others /> },
   
  ];
  return (
    <div className='p-4'>

    <Tabs id="custom-animation" value="html" >
      <TabsHeader className="rounded bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent ",
        }}>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className='text-[#2583fd]    font-bold hover:bg-[#2583fd]  hover:text-white'>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
      
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
    </div>
  )
}

export default TabsFormation