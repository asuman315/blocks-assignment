import React from "react";
import CustomIconComponent from "../ui/CustomIcon.uicomponent";
import { navLinks } from "./navLinks";
import { useRouter } from "next/router";
import { icons, iconsTwo } from "../components.defaults";
import { LinkProps } from "../components.types";

const DesktopHeaderComponent = () => {
  const router = useRouter();

  return (
    <section
      className={`hidden lg:flex flex-col bg-gray-100 fixed right-0 left-0 top-0 z-10`}
      data-testid='desktop-header'
    >
      <div className="bg-black px-12 py-2 flex items-center justify-between ">
        <div className="text-white text-xs flex gap-1 items-center">
          <CustomIconComponent
            svg="saleIcon"
            classes="text-white"
            iconSize="w-4"
          />
          <a className="text-white text-sm" href="#">
            Summer Sales Discount Learn More
          </a>
        </div>
        <div className="text-white text-sm flex gap-3 items-center">
          <a href="#" className="cursor-pointer">My account</a>
          <a href="#" className="cursor-pointer">Checkout</a>
        </div>
      </div>
      <div className="flex items-center justify-between px-12 py-3">
        <h2 className="font-bold text-2xl">MINAMALO</h2>
        <nav className="flex text-xs gap-6 font-semibold">
          {navLinks.map(( link: LinkProps, index: number) => (
              <div className="flex items-center gap-" key={index}>
                <p
                  key={link.name}
                  onClick={() => router.push(`${link.href}`)}
                  className="text-gray-700 hover:text-gray-900 cursor-pointer"

                >
                  {link.name}
                </p>
                {!link.href && (
                  <CustomIconComponent
                    svg="arrowDropDownIcon"
                    classes=""
                    iconSize="w-6"
                    onAction={() => {}}
                  />
                )}
              </div>
            )
          )}
        </nav>
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            {icons.map((icon: string) => {
              return (
                <CustomIconComponent
                  svg={icon}
                  iconColor="text-black"
                  iconSize="w-4"
                  key={icon}
                  onAction={() => {}}
                />
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            {iconsTwo.map((icon) => {
              return (
                <CustomIconComponent
                  svg={icon}
                  iconColor="text-black"
                  iconSize="w-4"
                  key={icon}
                  onAction={() => {}}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopHeaderComponent;
