"use client";

import React, { useState } from "react";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const Input = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable the button
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-grayicon h-4 w-4" />
      <input
        type="text"
        required
        placeholder="Search news"
        className="h-10 pl-10 sm:h-[50px] text-black rounded-xl focus:outline-none w-full"
        value={searchTerm}
        onChange={handleSearch}
        aria-label="Search news"
      />
      <button
        type="submit"
        className="absolute hidden sm:block right-2 bg-redprimary h-9 font-bold text-white uppercase top-1/2 -translate-y-1/2 px-4 py-1 rounded-md hover:bg-redPrimary/90 transition-colors"
        disabled={isSubmitting}
        aria-label="Submit search"
      >
        Search
      </button>
    </form>
  );
};

export default Input;
