"use client";

import { ReactNode, SetStateAction, createContext, useState } from "react";

export interface ImagesTypes{
    albumId: number;
    id: number;
    title:string;
    url: string;
    thumbnailUrl: string;
}

interface ImagesContextProps{
    images:ImagesTypes[];
    setImages:React.Dispatch<SetStateAction<ImagesTypes[]>>;
}



export const ImagesContext=createContext<ImagesContextProps>({
    images:[{
        albumId: 1,
        id: 1,
        title: "",
        url: "",
        thumbnailUrl: ""
    }],
    setImages:()=>{}
})

const ImagesContextProvider=({children}:{children:ReactNode})=>{

    const [images,setImages]=useState<ImagesTypes[]>([])
    
    return(
        <ImagesContext.Provider value={{images,setImages}}>
            {children}
        </ImagesContext.Provider>
    )
}

export default ImagesContextProvider;