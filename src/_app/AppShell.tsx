import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "../Components/Button/Button";
import ReactIcon from "../Components/Reacticon/ReactIcon";
import { HeaderLogo } from "../Components/Header/Logo";
import TopNavigate from "../Components/Header/TopNavigate";
// import DashboardHeader from '../Components/Header/DeshboardHeader'
import DeshboardCard from "../Components/SideCard/DeshboardCard";

type AppShellProps = {
  children: JSX.Element;
};
const AppShell = ({ children }: AppShellProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in- duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <Button
                      className="ml-10 border-0 focus:ring-0 focus:ring-offset-0 ring-0 bg-transparent h-10 w-10 rounded-full"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <ReactIcon
                        color="white"
                        icon="HiOutlineX"
                        className="cursor-pointer text-xl font-extrabold"
                      />
                    </Button>
                  </div>
                </Transition.Child>
                <div className="flex items-center px-4 text-white">
                  <HeaderLogo />
                </div>

                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1 m-3">
                    <DeshboardCard />
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-gray-900">
          <div className="flex items-center h-16 px-4 text-white">
            <HeaderLogo />
          </div>
          <hr className="text-white bg-white" />

          <div className="flex-1 flex flex-col  bg-gray-900 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 m-3 space-y-1">
              <DeshboardCard />
            </nav>
          </div>
        </div>
      </div>
      <div className="md:pl-64 flex flex-col">
        <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow items-center">
          <div className="sticky top-0 z-10 flex-shrink-0 flex h-14 border-r">
            <Button
              transparent
              xl
              type="button"
              className="mx-2 md:hidden border-0 focus:ring-0 focus:ring-offset-0 ring-0"
              onClick={() => setSidebarOpen(true)}
            >
              <ReactIcon
                color="gray"
                icon="HiMenuAlt2"
                className="cursor-pointer text-xl"
              />
            </Button>
          </div>
          <div className="flex-1 px-4 flex justify-between items-center">
            <TopNavigate />
          </div>
        </div>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default AppShell;