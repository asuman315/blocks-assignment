import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CustomIconComponent from "../CustomIcon.uicomponent";
import { iconSVGs } from "@/public/iconSVGs";

describe("CustomIconComponent", () => {
  const defaultProps = {
    svg: "defaultIcon",
    iconSize: undefined,
    iconColor: undefined,
    classes: "",
    onAction: undefined,
  };

  it("renders without crashing", () => {
    render(<CustomIconComponent {...defaultProps} />);
  });

  it("renders with default props", () => {
    render(<CustomIconComponent {...defaultProps} />);
    const divElement = screen.getByTestId("custom-icon");
    expect(divElement).toHaveClass("ui-w-6 ui-h-6 text-gray-900");
  });

  it("applies custom iconSize, iconColor, and classes", () => {
    const customProps = {
      ...defaultProps,
      iconSize: "ui-w-8 ui-h-8",
      iconColor: "text-red-500",
      classes: "custom-class",
    };
    render(<CustomIconComponent {...customProps} />);
    const divElement = screen.getByTestId("custom-icon");
    expect(divElement).toHaveClass("ui-w-8 ui-h-8 text-red-500 custom-class");
  });

  it("calls onAction when clicked", () => {
    const onActionMock = jest.fn();
    const customProps = {
      ...defaultProps,
      onAction: onActionMock,
    };
    render(<CustomIconComponent {...customProps} />);
    const divElement = screen.getByTestId("custom-icon");
    fireEvent.click(divElement);
    expect(onActionMock).toHaveBeenCalledTimes(1);
  });
});