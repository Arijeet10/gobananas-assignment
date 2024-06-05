"use client";

import { ImagesContext } from "@/context/ImageContextProvider";
import { fetchImagesApi } from "@/utils/request";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";


const Header = () => {


  const { setImages } = useContext(ImagesContext);
  const [searchInput,setSearchInput]=useState("");

  const handleSearch = async() => {
    const searchQuery=searchInput
    try {
      const res=await fetchImagesApi({searchQuery})
      setImages(res)
    } catch (error) {
        console.log(error)
    }
  };

  useEffect(() => {
    if(searchInput){
      handleSearch()
    }
  }, [searchInput])
  

  return (
    <>
      <header className="px-2 py-2  border-b border-[#1f1f1f] text-[#1f1f1f] flex items-center justify-between">
        <div className="text-2xl sm:text-lg md:text-xl lg:text-2xl font-bold">
          RandomImages
        </div>
        {/* Desktop */}
        <nav className="hidden  text-base sm:text-sm md:text-base lg:text-lg sm:flex items-center gap-2 font-medium">
          <Link
            href="/"
            className="px-2 py-2 rounded-md border border-transparent hover:border-[#1f1f1f]"
          >
            Home
          </Link>
        </nav>
        <div>
          <div className="p-2 border flex items-center">
            <input 
              type="text"
              placeholder="search images"
              className="w-full focus:outline-none bg-transparent"
              value={searchInput}
              onChange={(e)=>setSearchInput(e.target.value)}
            />
            <IoSearch className="" />
          </div>
        </div>
        {/* Mobile */}
        {/* {images.length > 0 && (
          <div className="block sm:hidden">
            <button
              onClick={() => setImages([])}
              className="px-2 py-2 rounded-md font-medium text-sm sm:text-base bg-[#C04000] text-[#ffffff] hover:bg-[#B00000]"
            >
              Remove Images
            </button>
          </div>
        )} */}
      </header>
    </>
  );
};

export default Header;
