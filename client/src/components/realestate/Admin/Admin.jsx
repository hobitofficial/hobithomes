import Dashboard from "./Dashboard";
import BookingRequest from "./BookingRequest.jsx";
import { Drawer, Sidebar } from "flowbite-react";
import { useState, useEffect } from "react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiShoppingBag,
  HiUsers,
  HiCash,
  HiOfficeBuilding,
  HiBriefcase,
  HiSpeakerphone,
  HiArchive,
} from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import MyProperty from "./MyProperty.jsx";
export default function Admin() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentTitle, setCurrentTitle] = useState("Property");
  const titles = ["Flat", "Apartment", "Hostel/PG"];
  const [tab, setTab] = useState("dashboard");

  // Use useEffect to change title at a specific interval
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitle((prevTitle) => {
        const currentIndex = titles.indexOf(prevTitle);
        const nextIndex = (currentIndex + 1) % titles.length;
        return titles[nextIndex];
      });
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="p-24">
        <div>
          {/* <AdminDrawer /> */}

          <div>
            <button onClick={() => setIsOpen(true)}>
              <IoMenu className="text-white text-4xl ml-12" />
            </button>
          </div>
          <Drawer open={isOpen} onClose={handleClose} className="bg-black">
            <Drawer.Header
              title={
                <span className="text-2xl font-bold text-white">
                  Manage{" "}
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500  to-pink-500">
                    {currentTitle}
                  </span>
                </span>
              }
              titleIcon={() => <></>}
            />

            <Drawer.Items>
              <Sidebar
                aria-label="Sidebar with multi-level dropdown example"
                className="[&>div]:bg-transparent [&>div]:p-0"
              >
                <div className="flex h-full flex-col justify-between py-2">
                  <div>
                    <Sidebar.Items>
                      <Sidebar.ItemGroup>
                        <Sidebar.Item
                          icon={HiChartPie}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => {
                            setTab("dashboard"), handleClose();
                          }}
                        >
                          Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiShoppingBag}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => {
                            setTab("property"), handleClose();
                          }}
                        >
                          My Property
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiUsers}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => {
                            setTab("booking-requests"), handleClose();
                          }}
                        >
                          Booking Requests
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiCash}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => {
                            setTab("finance-payments"), handleClose();
                          }}
                        >
                          Finance/Payments
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiOfficeBuilding}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => {
                            setTab("staff"), handleClose();
                          }}
                        >
                          Staff
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiUsers}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => {
                            setTab("guests-tenants"), handleClose();
                          }}
                        >
                          Guests/Tenants
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiBriefcase}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => {
                            setTab("current-plan"), handleClose();
                          }}
                        >
                          Current Plan
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiSpeakerphone}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => {
                            setTab("boost-ranking"), handleClose();
                          }}
                        >
                          Boost Ranking
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiArchive}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => {
                            setTab("inventory"), handleClose();
                          }}
                        >
                          Inventory
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiClipboard}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => {
                            setTab("expense-tracker"), handleClose();
                          }}
                        >
                          Expense Tracker
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiSpeakerphone}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => {
                            setTab("messages-notices"), handleClose();
                          }}
                        >
                          Messages/Notices
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiCollection}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => {
                            setTab("invoice"), handleClose();
                          }}
                        >
                          Invoice
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiClipboard}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => {
                            setTab("maintenance"), handleClose();
                          }}
                        >
                          Maintenance
                        </Sidebar.Item>
                      </Sidebar.ItemGroup>
                      <Sidebar.ItemGroup>
                        <Sidebar.Item
                          icon={HiClipboard}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => {
                            setTab("account"), handleClose();
                          }}
                        >
                          My Account
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiCollection}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => {
                            setTab("settings"), handleClose();
                          }}
                        >
                          Settings
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiInformationCircle}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => {
                            setTab("help"), handleClose();
                          }}
                        >
                          Help
                        </Sidebar.Item>
                        <Sidebar.Item
                          href="/signout"
                          icon={HiLogin}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => {
                            setTab("Sign Out"), handleClose();
                          }}
                        >
                          Sign Out
                        </Sidebar.Item>
                      </Sidebar.ItemGroup>
                    </Sidebar.Items>
                  </div>
                </div>
              </Sidebar>
            </Drawer.Items>
          </Drawer>
        </div>
        <div className="mx-auto ">
          {tab == "dashboard" && <Dashboard />}
          {tab == "booking-requests" && <BookingRequest />}
          {tab == "property" && <MyProperty />}
        </div>
      </div>
    </>
  );
}
