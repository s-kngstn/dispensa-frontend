import { Fragment, ReactNode, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  ArrowLeftOnRectangleIcon,
  Bars3BottomLeftIcon,
  BellIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  FolderIcon,
  HomeIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import capitalize from "../../../libs/capitalize";

// How can I make all the routes after dashboard still keep the active tag on dashboards
// How can I make the active tag on the current page
function activeTag(current: string, href: string) {
  if (current === href) {
    return "bg-lime-punch text-white";
  } else {
    return "text-gray-900";
  }
}
const navigation = [
  {
    name: "Dashboard",
    href: "/dashboards",
    icon: HomeIcon,
    // current: "/dashboards",
  },
  {
    name: "Your Dispensa",
    href: "/dispensa",
    icon: FolderIcon,
    current: "/dispensa",
  },
  {
    name: "Shopping List",
    href: "/list",
    icon: ShoppingCartIcon,
    // current: "/list"
  },
  {
    name: "Reports",
    href: "#",
    icon: ChartBarIcon,
    // current: "/reports"
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Cog6ToothIcon,
    // current: "/settings",
  },
  {
    name: "Sign out",
    href: "/",
    icon: ArrowLeftOnRectangleIcon,
    //  current: "/signout"
  },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface PageWrapperProps {
  children?: ReactNode;
  // any props that come into the component
}

export default function PageWrapper({
  children,
}: PageWrapperProps): JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <div>
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
              <div className="fixed inset-0 bg-dispensa-off-white bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
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
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-black"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                    {/* <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    /> */}
                    <span className="text-black text-2xl font-extrabold tracking-wider">
                      DISPENSA
                    </span>
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={
                            "group flex items-center px-2 py-2 text-md rounded-md text-black font-semibold hover:bg-dispensa-orange hover:text-black"
                          }
                        >
                          <item.icon
                            className={
                              "mr-3 flex-shrink-0 h-7 w-7 text-black group-hover:text-black"
                            }
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        {/* ////////////////////////////////////////////////////////////////// */}
        {/* /////////////// Static sidebar Logo for desktop ////////////////// */}
        {/* ////////////////////////////////////////////////////////////////// */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-white border-black border-r-4">
            <div className="flex h-16 flex-shrink-0 items-center bg-white px-4 border-black border-b-4 ">
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              /> */}
              <span className="text-black text-2xl font-extrabold tracking-wider">
                {/* <span className="bg-gradient-to-r from-dispensa-secondary to-dispensa-orange text-transparent bg-clip-text font-extrabold tracking-wider text-2xl"> */}
                DISPENSA
              </span>
              {/* </span> */}
            </div>
            {/* ////////////////////////////////////////////////////////////////// */}
            {/* /////////////// Static sidebar Menu for desktop ////////////////// */}
            {/* ////////////////////////////////////////////////////////////////// */}
            <div className="flex flex-1 flex-col overflow-y-auto">
              <nav className="flex-1 space-y-1 px-2 py-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={
                      "group flex items-center px-2 py-2 text-md rounded-md text-black font-semibold hover:bg-dispensa-orange hover:text-black"
                    }
                  >
                    <item.icon
                      className={
                        "mr-3 flex-shrink-0 h-7 w-7 text-black group-hover:text-black"
                      }
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////////////// */}
        {/* /////////////// Static searchbar for desktop ///////////////////// */}
        {/* ////////////////////////////////////////////////////////////////// */}
        <div className="flex flex-col md:pl-64">
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-dispensa-off-white">
            <button
              type="button"
              className="px-4 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-between px-4">
              <div className="flex flex-1">
                <form className="flex w-full md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-black focus-within:text-black">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                      <MagnifyingGlassIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search-field"
                      className="block h-full w-full border-transparent py-2 pl-8 pr-3 bg-dispensa-off-white text-black placeholder-dispensa-text focus:border-transparent focus:placeholder-black focus:outline-none focus:ring-0 sm:text-sm"
                      placeholder="Search"
                      type="search"
                      name="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="rounded-full bg-dispensa-off-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon
                    className="h-6 w-6 text-black font-bold"
                    aria-hidden="true"
                  />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-dispensa-off-white text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://www.samkingston.xyz/static/media/me2.684d4a8f.jpg"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md border-black border-3 font-semibold bg-white py-1 -lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-dispensa-off-white" : "",
                                "block px-4 py-2 text-md text-black"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="flex-1 bg-dispensa-off-white">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  {capitalize(router.asPath.split("/")[1])}
                </h1>
              </div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                <div className="py-4">
                  {/* <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"> */}
                  {children}
                  {/* </div> */}
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
