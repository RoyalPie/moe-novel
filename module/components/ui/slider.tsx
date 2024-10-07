import React from "react";
import AliceCarousel, { Props as AliceCarouselProps } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

type SliderComponentProps = AliceCarouselProps & {
  items?: React.ReactElement[];
  centerMode?: boolean;
  magnifiedIndex?: number;
  activeSlideCSS?: string;
};

const Slider = React.forwardRef<AliceCarousel, Omit<SliderComponentProps, "ref">>(
  ({ items = [], activeIndex = 0, centerMode = false, magnifiedIndex = 0, activeSlideCSS = "", ...props }, ref) => {
    const isSmall = (index: number): boolean => {
      if (activeIndex + magnifiedIndex >= items.length) {
        return index !== activeIndex + magnifiedIndex - items.length;
      } else {
        return index !== activeIndex + magnifiedIndex;
      }
    };

    const slideItems = centerMode
      ? items.map((child, index) => {
          if (isSmall(index)) {
            return React.cloneElement(child, {
              ...child.props,
              className: [child.props?.className, activeSlideCSS].filter(Boolean).join(" "),
            });
          }
          return React.cloneElement(child);
        })
      : items;

    return (
      <AliceCarousel
        items={slideItems}
        ref={ref}
        touchTracking
        mouseTracking
        infinite
        disableButtonsControls
        {...props}
      />
    );
  }
);

Slider.displayName = "Slider";

export { Slider };
