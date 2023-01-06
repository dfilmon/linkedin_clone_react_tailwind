import React from 'react';
import './style.css';

export default function Profile() {
  return (
    <div>
      <header class="bg-white dark:bg-white-900">
        <nav x-data="{ isOpen: false }" class="px-6 py-4 shadow">
          <div class="lg:items-center lg:justify-between lg:flex">
            <div class="flex items-center justify-between">
              <div class="lg:hidden">
                <button
                  type="button"
                  class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg
                    x-show="!isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>

                  <svg
                    x-show="isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div class="lg:flex">
          <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div class="max-w-xl">
              <h2 class="text-3xl font-semibold text-gray-800 text-white lg:text-4xl">
                Phoebe Stacks
              </h2>
              <h2 class=" text-large font-semibold text-gray-800 dark:text-black lg:text-large lg:mt-2 ">
              Pharmacist at Kroger
              </h2>

              <p class="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis commodi cum cupiditate ducimus, fugit harum id
                necessitatibus odio quam quasi, quibusdam rem tempora
                voluptates.
              </p>

              <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <a
                  href="#"
                  class="block px-6 py-2.5 text-sm font-medium tracking-wider text-center text-gray-700 uppercase transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
                >
                  Connect
                </a>
                <a
                  href="#"
                  class="block px-6 py-2.5 text-sm font-medium tracking-wider text-center text-white uppercase transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div class="w-full h-64 lg:w-1/2 lg:h-auto">
            <div class="profileImage w-full h-full bg-cover">
              <div class="w-full h-full bg-black opacity-25"></div>
            </div>
          </div>
        </div>
      </header>

      <header class="bg-white dark:bg-white-900 border-solid border-2">
       
        <div class="container px-6 py-16 mx-auto">
          <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
              <div class="lg:max-w-lg">
                <h1 class="text-3xl font-semibold text-gray-800 dark:text-black lg:text-4xl">
                  Work History
                </h1>

                <p class="mt-4 text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro beatae error laborum ab amet sunt recusandae? Reiciendis
                  natus perspiciatis optio.
                </p>

                <button class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  See More
                </button>
              </div>
            </div>

   
          </div>
        </div>
      </header>
    </div>
  );
}
