import React from "react";
import CustomIconComponent from "./ui/CustomIcon.uicomponent";

const BlockOne = () => {
  return (
    <div className="flex min-h-screen w-screen">
      {/* Left Sidebar */}
      <div className="w-1/4 hidden lg:flex bg-white pb-16 flex-col relative">
        <h1 className="px-6 pt-4 tracking-wider text-2xl">HALMA</h1>
        <div className="justify-self-end mt-auto px-6 xl:px-12">
          <div className="space-y-1 mb-3 text-gray-600">
            <h2 className="text-3xl xl:text-5xl font-light">Safer</h2>
            <h2 className="text-3xl xl:text-5xl font-light">Cleaner</h2>
            <h2 className="text-3xl xl:text-5xl font-light">Healthier</h2>
          </div>
          <p className="text-[11px] xl:text-xs font-semibold text-gray-600">
            future for everyone, every day.
          </p>
          <button className="mt-[37px] py-2 xl:py-3 px-3 xl:px-4 text-[10px] xl:text-xs bg-blue-600 text-white font-semibold rounded-full self-start">
            More about us
          </button>
        </div>
      </div>

      {/* Navigation Bottom Line */}
      <div className="absolute top-[50px] xl:top-[65px] left-0 right-0 h-[0.5px] bg-gray-300 z-10"></div>

      {/* Main Content */}
      <div className="relative w-full lg:w-3/4">
        {/* Background Image */}
        <img
          src="https://t3.ftcdn.net/jpg/02/22/15/10/360_F_222151082_gzR5rWXNHKyIGdL4gh4e3J9pmF3OmiiI.jpg"
          alt="Happy Young Black Woman"
          className="absolute inset-0 z-0 object-cover w-full h-full opacity-85"
        />

        {/* Top Navigation */}
        <div className="absolute top-0 left-0 right-0 p-3 xl:p-[18px]  flex justify-between items-center z-10">
          <CustomIconComponent
            svg="humbergerMenuIcon"
            iconColor="text-gray-200"
            iconSize="w-4 h-4 xl:w-6 xl:h-6"
            classes="lg:hidden"
          />
          <span className="hidden lg:flex pl-3 text-[11px] xl:text-sm font-medium text-gray-200 items-center">
            £12.82
            <span>
              <CustomIconComponent
                svg="arrowDropUpIcon"
                iconColor="text-green-500"
                iconSize="w-4 h-4"
              />
            </span>{" "}
            LSE GBp
          </span>
          <div className="flex items-center space-x-3 xl:space-x-9">
            <div className="space-x-4 xl:space-x-8 flex items-center text-xs xl:text-sm">
              <a
                href="#"
                className=" hidden lg:block text-gray-200 font-medium hover:underline cursor-pointer"
              >
                Company
              </a>
              <a
                href="#"
                className=" hidden lg:block text-gray-200 font-medium hover:underline cursor-pointer"
              >
                Investors
              </a>
              <a
                href="#"
                className=" hidden lg:block text-gray-200 font-medium hover:underline cursor-pointer"
              >
                Careers
              </a>
              <a
                href="#"
                className=" hidden lg:block text-gray-200 font-medium hover:underline cursor-pointer"
              >
                Stories
              </a>
              <button className="py-1 xl:py-[7px] px-3 border text-[11px] xl:text-xs text-gray-300 rounded-full font-medium">
                Contacts
              </button>
            </div>
            <div className="flex gap-3">
              <div className="flex">
                <CustomIconComponent
                  svg="globeIcon"
                  classes=" hover:text-white"
                  iconColor="text-gray-200"
                  iconSize="w-4 h-4  xl:w-6 xl:h-6"
                />
                <CustomIconComponent
                  svg="arrowDropDownIcon"
                  classes=" hover:text-white"
                  iconColor="text-gray-200"
                  iconSize="w-4 h-4  xl:w-6 xl:h-6"
                />
              </div>
              <CustomIconComponent
                svg="searchIcon"
                classes=" hover:text-white"
                iconColor="text-gray-200"
                iconSize="w-4 h-4  xl:w-6 xl:h-6"
              />
            </div>
          </div>
        </div>

        {/* Main Story */}
        <div className="absolute inset-0 flex flex-col justify-end px-8 lg:px-12 xl:px-16 z-10">
          <div className="mb-36">
            <h2 className="text-[11px] xl:text-xs uppercase text-gray-200 font-semibold tracking-widest">
              <span className="underline normal-case tracking-normal">
                Healthier
              </span>{" "}
              | Impact Story
            </h2>
            <h1 className="text-4xl xl:text-5xl font-bold mb-5 mt-2 text-white">
              The gift of sight
            </h1>
            <p className="text-[11px] xl:text-xs font-semibold mb-6 text-gray-300">
              22 May 2018, <span className="underline">Medical</span>{" "}
            </p>
            <div className="flex items-center gap-3">
              <button className="border p-3 rounded-full">
                <CustomIconComponent
                  svg="playIcon"
                  iconColor="text-white"
                  iconSize="xl:w-6 w-4 h-4 xl:h-6"
                />
              </button>
              <button className="py-2 xl:py-3 px-4 xl:px-6 border text-gray-200 border-gray-100 font-semibold rounded-full">
                Read the story
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="absolute inset-y-0 right-0 px-5 lg:px-8 xl:px-11 flex flex-col justify-center space-y-10 z-10">
          <a href="#" className="text-lg font-semibold text-white">
            <CustomIconComponent
              svg="facebookIcon"
              iconColor="text-white"
              iconSize="w-4 h-4"
            />
          </a>
          <a href="#" className="text-lg font-semibold text-white">
            <CustomIconComponent
              svg="twitterIcon"
              iconColor="text-white"
              iconSize="w-4 h-4"
            />
          </a>
          <a href="#" className="text-lg font-semibold text-white">
            <CustomIconComponent
              svg="linkkedInIcon"
              iconColor="text-white"
              iconSize="w-4 h-4"
            />
          </a>
          <a href="">
            <CustomIconComponent
              svg="youtubeIcon"
              iconColor="text-white"
              iconSize="w-4 h-4"
            />
          </a>
        </div>
        <p className="absolute inset-y-0 right-0 lg:px-1 xl:px-4 flex flex-col justify-end z-10 text-white pb-20 font-medium tracking-widest bottom-0">
          <span className=" transform rotate-90">SCROLL</span>{" "}
        </p>

        <div className="rounded-lg mx-auto absolute bottom-0 left-0 pl-8 lg:pl-12 xl:pl-16 pr-16 xl:pr-32 pb-16 flex justify-between items-center w-full z-10">
          {/* Time Indicator */}
          <div className="text-white text-xs mr-3 xl:mr-6">01 - 03</div>

          {/* Progress Bar */}
          <div className="relative flex-1">
            <div className="h-0.5 bg-gray-600 rounded-full">
              <div className="h-0.5 bg-white rounded-full w-1/2"></div>
            </div>
          </div>

          {/* Play/Pause and Skip Buttons */}
          <div className="flex items-center space-x-2 ml-3 xl:ml-6">
            <button className="p-1 xl:p-2 flex items-center justify-center bg-white rounded-full hover:bg-gray-100">
              <CustomIconComponent svg="arrowLeftIcon" iconSize="w-4 xl:w-6" />
            </button>
            <button className="p-1 xl:p-2 flex items-center justify-center bg-white rounded-full hover:bg-gray-100">
              <CustomIconComponent svg="arrowRightIcon" iconSize="w-4 xl:w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockOne;
