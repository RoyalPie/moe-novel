import React from "react";

const shapes = {
    square: "rounded-[0px]",
    round: "rounded-[10px]",
} as const;

const variants = {
    fill: {
      white_A700: "bg-white-a700 text-black-900",
      indigo_A100: "bg-indigo-a100 text-white-a700",
      gray_900_06: "bg-gray-900_06 text-white-a700",
      indigo_A100_a: "bg-indigo-a100 text-blue-a700",
      blue_800: "bg-blue-800 text-gray-50",
      gray_50: "bg-gray-50 text-gray-900_7f",
      gray_300: "bg-gray-300 text-black-900",
      gray_900_01: "bg-gray-900_01 text-gray-800_01",
      blue_gray_900: "bg-blue-gray-900 text-white-a700",
      blue_gray_900_05: "bg-blue-gray-900 text-blue-gray-900",
      orange_200: "bg-orange-200 text-white-a700",
  },
  outline: {
    deep_purple_100_indigo_A700: "border-2 border-solid deep_purple_100_indigo_A700_border text-white-a700",
  },
} as const;

const sizes = {
  xxl: "h-[36px] px-[5] text-[20px]",
  xl: "h-[32px] px-[34px] text-[20px]",
  "2xl": "h-[38px] px-[32px] text-[15px]",
  sm: "h-[39px] px-1.5 text-[12px]",
  "5xl": "h-[58px] px-[34px] text-[14px]",
  xs: "h-[24px] px-0.5",
  "7xl": "h-[60px] px-3 text-[20px]",
  "6xl": "h-[48px] px-[24px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size,
  color = "",
  onClick,
  ...restProps
}) => {
  return (
    <button
      className={`${className || ''} flex flex-row items-center justify-center text-center cursor-pointer whitespace-normal ${shape ? shapes[shape] : ''} ${size ? sizes[size] : ''} ${variant ? variants[variant]?.[color as keyof (typeof variants)[typeof variant]] : ''}`}
      {...restProps}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export { Button }