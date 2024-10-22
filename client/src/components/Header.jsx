import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logovideo from "../../public/logo.mp4";
import { useSelector } from "react-redux";
import { Avatar, Dropdown } from "flowbite-react";
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

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  return (
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
          <div className="flex flex-shrink-0 items-center">
            <video
              src={logovideo}
              loop
              autoPlay
              muted
              className="rounded-full w-16 h-16 object-cover mx-auto"
              controls={false}
            />

            <a href="/" className="text-white text-lg px-2 cursor-pointer">
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
                    "rounded-md px-3 py-2 text-lg font-medium "
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
                  <MenuButton className="relative flex rounded-full bg-gray-900 text-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">
                    <span className="absolute -inset-1.5" />
                    <a
                      href="/signup"
                      className="text-md text-white p-2 rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 "
                    >
                      Signup/Login
                    </a>
                  </MenuButton>
                </div>
              )}
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 ">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium "
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
