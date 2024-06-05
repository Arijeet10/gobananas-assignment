"use client";

import { ImagesContext } from "@/context/ImageContextProvider";
import { fetchImagesApi } from "@/utils/request";
import { useContext, useState } from "react";

const GetImages = () => {


  const [error, setError] = useState(
    ""
  );

  const {setImages}=useContext(ImagesContext)

  const handleGetImages = async () => {
    try {
      const res = await fetchImagesApi({})
    //   console.log(res)
      setImages(res)
    } catch (error) {
      console.log(error);
      setError("Unable to get the images");
    }
  };

  return (
    <>
      <div className="w-full h-[80vh] flex items-center justify-center">
        <div className="max-w-[50vw]">
          <div className="flex items-center justify-center">
            <button
              onClick={() => handleGetImages()}
              className="px-2 py-2 rounded-md bg-indigo-500 text-[#ffffff] hover:bg-indigo-700"
            >
              Get Images
            </button>
          </div>
          {error && (
            <div className="py-2 text-red-700 font-bold text-sm">{error}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default GetImages;
