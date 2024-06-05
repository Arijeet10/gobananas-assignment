"use client";

import { useContext, useEffect } from "react";
import GetImages from "./GetImages";
import { ImagesContext } from "@/context/ImageContextProvider";
import Image from "next/image";

const ImagesSection = () => {


  const { images } = useContext(ImagesContext);

  useEffect(() => {
    console.log(images)
  }, [images])
  

  return (
    <>
      <div className="px-2 py-4">
        {images.length >0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {images.map((item, i) => {
              return (
                <div key={i} className="rounded-md">
                  <Image
                    src={item.url}
                    alt=""
                    width={500}
                    height={500}
                    className="w-full h-full rounded-md"
                  />
                </div>
              );
            })}
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
