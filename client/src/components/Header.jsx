// const navigation = [
//   { name: "Home", href: "/", current: true },
//   { name: "Properties", href: "/properties", current: false },
//   { name: "Hostels", href: "/hostels", current: false },
//   { name: "About Us", href: "/about", current: false },
//   { name: "Contact Us", href: "/contact", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Header() {
//   const { currentUser } = useSelector((state) => state.user);
//   return (
//     <Disclosure
//       as="nav"
//       className="bg-gray-900 shadow-lg py-2 fixed top-0 w-full z-40 "
//     >
//       <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-[60%] flex items-center sm:hidden">
//             {/* Mobile menu button*/}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-violet-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="absolute -inset-0.5" />
//               <Bars3Icon
//                 aria-hidden="true"
//                 className="block h-6 w-6 group-data-[open]:hidden"
//               />
//               <XMarkIcon
//                 aria-hidden="true"
//                 className="hidden h-6 w-6 group-data-[open]:block"
//               />
//             </DisclosureButton>
//           </div>
//           {/* <div className="flex items-center justify-center sm:items-stretch sm:justify-start"> */}
//           <div className="lg:flex flex-shrink-0 items-center sm:hidden ">
//             <video
//               src={logovideo}
//               loop
//               autoPlay
//               muted
//               className="rounded-full w-16 h-16 object-cover mx-auto"
//               controls={false}
//             />

//             <a href="/" className="text-white text-lg px-2 cursor-pointer ">
//               Hobit Homes
//             </a>
//           </div>
//           <div className="hidden sm:ml-6 sm:block">
//             <div className="flex space-x-4">
//               {navigation.map((item) => (
//                 <a
//                   // onClick={(item.current = true)}
//                   key={item.name}
//                   href={item.href}
//                   aria-current={item.current ? "page" : undefined}
//                   className={classNames(
//                     item.current
//                       ? "text-violet-500"
//                       : "text-white hover:text-violet-500",
//                     "rounded-md px-2 py-2 text-lg font-medium "
//                   )}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//           </div>
//           {/* </div> */}

//           {/* notification and user profile section */}
//           <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <button
//               type="button"
//               className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//             >
//               <span className="absolute -inset-1.5" />
//               <BellIcon aria-hidden="true" className="h-8 w-8" />
//             </button>

//             {/* Profile dropdown */}
//             <Menu as="div" className="relative ml-3">
//               {currentUser ? (
//                 <div className="flex md:order-2">
//                   <Dropdown
//                     arrowIcon={false}
//                     inline
//                     label={
//                       <Avatar
//                         alt="User settings"
//                         img={currentUser.profilePicture}
//                         rounded
//                       />
//                     }
//                   >
//                     <Dropdown.Header>
//                       <span className="block text-sm">{currentUser.name}</span>
//                       <span className="block truncate text-sm font-medium text-violet-500">
//                         {currentUser.email}
//                       </span>
//                     </Dropdown.Header>
//                     <Dropdown.Item href={currentUser.person}>
//                       Dashboard
//                     </Dropdown.Item>
//                     <Dropdown.Item href="/setting">Settings</Dropdown.Item>
//                     <Dropdown.Divider />
//                     <Dropdown.Item href="/signout">Sign out</Dropdown.Item>
//                   </Dropdown>
//                 </div>
//               ) : (
//                 <div>
//                   <MenuButton className="relative flex rounded-full bg-gray-900 text-xl ">
//                     <span className="absolute -inset-1.5" />
//                     <a
//                       href="/signup"
//                       className="text-md text-white p-2 rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 "
//                     >
//                       Signup/Login
//                     </a>
//                   </MenuButton>
//                 </div>
//               )}
//             </Menu>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2 ">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? "page" : undefined}
//               className={classNames(
//                 item.current
//                   ? "bg-gray-900 text-white"
//                   : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                 "block rounded-md px-3 py-2 text-base font-medium "
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   );
// }
import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logovideo from "../../public/logo.mp4";
import { useSelector } from "react-redux";
import { Avatar, Dropdown } from "flowbite-react";
<<<<<<< HEAD
import { useLocation } from "react-router-dom";
=======
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Properties", href: "/properties", current: false },
  { name: "Hostels", href: "/hostels", current: false },
  { name: "About Us", href: "/about", current: false },
  { name: "Contact Us", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  return (
<<<<<<< HEAD
    <nav className="bg-gray-800 text-white dark:bg-gray-900 fixed top-0 w-full z-40 mb-8">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-2">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <video
            src={logovideo}
            loop
            autoPlay
            muted
            className="rounded-full w-14 h-14 object-cover"
            controls={false}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="/"
            className={`hover:text-violet-500 transition-colors duration-200 ${
              path === "/" ? "text-violet-500" : "text-white"
            }`}
          >
            Home
          </a>
          <div className="relative">
            <Menu>
              {({ open }) => (
                <>
                  <Menu.Button
                    className={`flex items-center hover:text-violet-500 transition-colors duration-200 ${
                      path === "/properties" ? "text-violet-500" : "text-white"
                    }`}
                  >
                    Properties
                    <svg
                      className="w-5 h-5 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Menu.Button>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-100 ease-in"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Menu.Items className="absolute mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                      <div className="py-1">
                        {[
                          "Hotel",
                          "PG",
                          "Hostel",
                          "Apartment",
                          "Villa",
                          "Flat",
                          "Independent House",
                          "Studio",
                          "Duplex",
                          "PentHouse",
                        ].map((item, index) => (
                          <Menu.Item key={index}>
                            {({ active }) => (
                              <a
                                href={"/properties"}
                                className={`${
                                  active
                                    ? "bg-gray-500 text-violet-900"
                                    : "text-white"
                                } block px-4 py-2`}
                              >
                                {item}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
=======
    <Disclosure
      as="nav"
      className="bg-gray-900 shadow-lg py-2 fixed top-0 w-full z-40 "
    >
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-[60%] flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-violet-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          {/* <div className="flex items-center justify-center sm:items-stretch sm:justify-start"> */}
          <div className="lg:flex flex-shrink-0 items-center sm:hidden ">
            <video
              src={logovideo}
              loop
              autoPlay
              muted
              className="rounded-full w-16 h-16 object-cover mx-auto"
              controls={false}
            />

            <a href="/" className="text-white text-lg px-2 cursor-pointer ">
              Hobit Homes
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  // onClick={(item.current = true)}
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "text-violet-500"
                      : "text-white hover:text-violet-500",
                    "rounded-md px-2 py-2 text-lg font-medium "
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          {/* </div> */}

          {/* notification and user profile section */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <BellIcon aria-hidden="true" className="h-8 w-8" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              {currentUser ? (
                <div className="flex md:order-2">
                  <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                      <Avatar
                        alt="User settings"
                        img={currentUser.profilePicture}
                        rounded
                      />
                    }
                  >
                    <Dropdown.Header>
                      <span className="block text-sm">{currentUser.name}</span>
                      <span className="block truncate text-sm font-medium text-violet-500">
                        {currentUser.email}
                      </span>
                    </Dropdown.Header>
                    <Dropdown.Item href={currentUser.person}>
                      Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item href="/setting">Settings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="/signout">Sign out</Dropdown.Item>
                  </Dropdown>
                </div>
              ) : (
                <div>
  <button className="relative flex rounded-full bg-gray-900 text-xl">
    <a
      href="/signup"
      className="text-md text-white p-2 rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
    >
      Signup/Login
    </a>
  </button>
</div>

>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab
              )}
            </Menu>
          </div>
          <a
            href="/about"
            className={`hover:text-violet-500 transition-colors duration-200 ${
              path === "/about" ? "text-violet-600" : "text-white"
            }`}
          >
            About Us
          </a>

          <a
            href="/contact"
            className={`hover:text-violet-500 transition-colors duration-200 ${
              path === "/contact" ? "text-violet-600" : "text-white"
            }`}
          >
            Contact Us
          </a>
        </div>

        {/* Notifications and User Profile */}
        <div className="flex items-center space-x-4">
          <button
            className="p-2 bg-gray-700 rounded-full hover:text-violet-500 transition-colors duration-200"
            aria-label="Notifications"
          >
            <BellIcon className="w-6 h-6" />
          </button>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img={currentUser.profilePicture || "/default-avatar.jpg"}
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{currentUser.name}</span>
                <span className="block text-sm font-medium text-violet-500">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item href={currentUser.person}>Dashboard</Dropdown.Item>
              <Dropdown.Item href="/settings">Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/signout">Sign Out</Dropdown.Item>
            </Dropdown>
          ) : (
            <a
              href="/signup"
              className="py-2 px-4 rounded-md bg-violet-500 hover:bg-violet-600 transition text-white"
            >
              Signup/Login
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700 text-white">
          <ul className="space-y-4 p-4">
            <li>
              <a href="/" className="block hover:text-violet-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="block hover:text-violet-500">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="block hover:text-violet-500">
                Contact Us
              </a>
            </li>
            <li>
              <div className="block">
                Looking For
                <ul className="mt-2 space-y-2">
                  {[
                    "Hotel",
                    "PG",
                    "Hostel",
                    "Apartment",
                    "Villa",
                    "Flat",
                    "Independent House",
                    "Studio",
                    "Duplex",
                    "PentHouse",
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href={`/properties/${item.toLowerCase()}`}
                        className="hover:text-violet-500"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
