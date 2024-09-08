import React from "react";

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchQuery = formData.get("search");
    onSearch(searchQuery);
    console.log(searchQuery);
    formData.set("search", "");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-center mt-8"
    >
      <input
        type="text"
        name="search"
        placeholder="Search videos..."
        className="border border-gray-300 rounded-l py-2 px-4 w-64 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-r py-2 px-4 ml-2 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
