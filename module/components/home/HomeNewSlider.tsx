"use client";
import { Button } from "../ui/button"
import { Img } from "../ui/image"
import { Slider } from "../ui/slider"
import { Heading } from "../ui/heading"
import React from "react";
import AliceCarousel, { EventObject } from "react-alice-carousel";

export default function HomeNewSlider() {
  const [sliderState2, setSliderState2] = React.useState(0);
  const sliderRef2 = React.useRef<AliceCarousel>(null);

  return (
    <div className="mt-[26px] flex justify-center px-8 sm:px-5">
      <div className="gap-[29px] w-[96%] flex flex-col items-center md:w-full">
        <div className="container-xs md:px-5">
          <div className="gap-[23px] flex items-center">
            <Heading
              size="heading4x1"
              as="h1"
              className="md:text-[22px] text-[24px] mb-1 self-end font-extrabold italic text-gray-900_02"
            >
              Truyện mới cập nhật
            </Heading>
            <Img
              src="img_entypo_new.svg"
              width={50}
              height={48}
              alt="Entyponew"
              className="w-[4%] h-[48px] object-contain"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 self-stretch md:flex-col">
          <div className="mx-auto flex w-full md:self-stretch">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{
                "0": { items: 1 },
                "551": { items: 1 },
                "1051": { items: 1 },
              }}
              disableDotsControls
              activeIndex={sliderState2}
              onSlideChanged={(e: EventObject) => {
                setSliderState2(e?.item);
              }}
              ref={sliderRef2}
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="gap-[22px] flex md:flex-col">
                    <div className="bg-[url(/images/img_frame_16.png)] h-[408px] flex-1 bg-cover bg-no-repeat md:h-auto md:self-stretch">
                      <Img
                        src="img_rectangle_51.png"
                        width={308}
                        height={408}
                        alt="Image"
                        className="rounded-[24px] h-[408px] w-full object-cover md:h-auto"
                      />
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
          <Button
            size="xs"
            shape="square"
            onClick={() => {
              sliderRef2?.current?.slideNext();
            }}
            className="rotate-[90deg] mb-[180px] w-[24px] self-end px-0.5 md:self-auto"
          >
            <Img src="img_bxs_up_arrow.svg" width={14} height={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
