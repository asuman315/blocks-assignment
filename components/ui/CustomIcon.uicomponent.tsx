import React, { FC } from "react";
import { iconSVGs } from "@/public/iconSVGs";
import { CustomIconComponentProps } from "../components.types";

const CustomIconComponent: FC<CustomIconComponentProps> = (props) => {
  const { svg, iconSize, iconColor, classes, onAction } = props;
  return (
    <div
      className={`${iconSize ?? "ui-w-6 ui-h-6"} ${
        iconColor ?? "text-gray-900"
      } ${onAction && "cursor-pointer"} ${classes}`}
      onClick={onAction}
      data-testid="custom-icon"
    >
      {iconSVGs[svg]}
    </div>
  );
};

export default CustomIconComponent;
