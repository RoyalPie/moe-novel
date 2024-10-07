import { Heading } from "./heading";
import { Img } from "./image";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export default function Footer({ className = "", ...props }: Props) {
  return (
    <footer
      {...props}
      className={`${className} flex justify-center items-end mt-[60px] py-[50px] md:py-5 bg-gray-200_7f shadow-bs13`}
    >
      <div className="container-xs mt-9 flex justify-end pl-14 pr-52 md:px-5">
        <div className="w-[66%] flex items-center justify-between gap-5 md:w-full md:flex-col">
          <div className="w-[64%] flex flex-col items-start gap-2 md:w-full">
            <div className="w-[84%] flex flex-col gap-2.5 md:w-full">
              <div className="ml-[30px] flex flex-wrap justify-between gap-5 md:ml-0">
                <Link href="#" className="md:text-[22px] italic">
                  <Heading
                    size="heading4x1"
                    as="h4"
                    className="text-[24px] font-extrabold text-black-900"
                  >
                    Tất cả
                  </Heading>
                </Link>
                <Heading
                  size="heading7x1"
                  as="h1"
                  className="sm:text-[32px] md:text-[34px] text-[36px] font-extrabold italic text-gray-900_02"
                >
                  Moe novel
                </Heading>
              </div>
              <div className="w-[90%] flex items-start justify-between gap-5 md:w-full">
                <ul className="w-[6%] flex flex-col items-end gap-2 self-end">
                  <li>
                    <Link href="#" className="md:text-[22px] italic">
                      <Heading
                        size="heading4x1"
                        as="h4"
                        className="text-[24px] font-extrabold text-black-900"
                      >
                        Tìm kiếm
                      </Heading>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="md:text-[22px] italic">
                      <Heading
                        size="heading4x1"
                        as="h4"
                        className="text-[24px] font-extrabold text-black-900"
                      >
                        Viết truyện
                      </Heading>
                    </Link>
                  </li>
                </ul>
                <ul className="w-[68%] flex flex-col items-start gap-2">
                  <li>
                    <Link href="#" className="md:text-[22px] italic">
                      <Heading
                        size="heading4x1"
                        as="h4"
                        className="text-[24px] font-extrabold text-black-900"
                      >
                        Đăng nhập
                      </Heading>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="md:text-[22px] italic">
                      <Heading
                        size="heading4x1"
                        as="h4"
                        className="text-[24px] font-extrabold text-black-900"
                      >
                        Đăng ký
                      </Heading>
                    </Link>
                  </li>
                </ul>
              </div>
              <ul className="!ml-5 flex flex-col items-start gap-2 md:ml-0">
                <li>
                  <Link href="#" className="md:text-[22px] italic">
                    <Heading
                      size="heading4x1"
                      as="h4"
                      className="text-[24px] font-extrabold text-black-900"
                    >
                      Bộ lọc
                    </Heading>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="md:text-[22px] italic">
                    <Heading
                      size="heading4x1"
                      as="h4"
                      className="text-[24px] font-extrabold text-black-900"
                    >
                      Nạp xu
                    </Heading>
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col items-start gap-2">
                <Heading
                  size="heading4x1"
                  as="h4"
                  className="md:text-[22px] text-[24px] font-extrabold italic text-black-900"
                >
                  Kết nối với chúng tôi
                </Heading>
                <ul className="!ml-2 flex flex-col items-start gap-2 md:ml-0">
                  <li>
                    <Link href="#">
                      <div className="flex items-center gap-3.5">
                        <Img
                          src="img_mdi_youtube.svg"
                          width={30}
                          height={30}
                          alt="Mdiyoutube"
                          className="w-[30px] h-[30px]"
                        />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <div className="flex items-center gap-4">
                        <Img
                          src="img_simple_icons_x.svg"
                          width={22}
                          height={22}
                          alt="Simpleiconsx"
                          className="w-[22px] h-[22px]"
                        />
                        <Heading
                          size="heading4x1"
                          as="h4"
                          className="md:text-[22px] text-[24px] font-extrabold italic text-black-900"
                        >
                          X
                        </Heading>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <div className="flex items-center gap-3.5">
                        <Img
                          src="img_ic_baseline_tiktok.svg"
                          width={30}
                          height={30}
                          alt="Icbaseline"
                          className="w-[30px] h-[30px]"
                        />
                        <Heading
                          size="heading4x1"
                          as="h4"
                          className="md:text-[22px] text-[24px] font-extrabold italic text-black-900"
                        >
                          Tiktok
                        </Heading>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
