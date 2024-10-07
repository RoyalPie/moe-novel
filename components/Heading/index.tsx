import React from "react";

const sizes = {
  body_01: "font-mulish text-[14px] font-semibold",
  textxs: "text-[14px] font-medium",
  texts: "text-[15px] font-medium",
  textmd: "text-[16px] font-medium",
  headingxs: "text-[7px] font-extrabold italic",
  headings: "text-[12px] font-extrabold italic",
  headingmd: "text-[13px] font-extrabold italic",
  headinglg: "text-[14px] font-extrabold italic",
  headingxl: "text-[15px] font-extrabold italic",
  heading2x1: "text-[16px] font-extrabold italic",
  heading3x1: "text-[20px] font-extrabold italic",
  heading4x1: "text-[24px] font-extrabold italic md:text-[22px]",
  heading5x1: "text-[27px] font-extrabold italic md:text-[25px] sm:text-[23px]",
  heading6x1: "text-[32px] font-extrabold italic md:text-[30px] sm:text-[28px]",
  heading7x1: "text-[36px] font-extrabold italic md:text-[34px] sm:text-[32px]",
  heading8x1: "text-[40px] font-extrabold italic md:text-[38px] sm:text-[36px]",
  heading9x1: "text-[48px] font-extrabold italic md:text-[44px] sm:text-[38px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: React.ElementType;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "heading3x1",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-black-900 font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };