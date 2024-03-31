import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header class="body-font bg-black text-white">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <Link href="/">
            <span className="ml-3 text-xl text-white cursor-pointer">
              Tailblocks
            </span>
          </Link>
        </div>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <span className="mr-5 hover:text-indigo-500 cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/how-it-works">
            <span className="mr-5 hover:text-indigo-500 cursor-pointer">
              How it works
            </span>
          </Link>
          <Link href="/low-rates">
            <span className="mr-5 hover:text-indigo-500 cursor-pointer">
              Low rates
            </span>
          </Link>
          <Link href="/about">
            <span className="mr-5 hover:text-indigo-500 cursor-pointer">
              About
            </span>
          </Link>
          <Link href="/blog">
            <span className="mr-5 hover:text-indigo-500 cursor-pointer">
              Blog
            </span>
          </Link>
          <Link href="/faqs">
            <span className="mr-5 hover:text-indigo-500 cursor-pointer">
              FAQs
            </span>
          </Link>
          <Link href="/contact-us">
            <span className="mr-5 hover:text-indigo-500 cursor-pointer">
              Contact us
            </span>
          </Link>
        </nav>
        <button class="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">
          Apply now
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
