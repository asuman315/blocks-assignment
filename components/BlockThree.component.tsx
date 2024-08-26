import React, { useState } from "react";
import { cardsData } from "./components.mocks";
import BlockCardComponent from "./ui/BlockCard.uicomponent";
import CustomIconComponent from "./ui/CustomIcon.uicomponent";

const BlockThreeComponent = () => {
  const [activeNavItem, setActiveNavItem] = useState("Markets");
  const projects = [
    {
      title: "Denver International Airport",
      location: "Denver, Colorado",
      service: "Project Management",
      image:
        "https://www.tripsavvy.com/thmb/6VriS3H8FdxDdTvmLr3AoxRbBes=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/denver-international-airport-at-dusk-519877582-09a241d5a64b4beeaa9ab5585d4ca4de.jpg",
    },
    {
      title: "Port Washington Generating Station",
      location: "Milwaukee, Wisconsin",
      service: "Engineering, Procurement, Construction, Testing and Startup",
      image:
        "https://www.powermag.com/wp-content/uploads/2008/09/520004dd8ec58-49-01.jpg",
    },
    {
      title: "Pacific Hydro Portland",
      location: "Victoria, Australia",
      service:
        "Planning and Consulting, Engineering Design, Environmental Services",
      image:
        "https://www.standard.net.au/images/transform/v1/crop/frm/storypad-xg9CJ24URJf7csQxpNfFdd/655968a3-cc21-43f6-b553-3706923fd898.jpg/r0_138_3880_2319_w1200_h678_fmax.jpg",
    },
    {
      title: "Fred Hartman Bridge",
      location: "Baytown, La Porte, Texas",
      service: "Engineering",
      image:
        "https://lh3.googleusercontent.com/proxy/DmIY_XcQqfuEFWx-4LvV-R4_HS-RC6tVGD3Zg0ZdogytEplhc2Nluk8jOymIN3ZAgcT16R5ADMx4_ts",
    },
  ];

  const navItems = ["Markets", "Services", "Projects", "Contact Us"];

  return (
    <div className="bg-white overflow-hidden">
      <header className="flex justify-between items-center px-16 pt-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-4xl font-bold text-blue-900">URS</h1>
          <div className="bg-gray-300 w-[2px] h-[30px]"></div>
          <div className="">
            <p className="text-sm font-medium text-gray-700">
              AECOM and URS have joined <br /> together as one company
            </p>
          </div>
        </div>
        <div className="flex space-x-6 text-gray-400">
          <div className="flex items-center justify-center">
            <p className="mt-[-3px]">Country</p>
            <CustomIconComponent
              svg="arrowDropDownIcon"
              iconSize="w-4"
              iconColor="text-gray-400"
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="mt-[-3px]">Offices</p>
            <CustomIconComponent
              svg="arrowDropDownIcon"
              iconSize="w-4"
              iconColor="text-gray-400"
            />
          </div>
        </div>
      </header>

      <nav className="flex w-[90%] mt-16 justify-between items-center border-t  mx-auto">
        <div className="flex space-x-8 font-bold">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`text-gray-600 hover:text-gray-900  pt-4  ${
                activeNavItem === item &&
                "border-t-[3px] border-blue-700 pt-[14px]"
              }`}
              onClick={() => setActiveNavItem(item)}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="placeholder:text-blue-700 py-1 w-16 focus:outline-none"
          />
          <CustomIconComponent
            svg="searchIcon"
            iconColor="text-blue-700"
            iconSize="w-3 h-3"
            classes="mt-1"
          />
        </div>
      </nav>

      <div className="flex justify-between mt-5 relative h-[45vh]">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-full h-full overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 z-0 object-cover h-full"
            />
            {/* Blue overlay */}
            <div className="absolute inset-0 bg-blue-800 opacity-50 mix-blend-multiply z-10"></div>
            <div className="relative z-10 px-16  pt-8 to-blue/20 h-full flex flex-col">
              <h2 className="text-white text-2xl border-b h-[40%]">
                {project.title}
              </h2>
              <p className="font-semibold text-sm mt-2 pt-3 text-gray-300">
                {project.service}
              </p>
              <p className="absolute flex items-center gap-1 bottom-4 uppercase text-xs font-bold text-gray-300">
                <CustomIconComponent
                  svg="locationIcon"
                  iconSize="w-4 h-4"
                  iconColor="text-gray-500"
                />
                {project.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-8 px-16 py-6">
        <div className=" flex  ">
          <div className="text-lg text-gray-500">
            <p className="pr-6 w-4/5 mb-8">
              © AECOM-URS is a leading provider of engineering, construction,
              and technical services for public agencies and private sector
              companies around the world.
            </p>
            <a
              href="#"
              className="text-blue-600 border-t-[3px] pt-2 border-blue-600 font-semibold text-sm"
            >
              Read more
            </a>
          </div>
          <div className=" h-[150px] w-3 mx-4 bg-gradient-to-t from-transparent via-gray-300 to-transparent"></div>
          <div className="w-full text-sm text-gray-500 pl-12">
            <h4 className="text-base text-gray-900 font-bold mb-2">News</h4>
            <ul className="list-disc list-inside">
              <li className="flex flex-col font-bold mb-5 text-lg text-blue-600">
                AECOM completes acquisition of URS{" "}
                <span className="text-xs text-gray-400">October 17, 2014</span>
              </li>
              <li className="flex flex-col font-bold text-lg text-blue-600">
                Corporation AECOM completes acquisition of URS{" "}
                <span className="text-xs text-gray-400">October 17, 2014</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default BlockThreeComponent;
