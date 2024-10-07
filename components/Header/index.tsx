import { Img } from "../../components/Img"; 
import { Heading } from "../../components/Heading";
import Link from "next/link";
import React from "react";

interface Props {
    className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-end py-1.5 bg-gray-200_4c shadow-xs`}
    >
      <div className="container-sm mt-2 flex items-center justify-between gap-5 md:flex-col md:px-5">
        <Heading size="heading9x1" as="h1" className="text-[48px] font-extrabold italic text-gray-900_02 md:text-[44px] sm:text-[38px]">
          Moe novel
        </Heading>
        <div className="mb-1 flex w-[76%] items-center justify-between gap-5 self-end md:w-full md:self-auto sm:flex-col">
          <div className="flex self-end sm:self-auto">
            <ul className="flex flex-wrap gap-[26px]">
              <li>
                <Link href="#" className="italic md:text-[22px]">
                  <Heading size="heading4x1" as="h4" className="text-[24px] font-extrabold text-gray-900_05">
                    Thể loại
                  </Heading>
                </Link>
              </li>
              <li>
                <Link href="#" className="italic md:text-[22px]">
                  <Heading size="heading4x1" as="h4" className="text-[24px] font-extrabold text-gray-900_05">
                    Viết truyện
                  </Heading>
                </Link>
              </li>
              <li>
                <link href="#" className="italic md:text-[22px]">
                  <Heading size="heading4x1" as="h4" className="text-[24px] font-extrabold text-gray-900_05">
                    Tin tức
                  </Heading>
                </link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-3.5">
            <Link href="#">
              <Img src="" width={44} height={44} alt="Mdicrown" className="h-[44px] w-[44px] self-end" />
            </Link>
            <Link href="#">
              <Img src="" width={42} height={42} alt="Mdicrown" className="h-[42px] w-[42px]" />
            </Link>
            <Img
              src=""
              width={50}
              height={48}
              alt="Image"
              className="h-[48px] w-[36%] rounded-[24px] object-contain" 
            />
          </div>
        </div>
      </div>
    </header>
  );
}