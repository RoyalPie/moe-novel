import { Img } from "../ui/image";
import { Heading } from "../ui/heading";
import UserProfileHeader from "../ui/user-profile";
import React, { Suspense } from "react";

const data2 = [{ headerText: "1" }, { headerText: "2" }, { headerText: "3" }];

export default function Recommend() {
  return (
    <div className="mt-[58px] flex flex-col items-center">
      <div className="container-xs gap-[38px] flex flex-col md:px-5">
        <div>
          <div className="mb-1 flex items-center gap-4 self-start">
            <Heading
              size="heading4x1"
              as="h2"
              className="md:text-[22px] text-[24px] self-end font-extrabold italic text-gray-900_02"
            >
              Truyện đề cử
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

        <div className="mr-[34px] ml-[82px] flex gap-24 md:mx-0 md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data2.map((d, index) => (
              <UserProfileHeader {...d} key={"listgroupninety2" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
