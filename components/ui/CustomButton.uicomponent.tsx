import React, { FC } from "react";
import { CustomButtonComponentProps } from "../components.types";
import { iconSVGs } from "@/public/iconSVGs";

const CustomButton: FC<CustomButtonComponentProps> = (props) => {
  return (
    <button
      className={`${props.textColor} ${
        props.bgColor ?? "bg-transparent"
      } hover:${props.hoverBgColor} hover:${props.hoverTextColor} ${
        props.paddingX
      } ${props.paddingY} ${props.textSize} ${
        props.rounded ?? "rounded-md"
      }  ${props.border} ${props.fontWeight} transition-all duration-300`}
      onClick={props?.onClick}
    >
      {props.label}
    </button>
  );
};

export default CustomButton;
