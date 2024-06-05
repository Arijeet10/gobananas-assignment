"use client";

import { ImagesContext } from "@/context/ImageContextProvider";
import { fetchImagesApi } from "@/utils/request";
import Link from "next/link";
import { useContext, useState } from "react";

const Header = () => {
  const { images, setImages } = useContext(ImagesContext);
  const [pageNo,setPageNo]=useState(1)

  const handleNextImages = async() => {
    setPageNo(prev=>prev+1)
    try {
        console.log("PageNO",pageNo+1)
        const res=await fetchImagesApi(pageNo+1)
        setImages(res)
    } catch (error) {
        console.log(error)
    }
  };

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
          {images.length > 0 && (
            <>
              <button
                onClick={() => handleNextImages()}
                className="px-2 py-2 rounded-md font-medium bg-indigo-500 text-[#ffffff] hover:bg-indigo-700"
              >
                Next Images
              </button>
              <button
                onClick={() => {
                  setImages([]);
                  console.log(images);
                  setPageNo(1);
                }}
                className="px-2 py-2 rounded-md font-medium bg-[#C04000] text-[#ffffff] hover:bg-[#B00000]"
              >
                Remove Images
              </button>
            </>
          )}
        </nav>
        {/* Mobile */}
        {images.length > 0 && (
          <div className="block sm:hidden">
            <button
              onClick={() => setImages([])}
              className="px-2 py-2 rounded-md font-medium text-sm sm:text-base bg-[#C04000] text-[#ffffff] hover:bg-[#B00000]"
            >
              Remove Images
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
