import { FC } from "react";
import { ButtonProps, buttonClasses } from "./types";

const Button: FC<ButtonProps> = ({
  children,
  className,
  intent,
  size,
  ...props
}) => {
  return (
    <button className={buttonClasses({ intent, size, className })} {...props}>
      {children}
    </button>
  );
};

export default Button;
