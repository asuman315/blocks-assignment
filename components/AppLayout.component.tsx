import React, {FC} from "react";
import HeaderComponent from "./header/Header.component";

interface AppLayoutProps {
    children: React.ReactNode;
  }

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const links = ["block one", "block two", "block three", "block four"];

  return (
    <main className="px-4 flex flex-col justify-center items-center">
      <HeaderComponent />
      <h1 className={`pt-20 text-xl md:2xl xl:3xl 3xl:text-4xl font-bold text-center mt-6`}>
        Welcome to the Blocks
      </h1>
      <div className={`flex justify-center space-x-4 mt-3`}>
        {links.map((link) => (
          <a
            href={`/${link.replace(" ", "-")}`}
            className={`text-sm lg:text-base 2xl:text-lg font-bold capitalize text-primary-500 hover:text-primary-600 duration-300 ease-in-out`}
          >
            {link}
          </a>
        ))}
      </div>
      <section className="mt-8">
       {children}
      </section>
    </main>
  );
};

export default AppLayout;
