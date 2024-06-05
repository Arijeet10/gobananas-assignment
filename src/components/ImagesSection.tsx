"use client";

import { useContext, useEffect, useState } from "react";
import GetImages from "./GetImages";
import { ImagesContext } from "@/context/ImageContextProvider";
import ImageCard from "@/components/ImageCard";
import { fetchImagesApi } from "@/utils/request";

const ImagesSection = () => {
  const { images, setImages } = useContext(ImagesContext);
  const [page, setPage] = useState(0);

  const fetchImages = async () => {
    try {
      const pageNo=page + 1
      console.log("PageNO", pageNo);
      const res = await fetchImagesApi({ pageNo });
      setImages(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page > 0) {
      fetchImages();
    }
  }, [page]);

  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <>
      <div className="px-2 py-4">
        {images.length > 0 ? (
          <div className="">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {images.map((item, i) => {
                return <ImageCard key={i} image={item} />;
              })}
            </div>
            <div className="py-4 flex items-center justify-end gap-2">
              <button
                onClick={() => setPage((prev) => prev + 1)}
                className="px-2 py-2 rounded-md font-medium bg-indigo-500 text-[#ffffff] hover:bg-indigo-700"
              >
                Next Images
              </button>
              <button
                onClick={() => {
                  setImages([]);
                  console.log(images);
                  setPage(0);
                }}
                className="px-2 py-2 rounded-md font-medium bg-[#C04000] text-[#ffffff] hover:bg-[#B00000]"
              >
                Remove Images
              </button>
            </div>
          </div>
        ) : (
          <div>
            <GetImages />
          </div>
        )}
      </div>
    </>
  );
};

export default ImagesSection;
