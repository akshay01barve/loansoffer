"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const OurPartners = () => {
  const data = [
    {
      label: "All",
      value: "All",
      images: [
        {
          imageLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6QrP_2byB0Tw8KnqrkwA-BiUCbLUNvwtdw&s",
        },
        {
          imageLink:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png",
        },
        {
          imageLink:
            "https://static.toiimg.com/thumb/msid-113525204,width-1280,height-720,resizemode-4/113525204.jpg",
        },
        {
          imageLink:
            "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/BankOfBarodaLogo.svg/1200px-BankOfBarodaLogo.svg.png",
        },
        {
          imageLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZimu6HXYkMDS_95Xax9Cqzcngdk02NQCmA&s",
        },
        {
          imageLink:
            "https://media.licdn.com/dms/image/v2/D560BAQFtO_D3_HBn8Q/company-logo_200_200/company-logo_200_200/0/1692556229224/cashe_app_logo?e=2147483647&v=beta&t=UiZQzR90LUeoiPlaT3sSQFAZlKyU2rLMLMliUWvpz54",
        },
        {
          imageLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zOBd3Cm_JTQJ86XmNOmBqb8hSyZqVtqomQ&s",
        },
        {
          imageLink:
            "https://play-lh.googleusercontent.com/fZOqy_Q4XQIBKpoUYpy9LIIOSWwjZMQLpZJOv3WAoL9tyy-yQbV7X0Ke-bnGT_CeIsq-=w600-h300-pc0xffffff-pd",
        },
        {
          imageLink:
            "https://pathfinderstraining.com/wp-content/uploads/2022/10/ICICI-BANK-LOGO.png",
        },
        {
          imageLink:
            "https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-logo.jpg",
        },
        {
          imageLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSERq3KJU3JrDYhrG4l3buYG5zLd9P56wuIsw&s",
        },
        {
          imageLink:
            "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202208/1200_37-sixteen_nine.jpg",
        },
        {
          imageLink:
            "data:image/png;base64,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",
        },
        {
          imageLink:
            "https://bsmedia.business-standard.com/_media/bs/img/article/2021-02/17/full/20210217144925.jpg",
        },
        {
          imageLink:
            "https://www.eqimg.com/images/2024/1920x1080/10212024-image3-equitymaster.jpg",
        },
        {
          imageLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3TZOXYah_0ccvzJIwvbLnN_2FOc-52ee_tA&s",
        },
        {
          imageLink:
            "https://yt3.googleusercontent.com/ytc/AIdro_mEazyGa4muuG2ZHLEtKnaatRgXpv7SA7INklYbi1TXAi0=s900-c-k-c0x00ffffff-no-rj",
        },
        {
          imageLink:
            "https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/entrackr/media/post_attachments/wp-content/uploads/2019/06/lendingkart.jpg",
        },
        {
          imageLink:
            "https://5.imimg.com/data5/SELLER/Default/2024/9/448814296/TV/CZ/CP/2694137/l-t-finance-limited-unsecured-business-loan.png",
        },

        {
          imageLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpiWTgAgupPoefaIMS4WMpkPeemYokcgXtBA&s",
        },
        {
          imageLink:
            "https://www.livemint.com/lm-img/img/2023/06/09/1600x900/logo-and-tagline_1686326107874_1686326113362.png",
        },
        {
          imageLink: "https://etimg.etb2bimg.com/photo/116285230.cms",
        },
        {
          imageLink:
            "https://osiansoftware.com/wp-content/uploads/2021/12/image_2021-12-13_14-49-18.png",
        },
        {
          imageLink:
            "https://images.moneycontrol.com/static-mcnews/2022/02/PF_Logo-Blue-770x399.jpg?impolicy=website&width=770&height=431",
        },
        {
          imageLink:
            "https://images.yourstory.com/cs/images/companies/Incred-1588590828240.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff",
        },
        {
          imageLink: "https://etimg.etb2bimg.com/photo/121253634.cms",
        },
        {
          imageLink:
            "https://cdn-web.infobip.com/uploads/2023/02/muthoot-logo.webp",
        },
        {
          imageLink:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSispWMZu2lf3fTszQHEk8xcoLj5S9QKYODzw&s",
        },
        {
          imageLink:
            "https://images.jdmagicbox.com/v2/comp/pune/l7/020pxx20.xx20.201207133914.r8l7/catalogue/shriram-finance-hadapsar-pune-finance-companies-0jn59ddttv.jpg",
        },
        {
          imageLink:
            "https://5.imimg.com/data5/SELLER/Default/2023/8/333102925/TA/HY/ZS/70315489/paysense-private-finance.jpg",
        },
      ],
    },
    {
      label: "Unsecured Loans",
      value: "unsecured-loans",
      images: [
        {
          imageLink:
            "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
      ],
    },
    {
      label: "Credit Card",
      value: "credit-card",
      images: [
        {
          imageLink:
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
        {
          imageLink:
            "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
        },
        {
          imageLink:
            "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
        },
      ],
    },
    {
      label: "Home Loans",
      value: "home-loans",
      images: [
        {
          imageLink:
            "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
      ],
    },
    {
      label: "Credit Bureau",
      value: "credit-bureau",
      images: [
        {
          imageLink:
            "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
        },
        {
          imageLink:
            "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
      ],
    },
  ];

  return (
    <div>
      {" "}
      <Tabs value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="grid grid-cols-1 gap-4 ">
          {data.map(({ value, images }) => (
            <TabPanel
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4"
              key={value}
              value={value}
            >
              {images?.map(({ imageLink }, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden flex items-center justify-center p-2"
                >
                  <img
                    className="h-12 w-full object-contain"
                    src={imageLink}
                    alt={`image-${index}`}
                  />
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default OurPartners;
