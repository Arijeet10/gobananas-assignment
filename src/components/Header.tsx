"use client";

import { ImagesContext } from "@/context/ImageContextProvider";
import { fetchImagesApi } from "@/utils/request";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const { setImages } = useContext(ImagesContext);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = async () => {
    const searchQuery = searchInput;
    try {
      const res = await fetchImagesApi({ searchQuery });
      setImages(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (searchInput) {
      handleSearch();
    }
  }, [searchInput]);

  return (
    <>
      <header className="px-2 py-2  bg-[#1f1f1f] text-[#e5e5e5] flex items-center justify-between gap-2 sm:gap-0">
        <div className="text-2xl sm:text-lg md:text-xl lg:text-2xl font-bold">
          RandomImages
        </div>
        <div className="flex items-center gap-2">
          <nav className="hidden  text-base sm:text-sm md:text-base lg:text-lg sm:flex items-center gap-2 font-medium">
            <Link
              href="/"
              className="px-2 py-2 rounded-md border border-transparent hover:border-[#1f1f1f]"
            >
              Home
            </Link>
          </nav>
          <div className="p-2 border rounded-md flex items-center">
            <input
              type="text"
              placeholder="search images"
              className="w-full focus:outline-none bg-transparent"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            {searchInput ? <IoClose className="" /> : <IoSearch className="" />}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
