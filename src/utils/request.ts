//API requests

import { ImagesTypes } from "@/types/types";


export const fetchImagesApi = async ({pageNo=1,searchQuery=""}:{pageNo?: number,searchQuery?:string}) => {
  console.log("Search:",searchQuery)
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const response = await res.json();
    if (res.ok) {
      console.log(response);
      const filteredImagesList = response.filter((item: ImagesTypes, i: number) => {
        if (pageNo <= 1 && i < pageNo * 10) {
          return item;
        } else if (i > (pageNo - 1) * 10 && i < pageNo * 10) {
          return item;
        }
      });
      if(searchQuery){
        return filteredImagesList.filter((item:ImagesTypes)=>item.title.includes(searchQuery))
      }else{
        return filteredImagesList;
      }
    } 
  } catch (error) {
    console.log(error);
    return "Unable to get the images"
  }
};
