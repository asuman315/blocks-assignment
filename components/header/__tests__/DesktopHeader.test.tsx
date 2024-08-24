import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DesktopHeaderComponent from "../DesktopHeader.component";
import { useRouter } from "next/router";
import { LinkProps } from "@/components/components.types";
import { navLinks } from "../navLinks";
import { icons, iconsTwo } from "@/components/components.defaults";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("DesktopHeaderComponent", () => {
  const mockPush = jest.fn();
  (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

  test("renders correctly", () => {
    render(<DesktopHeaderComponent />);
    expect(
      screen.getByText("Summer Sales Discount Learn More")
    ).toBeInTheDocument();
    expect(screen.getByText("My account")).toBeInTheDocument();
    expect(screen.getByText("Checkout")).toBeInTheDocument();
    expect(screen.getByText("MINAMALO")).toBeInTheDocument();
  });

  test("renders navigation links correctly", () => {
    render(<DesktopHeaderComponent />);
    navLinks.forEach((link) => {
      const navLink = screen.getByText(link.name);
      expect(navLink).toBeInTheDocument();
      fireEvent.click(navLink);
      if (link.href) {
        expect(mockPush).toHaveBeenCalledWith(link.href);
      }
    });
  });

  test("renders icons correctly", () => {
    render(<DesktopHeaderComponent />);
    icons.forEach((icon: string) => {
      expect(screen.getByTestId(`icon-${icon}`)).toBeInTheDocument();
    });
    iconsTwo.forEach((icon: string) => {
      expect(screen.getByTestId(`icon-${icon}`)).toBeInTheDocument();
    });
  });

  test('conditionally renders arrowDropDownIcon', () => {
    render(<DesktopHeaderComponent />);
    navLinks.forEach((link) => {
      if (!link.href) {
        const arrowIcons = screen.getAllByTestId('icon-arrowDropDownIcon');
        expect(arrowIcons.length).toBeGreaterThan(0);
      }
    });
  });
});
