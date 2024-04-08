import React, { useState, useEffect } from "react";
import { getPoems } from "./_services/poem-list-services";

export default function PotentialPoem() {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    // Fetch poems from Firestore when the component mounts
    async function fetchPoems() {
      try {
        const poemsData = await getPoems();
        setPoems(poemsData);
      } catch (error) {
        console.error("Error fetching poems: ", error);
      }
    }

    fetchPoems();

    // Clean up function
    return () => {};
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <section>
      {/* Heading */}
      <div className="md:px-1 bg-slate-300 rounded-md w-32">
        <h1 className="font-bold tracking-tighter lg:text-1xl text-cyan-500 mb-1">
          Potential Poems
        </h1>
      </div>
      {/* Top Row */}
      <div className="flex flex-row items-center w-11/12 mb-1">
        {/* Author Dropdown */}
        <div className="relative mr-2">
          <select
            className="block appearance-none bg-cyan-400 border border-gray-300 text-white py-3 px-20 pr-20 rounded leading-tight
             focus:border-gray-500 w-64 overflow-hidden"
          >
            <option>Author List</option>
            {/* Map over the poems and render author names */}
            {poems.map((poem) => (
              <option key={poem.id}>{poem.name}</option>
            ))}
          </select>
        </div>
        {/* Poem Dropdown */}
        <div className="relative mr-2">
          <select
            className="block appearance-none bg-cyan-400 border border-gray-300 text-white py-3 px-20 pr-20 rounded leading-tight 
            focus:border-gray-500 w-96 overflow-hidden"
          >
            <option>Poem List</option>
            {/* Map over the poems and render poem titles */}
            {poems.map((poem) => (
              <option key={poem.id}>{poem.poem}</option>
            ))}
          </select>
        </div>
        {/* Show Button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded">
          Show
        </button>
      </div>
      {/* Poem Box Area */}
      <div className="border border-gray-200 rounded-lg bg-white shadow-md md:p-5 dark:shadow-lg mb-5 w-full text-red-600 text-lg">
        <p className="text-placeholder">Retrieve user poems from firebase</p>
      </div>
    </section>
  );
}
