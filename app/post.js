import React, { useState } from "react";

export default function PostPoem({ onAddPoem, onPoemAdded }) {
  const [poem, setPoem] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  // Function to handle submission of the poem
  function handleSubmit(event) {
    event.preventDefault();
    if (!title || !poem || !name) {
      setError("Missing a field, please check");
      return;
    }
    setError("");
    const newID = Math.floor(Math.random() * 1000000);
    const postPoem = { id: newID, poem, title, name };
    onAddPoem(postPoem);
    setPoem("");
    setTitle("");
    setName("");
  }

  return (
    <section className="flex flex-col items-left ">
      <div className="md:px-1 flex justify-center ">
        <div className="md:px-1 mb-1 text-md md:underline ">
          <h1 className="font-bold tracking-tighter lg:text-1xl text-cyan-900">
            post poems
          </h1>
        </div>
      </div>
      {/* Area to write user poem begins */}
      <form onSubmit={handleSubmit} className="">
        {/*Area to enter poem title */}
        <div className="border border-gray-200 rounded-lg bg-white shadow-md md:p-5 dark:shadow-lg mb-1 w-full text-red-600 text-lg">
          <input
            type="text"
            id="title"
            className="w-full p-2 text-placeholder"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your poem's title"
          />
        </div>
        {/*Area to write poem */}
        <div className="border border-gray-200 rounded-lg bg-white shadow-md md:p-5 dark:shadow-lg mb-1 w-full text-red-600 text-lg">
          <textarea
            id="poem"
            className="w-full h-24 p-2 text-placeholder"
            value={poem}
            onChange={(e) => setPoem(e.target.value)}
            placeholder="Write your poem"
          />
        </div>

        {/* Area to enter user name */}
        <div
          className="border border-gray-200 rounded-lg bg-white shadow-md md:p-5 dark:shadow-lg mb-1 w-full
         text-red-600 text-lg"
        >
          <input
            className="w-full p-2 text-placeholder"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {/* Post Button */}
        <button
          className=" text-black font-bold py-3 px-10 rounded w-full "
          type="submit"
          style={{ backgroundColor: "#eb9486" }}
        >
          submit
        </button>
      </form>
    </section>
  );
}
