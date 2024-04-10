import React, { useState, useEffect } from "react";

export default function PolishedPoem() {
  const [authors, setAuthors] = useState([]);
  const [titles, setTitles] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [isLoadingAuthors, setIsLoadingAuthors] = useState(true);
  const [isLoadingTitles, setIsLoadingTitles] = useState(false);
  const [poem, setPoem] = useState("");
  const [isLoadingPoem, setIsLoadingPoem] = useState(false);

  // render - load all artists from poetry db
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch("https://poetrydb.org/author");
        const data = await response.json();
        setAuthors(data.authors);
        setIsLoadingAuthors(false);
      } catch (error) {
        console.error("Error fetching authors:", error);
        setIsLoadingAuthors(false);
      }
    };
    fetchAuthors();
  }, []);

  const fetchTitlesByAuthor = async (author) => {
    try {
      setIsLoadingTitles(true);
      const response = await fetch(`https://poetrydb.org/author/${author}`);
      const data = await response.json();
      setTitles(data);
      setIsLoadingTitles(false);
    } catch (error) {
      console.error("Error fetching titles:", error);
      setIsLoadingTitles(false);
    }
  };

  const fetchPoemByAuthorAndTitle = async (author, title) => {
    try {
      setIsLoadingPoem(true);
      const response = await fetch(
        `https://poetrydb.org/author,title/${author};${title}`
      );
      const data = await response.json();
      const poemContent = data[0].lines.join("\n");
      setPoem(poemContent);
      setIsLoadingPoem(false);
    } catch (error) {
      console.error("Error fetching poem:", error);
      setIsLoadingPoem(false);
    }
  };

  // when a new author is selected, this function so clear all fields
  const handleAuthorChange = (event) => {
    const selectedAuthor = event.target.value;
    setSelectedAuthor(selectedAuthor);
    setSelectedTitle("");
    setTitles([]);
    setPoem("");
    if (selectedAuthor) {
      fetchTitlesByAuthor(selectedAuthor);
    }
  };

  const handleTitleChange = (event) => {
    const selectedTitle = event.target.value;
    setSelectedTitle(selectedTitle);
  };

  const handleShowClick = () => {
    if (selectedAuthor && selectedTitle) {
      fetchPoemByAuthorAndTitle(selectedAuthor, selectedTitle);
    }
  };

  return (
    <section>
      {/* Heading */}
      <div className="px-4 md:px-1 flex justify-center">
        <div className="px-1 mb-1 text-md md:text-lg">
          <h1 className="font-bold tracking-tighter text-cyan-900">
            polished poems
          </h1>
        </div>
      </div>
      {/* Top Row */}
      <div className="flex flex-col md:flex-row items-stretch mb-1">
        {/* Author Dropdown */}
        <div className="relative flex-1 mb-2 md:mr-2 md:mb-0">
          <select
            className="block appearance-none text-black py-3 px-4 rounded leading-tight w-full overflow-hidden"
            onChange={handleAuthorChange}
            value={selectedAuthor}
            style={{ backgroundColor: "#eb9486" }}
          >
            <option value="">author</option>
            {authors.map((author, index) => (
              <option key={index} value={author}>
                {author}
              </option>
            ))}
          </select>
        </div>
        {/* Poem Dropdown */}
        <div className="relative flex-1 mb-2 md:mr-2 md:mb-0">
          <select
            className="block appearance-none text-black py-3 px-4 rounded leading-tight w-full overflow-hidden"
            onChange={handleTitleChange}
            value={selectedTitle}
            style={{ backgroundColor: "#eb9486" }}
          >
            <option value="">poems</option>
            {isLoadingTitles ? (
              <option>Loading...</option>
            ) : (
              titles.map((title, index) => (
                <option key={index} value={title.title}>
                  {title.title}
                </option>
              ))
            )}
          </select>
        </div>
        {/* Show Button */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-3 px-5 rounded self-stretch md:ml-2"
          onClick={handleShowClick}
          style={{ backgroundColor: "#cae7b9" }}
        >
          view
        </button>
      </div>
      {/* Poem Box Area */}
      <div className="flex">
        <div className="">
          <div className="flex-1 w-full border border-gray-200 rounded-lg bg-white shadow-md p-4 mb-5 text-red-600 text-lg">
            {isLoadingPoem ? (
              <p>Loading poem...</p>
            ) : poem ? (
              <pre>{poem}</pre>
            ) : (
              <p className="text-placeholder">
                Famous poems can be selected here.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
