import React from "react";

const sizes = {
  small: "text-xs",
  medium: "text-base",
  large: "text-lg",
};

export type TextProps = Partial<{
  className: string;
  as: React.ElementType;  
  size: keyof typeof sizes; 
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>, 
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "medium", 
  ...restProps
}) => {
  const Component = as || "p";  
  return (
    <Component className={`${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };