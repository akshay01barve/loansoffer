"use client";
import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";

const CompanyList = () => {
  const [open, setOpen] = React.useState(false); // default: closed for mobile

  // track screen width
  const [isDesktop, setIsDesktop] = React.useState(
    typeof window !== "undefined" ? window.innerWidth >= 960 : false
  );

  const toggleDrawer = () => setOpen((prev) => !prev);

  React.useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 960;
      setIsDesktop(desktop);
      setOpen(desktop); // open only if desktop
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
     <Drawer
  open={open}
  onClose={toggleDrawer}
  overlay={!isDesktop}
  className="w-64 p-4"
 overlayProps={{
    className: "!bg-transparent !backdrop-blur-none"
  }}
>

        <Typography variant="h5" color="blue-gray" className="mb-6">
          Material Tailwind
        </Typography>

        <List>
          <ListItem>
            <ListItemPrefix>📊</ListItemPrefix> Dashboard
          </ListItem>
          <ListItem>
            <ListItemPrefix>📈</ListItemPrefix> Analytics
            <ListItemSuffix>
              <Chip value="5" size="sm" color="green" className="rounded-full" />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>💰</ListItemPrefix> Sales
          </ListItem>
          <ListItem>
            <ListItemPrefix>👤</ListItemPrefix> Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>⚙️</ListItemPrefix> Tables
          </ListItem>
        </List>

        <Button className="mt-4" size="sm">
          Documentation
        </Button>
      </Drawer>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          open && isDesktop ? "ml-64" : "ml-0"
        }`}
      >
        {/* Sticky Navbar */}
        <Navbar className="rounded-none px-4 py-2 sticky top-0 z-50 bg-white shadow-md">
          <div className="flex w-full items-center justify-between">
            <IconButton variant="text" color="blue-gray" onClick={toggleDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </IconButton>

            <Typography variant="h6" color="blue-gray" className="text-xl">
              Welcome To Admin Dashboard
            </Typography>

            <div className="w-6" />
          </div>
        </Navbar>

        {/* Scrollable Page Content */}
        <div className="p-4 space-y-6">
          <h1 className="text-xl font-semibold">Welcome to Admin Dashboard</h1>
          <div className="text-gray-700">
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i} className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyList;





