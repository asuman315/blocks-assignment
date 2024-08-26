import React from "react";
import DesktopHeaderComponent from "./DesktopHeader.component";
import MobileHeaderComponent from "./MobileHeader.component";

const HeaderComponent = () => {
  return (
    <header className="w-screen">
      <DesktopHeaderComponent />
      <MobileHeaderComponent />
    </header>
  );
};

export default HeaderComponent;



<div className="flex min-h-screen w-screen">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-white p-8 flex flex-col justify-end">
        <div className="space-y-4 mb-10">
          <h1 className="text-4xl font-bold">Safer</h1>
          <h1 className="text-4xl font-bold">Cleaner</h1>
          <h1 className="text-4xl font-bold">Healthier</h1>
          <p className="text-lg">Future for everyone, every day.</p>
        </div>
        <button className="mt-6 py-2 px-6 bg-blue-600 text-white font-semibold rounded-full self-start">
          More about us
        </button>
      </div>

      {/* Main Content */}
      <div className="relative w-3/4">
        {/* Background Image */}
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/024/130/213/small_2x/african-businesswoman-manager-generate-ai-photo.jpg"
          alt="Happy Young Black Woman"
          className="absolute inset-0 z-0 object-cover w-full h-full"
        />

        {/* Top Navigation */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
          <span className="text-lg font-semibold text-white">
            £12.82 - Last Update
          </span>
          <div className="space-x-4 flex items-center">
            <a href="#" className="text-white hover:underline">
              Company
            </a>
            <a href="#" className="text-white hover:underline">
              Investors
            </a>
            <a href="#" className="text-white hover:underline">
              Careers
            </a>
            <a href="#" className="text-white hover:underline">
              Stories
            </a>
            <button className="py-1 px-3 bg-white text-gray-900 rounded-full font-semibold">
              Contacts
            </button>
          </div>
        </div>

        {/* Navigation Bottom Line */}
        <div className="absolute top-14 left-0 right-0 h-0.5 bg-white z-10"></div>

        {/* Main Story */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
          <div className="mb-16">
            <h2 className="text-sm uppercase text-gray-200">
              Healthcare | Impact Story
            </h2>
            <h1 className="text-5xl font-bold mb-4 text-white">
              The gift of sight
            </h1>
            <p className="text-sm mb-6 text-gray-300">22 May 2018 | Medical</p>
            <button className="py-2 px-6 bg-blue-600 text-white font-semibold rounded-full">
              Read the story
            </button>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="absolute inset-y-0 right-0 p-8 flex flex-col justify-center space-y-4 z-10">
          <a href="#" className="text-lg font-semibold text-white">
            f
          </a>
          <a href="#" className="text-lg font-semibold text-white">
            t
          </a>
          <a href="#" className="text-lg font-semibold text-white">
            in
          </a>
        </div>

        {/* Pagination & Scroll */}
        <div className="absolute bottom-0 left-0 p-8 flex justify-between items-center w-full z-10">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          </div>
          <span className="text-sm text-gray-200">SCROLL</span>
        </div>
      </div>
    </div>