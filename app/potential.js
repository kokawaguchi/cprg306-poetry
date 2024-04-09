import React, { useState, useEffect } from "react";
import { getPoems, getPoemFromSelection } from "./_services/poem-list-services";

export default function PotentialPoem({ poems }) {
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedPoem, setSelectedPoem] = useState("");

  // When component mounts, get all poems from Firebase
  useEffect(() => {
    async function fetchPoems() {
      try {
        const poemsData = await getPoems();
        setPoems(poemsData);
      } catch (error) {
        console.error("Error fetching poems: ", error);
      }
    }
    fetchPoems();
  }, []);

  // Function to handle selection of author from the dropdown
  const handleAuthorChange = (event) => {
    setSelectedAuthor(event.target.value);
    setSelectedPoem("");
    setSelectedTitle("");
  };

  // Function to handle selection of title from the dropdown
  const handleTitleChange = (event) => {
    setSelectedTitle(event.target.value);
    setSelectedPoem("");
  };

  // Function to handle click on the "Show" button
  const handleShowClick = async () => {
    try {
      const poemContent = await getPoemFromSelection(
        selectedAuthor,
        selectedTitle
      );
      setSelectedPoem(poemContent);
    } catch (error) {
      console.error("Error fetching poem: ", error);
    }
  };

  // Filter poems based on the selected author
  const filteredPoems = selectedAuthor
    ? poems.filter((poem) => poem.name === selectedAuthor)
    : poems;

  return (
    <section>
      {/* Heading */}
      <div className="md:px-1 flex justify-center">
        <h1 className="font-bold tracking-tighter lg:text-1xl text-cyan-500">
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
            onChange={handleAuthorChange}
            value={selectedAuthor}
          >
            <option value="">Author List</option>
            {/* Map over the unique author names */}
            {Array.from(new Set(poems.map((poem) => poem.name))).map(
              (author) => (
                <option key={author}>{author}</option>
              )
            )}
          </select>
        </div>
        {/* Poem Dropdown */}
        <div className="relative mr-2">
          <select
            className="block appearance-none bg-cyan-400 border border-gray-300 text-white py-3 px-20 pr-20 rounded leading-tight 
            focus:border-gray-500 w-96 overflow-hidden"
            onChange={handleTitleChange}
            value={selectedTitle}
          >
            <option value="">Poem List</option>
            {/* Map over the filtered poems and render poem titles */}
            {filteredPoems.map((poem) => (
              <option key={poem.id}>{poem.title}</option>
            ))}
          </select>
        </div>
        {/* Show Button */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded"
          onClick={handleShowClick}
        >
          Show
        </button>
      </div>
      {/* Poem Box Area */}
      <div className="border border-gray-200 rounded-lg bg-white shadow-md md:p-5 dark:shadow-lg mb-5 w-full text-red-600 text-lg">
        {/* Render the selected poem inside the poem box area */}
        {selectedPoem ? (
          <p>{selectedPoem}</p>
        ) : (
          <p className="text-placeholder">
            User submitted poems can be selected here.
          </p>
        )}
      </div>
    </section>
  );
}
