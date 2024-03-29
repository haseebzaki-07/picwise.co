"use client";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import logo from "../public/assets/image.png";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const showMobileNav = () => {
    document.querySelector(".menu")?.classList.toggle("hidden");
  };
  return (
    <>
      <div className="overflow-x-hidden bg-gray-50">
        <header className="py-4 md:py-6">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0 p-4 sm:p-0">
                <a
                  href="#"
                  className="flex rounded outline-none font-bold text-3xl focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  <Image
                    src={logo}
                    width={35}
                    height={30}
                    className="mx-1"
                    alt=""
                  />
                  Pic
                  <span className="text-blue-600">Wise</span>.
                </a>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="text-gray-900"
                  onClick={showMobileNav}
                >
                  <span x-show="!expanded" aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Features{" "}
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Pricing{" "}
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Automation{" "}
                </a>
              </div>
              <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                <Link href="/dashboard">
                  <SignInButton afterSignInUrl="/dashboard" mode="modal">
                    <div
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                      role="button"
                    >
                      Dashboard
                    </div>
                  </SignInButton>
                </Link>
              </div>
            </div>
            <nav className="hidden menu">
              <div className="px-1 py-8">
                <div className="grid gap-y-7">
                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    Features{" "}
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    Pricing{" "}
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    Automation{" "}
                  </a>
                  <a
                    href="#"
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    Customer Login{" "}
                  </a>
                  <Link href="/dashboard">
                    <SignInButton afterSignInUrl="/dashboard" mode="modal">
                      
                      <div
                        className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                        role="button"
                      >
                        Dashboard
                      </div>
                    </SignInButton>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <section className="pt-12 bg-gray-50 sm:pt-16">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="px-6 text-lg text-gray-600 font-inter">
                Redefining Image Compression, Like Never Before.
              </h1>
              <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-5xl lg:leading-tight font-pj">
                Compress image size by 90% wihout
                <span className="relative inline-flex sm:inline">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 blur-lg filter opacity-30 w-full h-full absolute inset-0" />
                  <span className="relative">losing much of pixels.</span>
                </span>
              </p>
              <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-blue-600 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                  role="button"
                >
                  Get Started
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-gray-200 focus:bg-gray-200"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                      strokeWidth={2}
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Watch the demo
                </a>
              </div>
              <p className="mt-8 text-base text-gray-500 font-inter">
                Free Image Compression.
              </p>
            </div>
          </div>
          <div className="pb-12 bg-white">
            <div className="relative">
              <div className="absolute inset-0 h-2/3 bg-gray-50" />
              <div className="relative mx-auto">
                <div className="lg:max-w-6xl lg:mx-auto">
                  {/* <img
                    className="transform scale-110"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
