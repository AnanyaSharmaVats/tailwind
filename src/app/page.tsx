'use client';

import * as React from 'react';
import '@/lib/env';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';
import { Section } from 'lucide-react';
import Section1 from '@/components/sections/section1';
import Section2 from '@/components/sections/section2';
import Section3 from '@/components/sections/section3';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>

      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/images/furnirologo.png" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Furniro</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Shop</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 md:p-0 dark:text-white md:dark:hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#"><img src="/images/alert.png" alt="alert" className="h-5 w-5" /></a>
              </li>
              <li>
                <a href="#"><img src="/images/search.png" alt="alert" className="h-5 w-5" /></a>
              </li>
              <li>
                <a href="#"><img src="/images/like.png" alt="alert" className="h-5 w-5" /></a>
              </li>
              <li>
                <a href="#"><img src="/images/shopingcart.png" alt="alert" className="h-5 w-5" /></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <Section1 />
      <Section2 />
      <Section3 />

      <section className='bg-white '>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          
          
          <footer className='absolute bottom-2 text-gray-700'>
            <hr className="border-gray-300 mb-10"/>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-800">
              <div><h3 className="text-lg font-bold text-gray-900 sm:text-3xl text-left" >Funiro.</h3><br /> 
              <p className="text-left text-gray-400 text-xs" >400 University Drive Suite 200 Coral Gables,<br /> FL 33134 USA</p>
              </div>
              <div>
                <ul>
                  <li className="mb-10 text-left text-gray-400 text-xs" >Links</li>
                  <li className="mb-10 text-left text-xs" >Home</li>
                  <li className="mb-10 text-left text-xs" >Shop</li>
                  <li className="mb-10 text-left text-xs" >About</li>
                  <li className="mb-10 text-left text-xs" >Contact</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="mb-10 text-left text-gray-400 text-xs" >Help</li>
                  <li className="mb-10 text-left text-xs" >Payment Options</li>
                  <li className="mb-10 text-left text-xs" >Returns</li>
                  <li className="mb-10 text-left text-xs" >Privacy Policies</li>
                  <li className="mb-10 text-left text-xs" ></li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="mb-10 text-left text-gray-400 text-xs" >Newsletter</li>
                  <li className="mb-10 text-left text-gray-400 underline underline-offset-4 decoration-black text-xs">Enter Your Email Address<span className="text-black">SUBSCRIBE</span> </li>
                </ul>
              </div>
            </div>
            <hr className="border-gray-300 mb-10"/>
            © {new Date().getFullYear()} By{' '}
            furino. All rights reverved.

          </footer>
        </div>
      </section>
    </main>
  );
}
