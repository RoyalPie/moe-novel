import { Img } from "../ui/image";
import { Heading } from "../ui/heading";
import React, { Suspense } from "react";

export default function NewNovel() {
  return (
    <div className="sm:gap-[29px] gap-[58px] mt-[58px] flex flex-col items-center">
      <div className="container-xs md:px-5">
        <div>
          <div className="gap-[30px] mb-1 flex items-center self-start">
            <Heading
              size="heading4x1"
              as="h2"
              className="md:text-[22px] text-[24px] self-end font-extrabold italic text-gray-900_02"
            >
              Tác phẩm mới
            </Heading>
            <Img
              src="img_favorite.svg"
              width={42}
              height={40}
              alt="Favorite"
              className="h-[40px]"
            />
          </div>
        </div>
      </div>

      <div className="gap-[22px] w-[90%] flex md:w-full md:flex-col md:px-5">
        <Suspense fallback={<div>Loading feed...</div>}>
          {[...Array(4)].map((_, index) => (
            <Img
              key={"listrectangle2" + index}
              src="img_rectangle_51_408x308.png"
              width={308}
              height={408}
              alt="Rectangle"
              className="rounded-[24px] w-[24%] h-[408px] object-contain md:w-full"
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
