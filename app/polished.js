"use client";

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

  const handleAuthorChange = (event) => {
    const selectedAuthor = event.target.value;
    setSelectedAuthor(selectedAuthor);
    setSelectedTitle("");
    setTitles([]);
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
      <div className="md:px-2 bg-slate-300 rounded-md w-32 mb-1">
        <h1 className="font-bold tracking-tighter lg:text-1xl text-cyan-500">
          Polished Poems
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
            {authors.map((author, index) => (
              <option key={index} value={author}>
                {author}
              </option>
            ))}
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded"
          onClick={handleShowClick}
        >
          Show
        </button>
      </div>
      {/* Poem Box Area */}
      <div className="border border-gray-200 rounded-lg bg-white shadow-md md:p-5 dark:shadow-lg mb-5 w-full text-red-600 text-lg">
        {isLoadingPoem ? (
          <p>Loading poem...</p>
        ) : poem ? (
          <pre>{poem}</pre>
        ) : (
          <p className="text-placeholder">
            To view poems from well-known authors, first select an author, then
            a title, and finally click show to view here.
          </p>
        )}
      </div>
    </section>
  );
}
