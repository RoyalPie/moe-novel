"use client";
import { Button } from "../ui/button"
import { Img } from "../ui/image"
import { Slider } from "../ui/slider"
import React from "react";
import AliceCarousel, { EventObject } from "react-alice-carousel";

export default function HomeMainSlider() {
  const [sliderState2, setSliderState2] = React.useState(0);
  const sliderRef2 = React.useRef<AliceCarousel>(null);

  return (
    <div className="flex justify-center px-8 sm:px-5">
      <div className="gap-[22px] w-[96%] flex flex-col items-center md:w-full">
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
                  <Img
                    src="img_frame_15.png"
                    width={1300}
                    height={614}
                    alt="Image"
                    className="rounded-[28px] h-[614px] object-cover"
                  />
                </React.Fragment>
              ))}
            />
          </div>
          <Button size="xs" shape="square" className="rotate-[90deg] w-[24px] px-0.5">
            <Img src="img_bxs_up_arrow.svg" width={14} height={20} />
          </Button>
        </div>
        <div className="container-xs px-[22px] flex flex-col items-start md:px-5">
          <div className="flex items-center justify-center" />
        </div>
      </div>
    </div>
  );
}
