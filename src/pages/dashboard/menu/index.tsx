import React from 'react'
import MenuProfile from './MenuProfile'
import MenuItem from './MenuItem'
//
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
//
import BedrockLogo from '../../../assets/images/logo/bedrock_w.svg'

const Menu = () => {
  return (
    <>
      {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
      <div
        className="fixed inset-0 flex z-40 lg:hidden"
        role="dialog"
        aria-modal="true"
      >
        {/*
                          Off-canvas menu overlay, show/hide based on off-canvas menu state.

                          Entering: "transition-opacity ease-linear duration-300"
                            From: "opacity-0"
                            To: "opacity-100"
                          Leaving: "transition-opacity ease-linear duration-300"
                            From: "opacity-100"
                            To: "opacity-0"
                        */}
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
          aria-hidden="true"
        >
          &nbsp;
        </div>

        {/*
                          Off-canvas menu, show/hide based on off-canvas menu state.

                          Entering: "transition ease-in-out duration-300 transform"
                            From: "-translate-x-full"
                            To: "translate-x-0"
                          Leaving: "transition ease-in-out duration-300 transform"
                            From: "translate-x-0"
                            To: "-translate-x-full"
                        */}
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
          {/*
                              Close button, show/hide based on off-canvas menu state.

                              Entering: "ease-in-out duration-300"
                                From: "opacity-0"
                                To: "opacity-100"
                              Leaving: "ease-in-out duration-300"
                                From: "opacity-100"
                                To: "opacity-0"
                            */}
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Close sidebar</span>
              {/* Heroicon name: outline/x */}
              <svg
                className="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <img className="h-8 w-auto" src={BedrockLogo} alt="Bedrock" />
            </div>
            <nav aria-label="Sidebar" className="mt-5">
              <div className="px-2 space-y-1">
                {/* Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" */}
                <a
                  href="#"
                  className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                >
                  {/* Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500" */}
                  {/* Heroicon name: outline/home */}
                  <svg
                    className="text-gray-500 mr-4 h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Dashboard
                </a>
              </div>
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <a href="#" className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div>
                  <img
                    className="inline-block h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-300 group-hover:text-gray-600">
                    Whitney Francis
                  </p>
                  <p className="text-xs font-medium text-gray-100 group-hover:text-gray-500">
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 w-14" aria-hidden="true">
          {/* Force sidebar to shrink to fit close icon */}
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1 bg-cool-gray-800">
            {/* <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-gray-100"> */}
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img className="pb-8 w-auto" src={BedrockLogo} alt="Bedrock" />
              </div>
              <nav className="mt-5 flex-1" aria-label="Sidebar">
                <div className="px-2 space-y-1">
                  <MenuItem text="Dashboard" link="/dashboard" />
                  <MenuItem text="Dashboard" link="/payroll" />
                  {/* {MenuItems.map((item) => { */}
                  {/*  return <MenuItem key={item} text={item} /> */}
                  {/* })} */}
                </div>
              </nav>
            </div>

            <MenuProfile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
