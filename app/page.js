"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-50/90 shadow-sm dark:bg-gray-950/90">
        <div className="container flex items-center justify-between h-14 px-4 md:px-6">
          <nav className="items-center space-x-4 text-sm font-semibold tracking-wider uppercase">
            <Link className="text-gray-900 dark:text-gray-50" href="#">
              Home
            </Link>
            <Link className="text-gray-900 dark:text-gray-50" href="#">
              About
            </Link>
            <Link className="text-gray-900 dark:text-gray-50" href="#">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              className="text-sm font-semibold tracking-wider uppercase underline-anim-primary"
              href="#"
            >
              Popping Poetry
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-gray-100/90 dark:bg-gray-800/90">
        <div className="flex items-center justify-center w-full py-6">
          <div className="grid max-w-3xl gap-4 px-4 text-center md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
              Generate Beautiful Poetry
            </h1>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Enter a prompt or keyword to inspire your poem.
            </p>
            <div className="flex flex-col gap-2 md:flex-row md:gap-4 lg:gap-2"></div>
          </div>
        </div>
        <div className="py-6">
          <div className="container flex items-center justify-center px-4 md:px-6">
            <div className="grid max-w-3xl gap-4 p-4 border border-gray-200 rounded-lg bg-white shadow-md md:p-10 md:gap-8 dark:border-gray-800 dark:bg-gray-950/90 dark:shadow-lg">
              <p>poems here</p>
            </div>
          </div>
        </div>
        <div className="py-6">
          <div className="container flex items-center justify-center px-4 md:px-6">
            <div className="grid max-w-3xl gap-4 p-4 md:p-10 md:gap-8"></div>
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
