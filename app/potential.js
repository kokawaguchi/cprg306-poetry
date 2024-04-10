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
      <div className="px-4 md:px-1 flex justify-center">
        <div className="px-1 mb-1 text-md  md:text-lg">
          <h1 className="font-bold tracking-tighter text-cyan-900">
            potential poems
          </h1>
        </div>
      </div>
      {/* Top Row */}
      <div className="flex justify-center mb-1 ">
        {/* Author Dropdown */}
        <div className="relative flex-initial w-80 justify-start md:mr-2 mb-2 md:mb-0">
          <select
            className="block appearance-none text-black py-3 px-20 rounded leading-tight w-full overflow-hidden"
            onChange={handleAuthorChange}
            value={selectedAuthor}
            style={{ backgroundColor: "#eb9486" }}
          >
            <option value="">author</option>
            {/* Map over the unique author names */}
            {Array.from(new Set(poems.map((poem) => poem.name))).map(
              (author) => (
                <option key={author}>{author}</option>
              )
            )}
          </select>
        </div>
        {/* Poem Dropdown */}
        <div className="relative flex-initial w-96 justify-start md:mr-2 mb-2 md:mb-0">
          <select
            className="block appearance-none text-black py-3 px-20 rounded leading-tight w-full overflow-hidden"
            onChange={handleTitleChange}
            value={selectedTitle}
            style={{ backgroundColor: "#eb9486" }}
          >
            <option value="">poems</option>
            {/* Map over the filtered poems and render poem titles */}
            {filteredPoems.map((poem) => (
              <option key={poem.id}>{poem.title}</option>
            ))}
          </select>
        </div>
        {/* Show Button */}
        <button
          className="relative flex-initial w-20 justify-start  mb-2 md:mb-0 text-black rounded-lg font-bold"
          onClick={handleShowClick}
          style={{ backgroundColor: "#cae7b9" }}
        >
          view
        </button>
      </div>
      {/* Poem Box Area */}
      <div className="relative flex-initial border border-gray-200 rounded-lg bg-white shadow-md p-4 mb-5 text-red-600 text-lg">
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
