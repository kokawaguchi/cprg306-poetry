"use client";

export default function PostPoems() {
  return (
    <section className="flex flex-col items-left">
      <div className="bg-orange-400 w-6/12 text-center">
        Post Poem (user posts to firebase)
      </div>
      {/* Area to write user poem begins */}
      <div
        className="border border-gray-200 rounded-lg bg-white shadow-md md:p-5
                dark:shadow-lg mb-1 w-full text-red-600  text-lg"
      >
        <p>Write poem here</p>
        <p>And Here</p>
      </div>
      {/* Area to enter user name */}
      <div
        className="border border-gray-200 rounded-lg bg-white shadow-md md:p-1
                dark:shadow-lg  w-full text-green-500  text-lg mb-3"
      >
        <p>User Name Here</p>
      </div>
      {/* Post Button */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded w-1/8">
        Post Your Poem
      </button>
    </section>
  );
}
