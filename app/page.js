"use client";
import PolishedPoem from "./polished";
import PotentialPoem from "./potential";
import PostPoems from "./post";
import { useState, useEffect } from "react";
import { getPoems, addPoem } from "./_services/poem-list-services";

export default function Page() {
  const [poems, setPoems] = useState([]);

  // render - get poems from firebase
  useEffect(() => {
    fetchPoems();
  }, []);
  // getPoems is a function defined in poem-list-services
  const fetchPoems = async () => {
    try {
      const poemsData = await getPoems();
      setPoems(poemsData);
    } catch (error) {
      console.error("Error fetching poems: ", error);
    }
  };
  // creates a new array with the added poem
  async function handleAddPoem(poem) {
    const id = await addPoem(poem);
    setPoems((prevPoems) => [...prevPoems, { id, ...poem }]);
  }

  const refreshData = () => {
    fetchPoems();
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "#f3de8a" }}
    >
      <main>
        {/* Title */}
        <div
          className="flex items-center justify-center w-full py-4"
          style={{ backgroundColor: "#eb9486" }}
        >
          {/* Title Highlight */}
          <div className="md:px-7 bg-white">
            <h1 className="font-bold tracking-tighter text-base text-black">
              POPPING POEMS
            </h1>
          </div>
        </div>

        <div
          className=" justify-center grid w-full p-4"
          style={{ backgroundColor: "#f3de8a" }}
        >
          <PolishedPoem />
          <PotentialPoem poems={poems} />
          {/* when a poem is added, this should refresh the potential poem list*/}
          <PostPoems onAddPoem={handleAddPoem} onPoemAdded={refreshData} />
        </div>
      </main>
      <footer
        className="grid w-full text-sm text-center lg:py-6 dark:text-gray-900
      fixed bottom-0"
        style={{ backgroundColor: "#eb9486" }}
      >
        <div>
          <p className="text-black lg:text-xl tracking-tighter">
            © 2024 Popping Poems
          </p>
        </div>
      </footer>
    </div>
  );
}
