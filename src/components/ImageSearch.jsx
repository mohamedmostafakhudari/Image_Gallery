import React, { useState } from "react";
// [ 4 ] Search Component
export default function ImageSearch({ searchText }) {
  const [text, setText] = useState("");
  // [ 5 ] Search Functionality
  const onSubmit = (e) => {
    e.preventDefault();

    searchText(text);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} action="" className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            placeholder="Search Image Term..."
          />
          <button
            className="flex-shrink-0 bg-teal-500 text-sm border-4 text-white py-1 px-2 rounded hover:bg-teal-700"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
