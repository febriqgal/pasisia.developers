/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow-md z-50 fixed w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://pasisiadevelopers.vercel.app/pasisiadevwhite.png"
                    alt="Pasisia Developers"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://pasisiadevelopers.vercel.app/pasisiadevwhite.png"
                    alt="Pasisia Developers"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link href={"/"}>
                      <a
                        className="text-gray-600 hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-bold"
                      >
                        Home
                      </a>
                    </Link>
                    <Link href={"#team"}>
                      <a
                        className="text-gray-600 hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-bold"
                      >
                        Team
                      </a>
                    </Link>
                    <Link href={"#project"}>
                      <a
                        className="text-gray-600 hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-bold"
                      >
                        Project
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
              <Link href={"/"}>
                <a
                  className="text-gray-600 hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-bold"
                >
                  Home
                </a>
              </Link>
              <Link href={"#team"}>
                <a
                  className="text-gray-600 hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-bold"
                >
                  Team
                </a>
              </Link>
              <Link href={"#project"}>
                <a
                  className="text-gray-600 hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-bold"
                >
                  Project
                </a>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
