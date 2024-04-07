"use client";

export default function PotentialPoem() {
  return (
    <section>
      <div className="bg-orange-400  w-6/12 text-center">
        Potential Poems (user posted poems firebase)
      </div>
      {/* Dropdown div Begins */}
      <div className="flex flex-row items-center w-11/12">
        {/* Dropdown for Author */}
        <div className="relative mr-2 ">
          <select
            className="block appearance-none bg-cyan-400 border border-gray-300 text-white py-3 
                    px-20 pr-20 rounded leading-tight focus:border-gray-500 w-66"
          >
            <option>Shakespeare</option>
            <option>Poetry Guy</option>
            {/* TODO: API to retrieve all authors in db */}
          </select>
        </div>

        {/* Dropdown for Title */}
        <div className="relative mr-2">
          <select
            className="block appearance-none bg-cyan-400 border border-gray-300 text-white py-3 
                  px-20 pr-20 rounded leading-tight focus:border-gray-500 w-96"
          >
            <option>Ko's Poem</option>
            <option>A Short Title Made Even Extra Longer Right Here</option>
            {/* TODO: API to retrieve all titles in db */}
          </select>
        </div>

        {/* Search Button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded ">
          Show
        </button>
      </div>
      {/* Boxed area for API data */}
      <div
        className="border border-gray-200 rounded-lg bg-white shadow-md md:p-5
              dark:shadow-lg mb-5 w-full text-blue-600  text-lg"
      >
        <p>User poem here</p>
        <p>And Here</p>
        <p> retrieved from firebase</p>
      </div>
    </section>
  );
}
