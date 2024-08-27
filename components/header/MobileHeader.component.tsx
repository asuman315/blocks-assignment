import React from "react";
import CustomIconComponent from "../ui/CustomIcon.uicomponent";
import { icons, iconsTwo } from "../components.defaults";

const MobileHeaderComponent = () => {
  return (
    <section
      className={`lg:hidden flex-col bg-gray-100 fixed right-0 left-0 top-0 z-10`}
      data-testid='mobile-header'
    >
      <div className="bg-black px-3 md:px-12 py-2 flex items-center justify-between ">
        <div className="text-white text-xs flex gap-1 items-center">
          <CustomIconComponent
            svg="saleIcon"
            classes="text-white"
            iconSize="w-4"
          />
          <a className="text-white text-[10px] md:text-xs" href="#">
            Summer Sales Discount Learn More
          </a>
        </div>
        <div className="text-white text-[10px] md:text-xs flex gap-3 items-center">
          <a href="#">My account</a>
          <a href="#">Checkout</a>
        </div>
      </div>
      <div className="px-3 md:px-12 py-3 flex items-center justify-between">
        <div className="flex gap-3 md:gap-6">
          <CustomIconComponent svg="humbergerMenuIcon" iconSize="w-4" />
          <div className="flex gap-2">
            {icons.map((icon: string, index: number) => {
              return (
                <CustomIconComponent
                  svg={icon}
                  iconColor="text-black"
                  iconSize="w-4"
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <h2 className="font-bold text-xl">MINAMALO</h2>
        <div className="flex items-center gap-3">
          {iconsTwo.map((icon) => {
            return (
              <CustomIconComponent
                svg={icon}
                iconColor="text-black"
                iconSize="w-4"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MobileHeaderComponent;
