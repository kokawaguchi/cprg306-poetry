"use client";
import PolishedPoem from "./polished";
import PotentialPoem from "./potential";
import PostPoems from "./post";
import { useState, useEffect } from "react";
import { getPoems, addPoem } from "./_services/poem-list-services";

export default function Page() {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    fetchPoems();
  }, []); // Fetch poems data when component mounts

  const fetchPoems = async () => {
    try {
      const poemsData = await getPoems();
      setPoems(poemsData);
    } catch (error) {
      console.error("Error fetching poems: ", error);
    }
  };

  async function handleAddPoem(poem) {
    const id = await addPoem(poem);
    setPoems((prevPoems) => [...prevPoems, { id, ...poem }]);
  }

  const refreshData = () => {
    fetchPoems();
  };

  return (
    <div className="flex flex-col min-h-screen bg-yellow-200">
      <main>
        {/* Title */}
        <div className="flex items-center justify-center w-full py-5 bg-pink-300">
          {/* Title Highlight */}
          <div className="md:px-7">
            <h1 className="font-bold tracking-tighter lg:text-5xl">
              Popping Poems
            </h1>
          </div>
        </div>

        <div className=" justify-center grid w-full p-4 bg-yellow-200">
          <PolishedPoem />
          <PotentialPoem poems={poems} /> {/* Pass poems as a prop */}
          <PostPoems onAddPoem={handleAddPoem} onPoemAdded={refreshData} />
        </div>
      </main>
      <footer
        className="grid w-full text-sm text-center lg:py-6 dark:bg-pink-300 dark:text-gray-900 dark:rounded-t-3xl
      fixed bottom-0"
      >
        <div>
          <p className="text-white lg:text-xl tracking-tighter">
            © 2024 Popping Poetry
          </p>
        </div>
      </footer>
    </div>
  );
}
