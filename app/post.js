"use client";

import React, { useState } from "react";

export default function PostPoem({ onAddPoem }) {
  const [poem, setPoem] = useState("");
  const [name, setName] = useState("");

  function onNameChange(event) {
    setName(event.target.value);
  }

  // Function to handle submission of the poem
  function handleSubmit(event) {
    event.preventDefault();
    const newID = Math.floor(Math.random() * 1000000);
    const postPoem = { id: newID, poem, name };
    onAddPoem(postPoem);
    setPoem("");
    setName("");
  }

  return (
    <section className="flex flex-col items-left">
      <div className="md:px-1 bg-slate-300 rounded-md w-32 mb-1">
        <h1 className="font-bold tracking-tighter lg:text-1xl text-cyan-500">
          Post Poems
        </h1>
      </div>
      {/* Area to write user poem begins */}
      <form onSubmit={handleSubmit} className="bg-pink-50">
        <div className="border border-gray-200 rounded-lg bg-white shadow-md md:p-5 dark:shadow-lg mb-1 w-full text-red-600 text-lg">
          <input
            type="text"
            id="poem"
            className="w-full h-24 p-2"
            value={poem}
            onChange={(e) => setPoem(e.target.value)}
            placeholder="Write your poem here"
          />
        </div>
        {/* Area to enter user name */}
        <div className="border border-gray-200 rounded-lg bg-white shadow-md md:p-5 dark:shadow-lg mb-1 w-full text-red-600 text-lg">
          <input
            className="w-full p-2"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name here"
          />
        </div>
        {/* Post Button */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded w-1/8"
          type="submit"
        >
          Post Your Poem
        </button>
      </form>
    </section>
  );
}
