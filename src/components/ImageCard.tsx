import { ImagesTypes } from "@/types/types";
import Image from "next/image";

const ImageCard = ({ image }: { image: ImagesTypes}) => {
  return (
    <>
      <div className="rounded-md">
        <Image
          src={image.url}
          alt=""
          width={500}
          height={500}
          className="w-full h-full rounded-md"
        />
      </div>
    </>
  );
};

export default ImageCard;
