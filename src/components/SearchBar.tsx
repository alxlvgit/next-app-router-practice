"use client";

import { useState } from "react";
import Image from "next/image";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(query);
  };

  const handleClear = () => {
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="w-full border border-neutral-500 rounded-lg px-6 py-4 flex justify-center gap-4">
        <Image src={"/search.svg"} alt={"search"} width={16} height={16} />
        <input
          type="text"
          placeholder="Search"
          name="query"
          className="bg-transparent flex-1 border-none outline-none"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Image
          src={"/clear.svg"}
          alt={"clear"}
          width={16}
          height={16}
          onClick={() => handleClear()}
          className="hover:cursor-pointer"
        />
      </label>
    </form>
  );
};

export default SearchBar;
