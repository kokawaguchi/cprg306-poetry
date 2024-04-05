"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="bg-gray-50/90 shadow-sm dark:bg-gray-950/90"></header>
      <main className="flex-1 bg-gray-100/90 dark:bg-gray-800/90">
        <div className="flex items-center justify-center w-full py-6 bg-pink-300">
          {/* Title */}
          <div className="grid max-w-3xl px-4 text-center md:px-6 bg-green-400">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl justify-center w-full">
              Popping Poetry
            </h1>
          </div>
        </div>

        {/* Main Area Begins */}
        <div className="py-6 flex flex-col items-center justify-center w-full bg-teal-400">
          <div className="container flex flex-col items-center justify-center px-6 md:px-6">
            <div
              className="mt- justify-center grid max-w-5xl gap-1 p-4 border border-gray-200 rounded-lg
             bg-white shadow-md md:p-5 md:gap-2bg-white-900 dark:shadow-lg"
            >
              {/* Search for Poems Begins */}
              <div className="bg-orange-400  w-full text-center">
                Search for Poems Here
              </div>
              <div className="flex flex-row items-center">
                {/* Dropdown for Author */}
                <div className="relative mr-2 ">
                  <select
                    className="block appearance-none w-full bg-cyan-400 border border-gray-300 text-white py-3 px-20 pr-20 rounded 
                  leading-tight "
                  >
                    <option>Shakespeare</option>
                    <option>Poetry Guy</option>
                    {/* TODO: API to retrieve all authors in db */}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 13.707a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 1.414l-3 3z" />
                    </svg>
                  </div>
                </div>

                {/* Dropdown for Title */}
                <div className="relative mr-2">
                  <select
                    className="block appearance-none w-full bg-cyan-400 border border-gray-300 text-white py-3 px-20 pr-20 rounded 
                  leading-tight  focus:border-gray-500"
                  >
                    <option>Poem Title</option>
                    <option>A Gentle Breeze Road On A Cold Day</option>
                    {/* TODO: API to retrieve all titles in db */}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 13.707a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 1.414l-3 3z" />
                    </svg>
                  </div>
                </div>

                {/* Dropdown for Lines */}
                <div className="relative mr-2">
                  <select
                    className="block appearance-none w-full bg-cyan-400 border border-gray-300 text-white py-3 px-10 pr-10 rounded 
                  leading-tight  focus:border-gray-500"
                  >
                    <option>Lines 1</option>
                    <option>Lines 2</option>
                    {/* TODO: API to retrieve all line counts in db */}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 13.707a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 1.414l-3 3z" />
                    </svg>
                  </div>
                </div>

                {/* Search Button */}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
                  Search
                </button>
              </div>
              {/* Boxed area for API data */}
              <div className=" border border-gray-200 rounded-lg bg-white shadow-md md:p-10 bg-orange-100 dark:shadow-lg mb-10"></div>

              {/* Create Your Own Poem Starts */}
              <div className="container flex flex-col items-center justify-center ">
                <div className="bg-orange-400 mb-1 w-full text-center">
                  Create Your Own Poem Here
                </div>

                {/* Box Area to Enter Poem */}
                <div className="flex flex-col items-center mb-1 w-full">
                  <div className="border border-gray-200 rounded-lg bg-white shadow-md md:p-10 bg-orange-100 dark:shadow-lg w-full">
                    <input type="text" placeholder="Your poem here"></input>
                  </div>
                </div>

                {/* Box Area to Enter Author */}
                <div className="flex flex-col items-center mb-2 w-full">
                  <div className="border border-gray-200 rounded-lg bg-white shadow-md md:p-4 bg-orange-100 dark:shadow-lg w-full">
                    <input type="text" placeholder="Your name here"></input>
                  </div>
                </div>

                {/* Search Button */}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded w-1/8">
                  Post Your Poem
                </button>
              </div>
              {/* Create Your Own Poem Ends */}
            </div>
            {/* Main Area Ends */}
          </div>
        </div>
      </main>
      <footer className="grid w-full py-4 text-sm text-center bg-gray-900 gap-2 items-center justify-center font-medium rounded-t-3xl sm:gap-4 md:gap-6 lg:py-6 xl:rounded-t-4xl text-gray-50 dark:bg-gray-50 dark:text-gray-900 dark:rounded-t-3xl">
        <div className="flex items-center justify-center space-2">
          <p className="mx-2">© 2024 Popping Poetry</p>
        </div>
      </footer>
    </div>
  );
}
