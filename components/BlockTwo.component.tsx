import React from "react";
import BlockCardComponent from "./ui/BlockCard.uicomponent";
import { cardsData } from "./components.mocks";
import Link from "next/link";
import CustomIconComponent from "./ui/CustomIcon.uicomponent";

const BlockTwoComponent = () => {
  return (
    <div className="relative min-h-screen bg-neutral-100 text-gray-800">
      {/* Top Black Line */}
      <div className="absolute top-0 right-4 md:left-12 lg:left-16 xl:left-20 2xl:left-28 border-t-4 md:border-t-8 border-black w-fit">
        <h1 className="pt-4 md:pt-8 text-2xl lg:text-4xl font-semibold">
          Gourmet <br /> Factory
        </h1>
      </div>

      <CustomIconComponent
        svg="humbergerMenuIcon"
        iconColor="text-black"
        iconSize="w-6 h-6 lg:w-8 lg:h-8"
        classes="absolute top-7 left-4 md:hidden"
      />

      {/* Navigation Bar */}
      <header className="absolute hidden md:flex border-t-[2px] border-black  right-8 lg:right-24 xl:right-32 2xl:right-52 top-[53px] justify-end items-center pt-4 pr-4 md:pr-8 lg:pr-16 xl:pr-24 2xl:pr-28">
        <nav>
          <ul className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 text-xs sm:text-sm font-semibold relative">
            <li className="relative">
              <Link href="#">
                <span className="hover:underline">Nosotros</span>
              </Link>
            </li>
            <li className="relative">
              <Link href="#">
                <span className="hover:underline">Servicios</span>
              </Link>
            </li>
            <li className="relative">
              <Link href="#">
                <span className="hover:underline">Clientes</span>
              </Link>
            </li>
            <li className="relative">
              <Link href="#">
                <span className="hover:underline">Contacto</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex flex-col h-[82vh] relative justify-center items-center px-4 sm:px-8 py-20 overflow-hidden">
        {/* Yellow Line on the Right */}
        <div className="absolute bottom-4 left-0 h-[70%] w-2 sm:w-3 bg-yellow-300"></div>
        <div className="w-full max-w-xl sm:max-w-2xl pt-24 sm:pt-48">
          <h2 className="text-2xl pr-12 lg:pr-0 sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8">
            Ofrecemos servicio de catering, desayunos, comedores, cocina
            industrial & viandas gourmet.
          </h2>
          <div className="flex flex-col sm:flex-row justify-around w-full max-w-md sm:max-w-lg mt-12 sm:mt-24">
            <div className="text-left mb-8 sm:mb-0">
              <h2 className="font-bold text-md sm:text-lg">Servicios</h2>
              <p className="text-xs sm:text-sm my-2 sm:my-5 text-gray-500 font-medium">
                Realizamos viandas para empresas, colegios, clínicas y
                hospitales.
              </p>
              <Link href="#">
                <span className="inline-block text-black hover:underline text-xs font-bold">
                  VER DETALLES
                </span>
              </Link>
            </div>
            <div className="text-left">
              <h2 className="font-bold text-md sm:text-lg">Clientes</h2>
              <p className="text-xs sm:text-sm my-2 sm:my-5 text-gray-500 font-medium">
                Empresas y organismos de alta exigencia confían en nosotras.
              </p>
              <Link href="#">
                <span className="inline-block text-black hover:underline text-xs font-bold">
                  VER CLIENTES
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* Social media icons */}
        <div className="absolute bottom-6 flex gap-3 items-center right-8">
          <div className=" bottom-5 bg-black p-1.5 lg:p-2 rounded-full">
            <CustomIconComponent
              svg="facebookIcon"
              iconColor="text-white"
              iconSize="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6"
            />
          </div>
          <div className=" bottom-5 bg-black p-1.5 lg:p-2 rounded-full">
            <CustomIconComponent
              svg="twitterIcon"
              iconColor="text-white"
              iconSize="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6"
            />
          </div>
        </div>
        <p className="absolute border inset-y-0 right-[-60px] flex flex-col h-fit top-64 w-fit justify-end z-10 text-white  font-medium tracking-widest">
          <span className=" transform rotate-90 text-black text-[10px] lg:text-xs">Francisco Cocchiararo 5120</span>{" "}
        </p>
      </main>

      {/* Footer with Image */}
      <footer className="absolute bottom-0 left-0 w-full h-[18vh]">
        <img
          src="https://img.freepik.com/free-photo/full-frame-whole-oranges_23-2147968655.jpg"
          alt="Oranges Background"
          className="w-full object-cover h-full grayscale"
        />
      </footer>
    </div>
  );
};

export default BlockTwoComponent;
