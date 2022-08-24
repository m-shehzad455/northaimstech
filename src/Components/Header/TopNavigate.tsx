// =======================
import { Link } from "react-router-dom";
import { SearchIcon } from "@heroicons/react/outline";
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/outline";
import { userNotifaction } from "../../dashboard/Mocked/Dome";
import { SearchBar } from "../Search/Searchbar";
import { classNames } from "../String";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "/" },
];

function TopNavigate() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between w-full">
      {/* Search section */}
      <div className="flex justify-center items-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900 hidden lg:block">
          Blog Postings
        </h3>
      </div>

      {/* ========{ Notfi Count }======== */}
      <span className="absolute top-3 right-14 h-1.5 w-1.5 p-2 rounded-xl flex items-center justify-center bg-red-600 text-white z-40 text-sm">
        3
      </span>
      <div className="ml-4 flex-shrink-0 flex items-center">
        {/* Distop Search */}
        <div className="flex justify-center hidden sm:block">
          <div className="w-full px-2 lg:px-6 m-auto">
            <div
              className="relative text-gray-700"
              onClick={() => setIsOpen(true)}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search ..."
                disabled
              />
              <div className="absolute inset-y-0 right-3 pl-3 flex items-center pointer-events-none">
                <div className="bg-white text-xs px-2 py-[2px] rounded-md border border-1 border-gray-300 font-bold">
                  ctrl + k
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Search */}
        <Menu as="div" className="ml-3 relative sm:hidden">
          <div>
            <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
              <button
                type="button"
                className=" p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <SearchIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </Menu.Button>
          </div>
        </Menu>
        {/* Profile Notifaction */}
        <Menu as="div" className="ml-3 relative">
          <div>
            <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
              <button
                type="button"
                className=" p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {userNotifaction.map((item) => (
                <Menu.Item key={item.title}>
                  {({ active }) => (
                    <Link
                      to={item.href}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      <h2 className="text-base font-medium text-gray-900 underline">
                        {item.title}
                      </h2>
                      <h2 className="text-gray-900">{item.subtext}</h2>
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
        {/* Profile dropdown */}
        <Menu as="div" className="ml-3 relative">
          <div>
            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src={user.imageUrl}
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <Link
                      to={item.href}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      {isOpen && <SearchBar isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}

export default TopNavigate;
