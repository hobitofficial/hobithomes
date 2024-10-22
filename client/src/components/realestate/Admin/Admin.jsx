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
      <div className="flex flex-wrap gap-4">
        <div>
          {/* <AdminDrawer /> */}

          <div className="flex min-h-[50vh] items-center ">
            <button onClick={() => setIsOpen(true)}>
              <IoMenu className="text-white text-4xl" />
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
                          onClick={() => setTab("dashboard")}
                        >
                          Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiShoppingBag}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => setTab("property")}
                        >
                          My Property
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiUsers}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => setTab("booking-requests")}
                        >
                          Booking Requests
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiCash}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => setTab("finance-payments")}
                        >
                          Finance/Payments
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiOfficeBuilding}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => setTab("staff")}
                        >
                          Staff
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiUsers}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => setTab("guests-tenants")}
                        >
                          Guests/Tenants
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiBriefcase}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => setTab("current-plan")}
                        >
                          Current Plan
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiSpeakerphone}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => setTab("boost-ranking")}
                        >
                          Boost Ranking
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiArchive}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => setTab("inventory")}
                        >
                          Inventory
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiClipboard}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => setTab("expense-tracker")}
                        >
                          Expense Tracker
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiSpeakerphone}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => setTab("messages-notices")}
                        >
                          Messages/Notices
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiCollection}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => setTab("invoice")}
                        >
                          Invoice
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiClipboard}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => setTab("maintenance")}
                        >
                          Maintenance
                        </Sidebar.Item>
                      </Sidebar.ItemGroup>
                      <Sidebar.ItemGroup>
                        <Sidebar.Item
                          icon={HiClipboard}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => setTab("account")}
                        >
                          My Account
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiCollection}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => setTab("settings")}
                        >
                          Settings
                        </Sidebar.Item>
                        <Sidebar.Item
                          icon={HiInformationCircle}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => setTab("help")}
                        >
                          Help
                        </Sidebar.Item>
                        <Sidebar.Item
                          href="/signout"
                          icon={HiLogin}
                          className="text-white hover:bg-violet-500 cursor-pointer"
                          onClick={() => setTab("Sign Out")}
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
        <div className="m-auto mt-24">
          {tab == "dashboard" && <Dashboard />}
          {tab == "booking-requests" && <BookingRequest />}
          {tab == "property" && <MyProperty />}
        </div>
      </div>
    </>
  );
}
