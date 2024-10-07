import { Img } from "../../module/components/ui/image"; 
import { Heading } from "../../module/components/ui/heading";
import Footer from "../../module/components/ui/footer";
import Link from "next/link";
import React from "react";

export default function HomeLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
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
        {children}
      </div>
      <Footer className="mt-[60px]" />
    </div>
  );
}
