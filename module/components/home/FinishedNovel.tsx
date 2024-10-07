import { Button } from "../ui/button"
import { Img } from "../ui/image"
import { Heading } from "../ui/heading";
import React, { Suspense } from "react";

export default function FinishedNovel() {
  return (
    <div className="sm:gap-[30px] gap-[60px] mt-[58px] flex flex-col items-center">
      <div className="flex items-center gap-6">
        <Heading
          size="heading4x1"
          as="h2"
          className="md:text-[22px] text-[24px] mb-1.5 self-end font-extrabold italic text-gray-900_02"
        >
          Tác phẩm đã hoàn thành
        </Heading>
        <Img
          src="img_settings.svg"
          width={52}
          height={50}
          alt="Settings"
          className="w-[4%] h-[50px] object-contain"
        />
      </div>

      <div className="gap-[22px] w-[90%] flex md:w-full md:flex-col md:px-5">
        <Suspense fallback={<div>Loading feed...</div>}>
          {[...Array(4)].map((_, index) => (
            <Img
              key={"list2" + index}
              src="img_rectangle_51_1.png"
              width={308}
              height={408}
              alt="Rectangle"
              className="rounded-[24px] w-[24%] h-[408px] object-contain md:w-full"
            />
          ))}
        </Suspense>
      </div>

      <div className="container-xs pr-[526px] flex flex-col items-end pl-14 md:px-5">
        <Button
          color="orange_200"
          className="rounded-[24px] min-w-[184px] px-[34px] font-extrabold italic sm:px-5"
        >
          Xem thêm
        </Button>
      </div>
    </div>
  );
}
