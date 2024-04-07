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
        <div
          className=" justify-center grid w-full gap-1 p-4 border border-gray-200 rounded-lg
             bg-yellow-200 shadow-md md:p-5 md:gap-2bg-white-900 dark:shadow-lg"
        >
          {/* Search for Poems Begins */}
          <div className="bg-orange-400  w-6/12 text-center">
            Polished Poems (poetry db api)
          </div>
          {/* Dropdown div Begins */}
          <div className="flex flex-row items-center w-11/12">
            {/* Dropdown for Author */}
            <div className="relative mr-2 ">
              <select
                className="block appearance-none bg-cyan-400 border border-gray-300 text-white py-3 
                    px-20 pr-20 rounded leading-tight focus:border-gray-500 w-66"
              >
                <option>Shakespeare</option>
                <option>Pro Author</option>
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
                className="block appearance-none bg-cyan-400 border border-gray-300 text-white py-3 
                  px-20 pr-20 rounded leading-tight focus:border-gray-500 w-96"
              >
                <option>Poem Title</option>
                <option>Poem</option>
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

            {/* Search Button */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded ">
              Show
            </button>
          </div>
          {/* Boxed area for API data */}
          <div
            className="border border-gray-200 rounded-lg bg-white shadow-md md:p-5
              dark:shadow-lg mb-5 w-full text-red-600  text-lg"
          >
            <p>Poem will go here</p>
            <p>And Here</p>
            <p>retrieved from poetry db</p>
          </div>
          {/* User Created Poems Begins */}
          <div className="bg-orange-400  w-6/12 text-center">
            Potential Poems (user posted poems firebase)
          </div>
          {/* Dropdown div Begins */}
          <div className="flex flex-row items-center w-11/12">
            {/* Dropdown for Author */}
            <div className="relative mr-2 ">
              <select
                className="block appearance-none bg-cyan-400 border border-gray-300 text-white py-3 
                    px-20 pr-20 rounded leading-tight focus:border-gray-500 w-66"
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
                className="block appearance-none bg-cyan-400 border border-gray-300 text-white py-3 
                  px-20 pr-20 rounded leading-tight focus:border-gray-500 w-96"
              >
                <option>Ko's Poem</option>
                <option>A Short Title Made Even Extra Longer Right Here</option>
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

            {/* Search Button */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded ">
              Show
            </button>
          </div>
          {/* Boxed area for API data */}
          <div
            className="border border-gray-200 rounded-lg bg-white shadow-md md:p-5
              dark:shadow-lg mb-5 w-full text-blue-600  text-lg"
          >
            <p>User poem here</p>
            <p>And Here</p>
            <p> retrieved from firebase</p>
          </div>
          {/* Create Your Own Poem Starts */}
          <div className="bg-orange-400  w-6/12 text-center">
            Post Poem (user posts to firebase)
          </div>
          {/* Area to write user poem begins */}
          <div
            className="border border-gray-200 rounded-lg bg-white shadow-md md:p-5
              dark:shadow-lg mb-1 w-full text-red-600  text-lg"
          >
            <p>Write poem here</p>
            <p>And Here</p>
          </div>
          {/* Area to enter user name */}
          <div
            className="border border-gray-200 rounded-lg bg-white shadow-md md:p-1
              dark:shadow-lg  w-full text-green-500  text-lg"
          >
            <p>User Name Here</p>
          </div>
          {/* Post Button */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded w-1/8">
            Post Your Poem
          </button>
          ;
        </div>
        {/* Main Area Ends */}
      </main>
      <footer className="grid w-full py-4 text-sm text-center bg-gray-900 gap-2 items-center justify-center font-medium rounded-t-3xl sm:gap-4 md:gap-6 lg:py-6 xl:rounded-t-4xl text-gray-50 dark:bg-gray-50 dark:text-gray-900 dark:rounded-t-3xl">
        <div className="flex items-center justify-center space-2">
          <p className="mx-2">© 2024 Popping Poetry</p>
        </div>
      </footer>
    </div>
  );
}
