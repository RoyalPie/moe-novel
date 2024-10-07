import { Img } from "../../components/Img"; 
import { Heading } from "../../components/Heading";
import Footer from "../../components/Footer";
import Home1ColumnOne from "./Home1ColumnOne";
import Home1Columnrectangle from "./Home1Columnrectangle"; 
import Home1Columntcphmhon from "./Home1Columntcphmhon"; 
import Home1RowOne from "./Home1RowOne";
import Home1RowTwo from "./Home1RowTwo"; 
import Link from "next/link";
import React from "react";

export default function Home1Page() {
  return (
    <div className="w-full bg-gradient">
      <header className="flex items-end justify-center bg-gray-200_4c py-1.5 shadow-xs">
        <div className="container-sm mt-2 flex items-center justify-between gap-5 md:flex-col md:px-5">
          <Img
            src="img_header_logo.png"
            width={246}
            height={66}
            alt="Headerlogo"
            className="h-[66px] w-[246px] object-contain"
          />
          <div className="flex w-[76%] items-center justify-between gap-5 self-end md:w-full md:self-auto sm:flex-col">
            <ul className="flex flex-wrap gap-[26px] self-end sm:self-auto">
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
                <Link href="#" className="italic md:text-[22px]">
                  <Heading size="heading4x1" as="h4" className="text-[24px] font-extrabold text-gray-900_05">
                    Tin tức
                  </Heading>
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-3.5">
              <Link href="#">
                <Img
                  src="img_mdi_crown.svg"
                  width={44}
                  height={44}
                  alt="Mdicrown"
                  className="h-[44px] w-[44px]"
                />
              </Link>
              <Link href="#">
                <Img
                  src="img_search_gray_900_01.svg"
                  width={42}
                  height={42}
                  alt="Search"
                  className="h-[42px] w-[42px]"
                />
              </Link>
              <Img
                src="img_iconamoon_profile_circle_fill.svg"
                width={50}
                height={50}
                alt="Iconamoon"
                className="h-[50px] w-[50px]"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="mt-[22px]">
        <Home1RowOne />
        <Home1RowTwo />
        <Home1ColumnOne />
        <Home1Columnrectangle />
        <Home1Columntcphmhon />
      </div>
      <Footer className="mt-[60px]" />
    </div>
  );
}