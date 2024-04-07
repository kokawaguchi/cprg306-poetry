"use client";

import PolishedPoem from "./polished";
import PotentialPoem from "./potential";
import PostPoems from "./post";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main>
        {/* Title */}
        <div className="flex items-center justify-center w-full py-5 bg-pink-300">
          {/* Title Highlight */}
          <div className="md:px-7 bg-green-400">
            <h1 className="font-bold tracking-tighter lg:text-5xl">
              Popping Poetry
            </h1>
          </div>
        </div>

        <div className=" justify-center grid w-full p-4 bg-yellow-200">
          <PolishedPoem />
          <PotentialPoem />
          <PostPoems />
        </div>
      </main>
      <footer
        className="grid w-full text-sm text-center lg:py-6 dark:bg-gray-50 dark:text-gray-900 dark:rounded-t-3xl
      fixed bottom-0"
      >
        <div>
          <p>© 2024 Popping Poetry</p>
        </div>
      </footer>
    </div>
  );
}
