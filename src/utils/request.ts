//API requests

import { ImagesTypes } from "@/context/ImageContextProvider";

export const fetchImagesApi = async (pageNo: number=1) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const response = await res.json();
    if (res.ok) {
      console.log(response);
      const filteredImagesList = response.filter((item: ImagesTypes, i: number) => {
        if (pageNo == 1 && i < pageNo * 10) {
          return item;
        } else if (i > (pageNo - 1) * 10 && i < pageNo * 10) {
          return item;
        }
      });
      return filteredImagesList;
    } 
  } catch (error) {
    console.log(error);
    return "Unable to get the images"
  }
};
