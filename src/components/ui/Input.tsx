"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

const Input = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your search submission logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-grayicon h-4 w-4" />
      <input
        type="text"
        placeholder="Search news"
        className="h-10 pl-10 sm:h-[50px] text-grayicon rounded-xl focus:outline-none w-full"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button
        type="submit"
        className="absolute hidden sm:block right-2 bg-redprimary h-9 font-bold text-white uppercase top-1/2 -translate-y-1/2 px-4 py-1 rounded-md hover:bg-redPrimary/90 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default Input;
