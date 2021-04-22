import React, { Component } from "react"

import MenuProfile from "./MenuProfile"
import MenuItem from "./components/MenuItem"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons"

import BedrockLogo from "../../assets/images/logo/bedrock_w.svg"

class Menu extends Component {
  render() {
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

                  {/*<a href="#"*/}
                  {/*   className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">*/}
                  {/*    /!* Heroicon name: outline/calendar *!/*/}
                  {/*    <svg className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6"*/}
                  {/*         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                  {/*         stroke="currentColor" aria-hidden="true">*/}
                  {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                  {/*              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>*/}
                  {/*    </svg>*/}
                  {/*    Calendar*/}
                  {/*</a>*/}

                  {/*<a href="#"*/}
                  {/*   className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">*/}
                  {/*    /!* Heroicon name: outline/user-group *!/*/}
                  {/*    <svg className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6"*/}
                  {/*         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                  {/*         stroke="currentColor" aria-hidden="true">*/}
                  {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                  {/*              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>*/}
                  {/*    </svg>*/}
                  {/*    Teams*/}
                  {/*</a>*/}

                  {/*<a href="#"*/}
                  {/*   className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">*/}
                  {/*    /!* Heroicon name: outline/search-circle *!/*/}
                  {/*    <svg className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6"*/}
                  {/*         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                  {/*         stroke="currentColor" aria-hidden="true">*/}
                  {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                  {/*              d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>*/}
                  {/*    </svg>*/}
                  {/*    Directory*/}
                  {/*</a>*/}

                  {/*<a href="#"*/}
                  {/*   className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">*/}
                  {/*    /!* Heroicon name: outline/speakerphone *!/*/}
                  {/*    <svg className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6"*/}
                  {/*         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                  {/*         stroke="currentColor" aria-hidden="true">*/}
                  {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                  {/*              d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>*/}
                  {/*    </svg>*/}
                  {/*    Announcements*/}
                  {/*</a>*/}

                  {/*<a href="#"*/}
                  {/*   className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">*/}
                  {/*    /!* Heroicon name: outline/map *!/*/}
                  {/*    <svg className="text-gray-400 group-hover:text-gray-500 mr-4 h-6 w-6"*/}
                  {/*         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                  {/*         stroke="currentColor" aria-hidden="true">*/}
                  {/*        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                  {/*              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>*/}
                  {/*    </svg>*/}
                  {/*    Office Map*/}
                  {/*</a>*/}
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
        <div className="hidden lg:flex lg:flex-shrink-0 animate__animated animate__fadeInLeft">
          <div className="flex flex-col w-64">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex flex-col h-0 flex-1 bg-cool-gray-800">
              {/*<div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-gray-100">*/}
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <img
                    className="pb-8 w-auto"
                    src={BedrockLogo}
                    alt="Bedrock"
                  />
                </div>
                <nav className="mt-5 flex-1" aria-label="Sidebar">
                  <div className="px-2 space-y-1">
                    {/* Current: "bg-gray-200 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" */}
                    <a
                      href="#"
                      className="bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    >
                      {/* Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500" */}
                      {/* Heroicon name: outline/home */}
                      <svg
                        className="text-gray-500 mr-3 h-6 w-6"
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
                    <MenuItem text="Dashboard" />
                    <MenuItem text="Not a dashboard!!" />
                    {/*<a href="#"*/}
                    {/*   className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">*/}
                    {/*    /!* Heroicon name: outline/calendar *!/*/}
                    {/*    <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"*/}
                    {/*         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                    {/*         stroke="currentColor" aria-hidden="true">*/}
                    {/*        <path strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*              strokeWidth="2"*/}
                    {/*              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>*/}
                    {/*    </svg>*/}
                    {/*    Calendar*/}
                    {/*</a>*/}

                    {/*<a href="#"*/}
                    {/*   className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">*/}
                    {/*    /!* Heroicon name: outline/user-group *!/*/}
                    {/*    <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"*/}
                    {/*         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                    {/*         stroke="currentColor" aria-hidden="true">*/}
                    {/*        <path strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*              strokeWidth="2"*/}
                    {/*              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>*/}
                    {/*    </svg>*/}
                    {/*    Teams*/}
                    {/*</a>*/}

                    {/*<a href="#"*/}
                    {/*   className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">*/}
                    {/*    /!* Heroicon name: outline/search-circle *!/*/}
                    {/*    <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"*/}
                    {/*         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                    {/*         stroke="currentColor" aria-hidden="true">*/}
                    {/*        <path strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*              strokeWidth="2"*/}
                    {/*              d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>*/}
                    {/*    </svg>*/}
                    {/*    Directory*/}
                    {/*</a>*/}

                    {/*<a href="#"*/}
                    {/*   className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">*/}
                    {/*    /!* Heroicon name: outline/speakerphone *!/*/}
                    {/*    <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"*/}
                    {/*         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                    {/*         stroke="currentColor" aria-hidden="true">*/}
                    {/*        <path strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*              strokeWidth="2"*/}
                    {/*              d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>*/}
                    {/*    </svg>*/}
                    {/*    Announcements*/}
                    {/*</a>*/}

                    {/*<a href="#"*/}
                    {/*   className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md">*/}
                    {/*    /!* Heroicon name: outline/map *!/*/}
                    {/*    <svg className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"*/}
                    {/*         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
                    {/*         stroke="currentColor" aria-hidden="true">*/}
                    {/*        <path strokeLinecap="round" strokeLinejoin="round"*/}
                    {/*              strokeWidth="2"*/}
                    {/*              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>*/}
                    {/*    </svg>*/}
                    {/*    Office Map*/}
                    {/*</a>*/}
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
}

export default Menu
