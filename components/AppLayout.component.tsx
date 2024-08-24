import React, { FC } from "react";
import HeaderComponent from "./header/Header.component";
import { useRouter } from "next/router";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const links = ["block one", "block two", "block three"];
  const router = useRouter();
  const currentPath = router.pathname.split("/")[1];

  return (
    <main className="px-4 flex flex-col justify-center items-center">
      <HeaderComponent />
      <div className={`flex justify-center pt-28 space-x-4 mt-3`}>
        {links.map((link) => {

          const isCurrentPage = currentPath === link.replace(" ", "-");
          return (
            <button
              onClick={() => router.push(`/${link.replace(" ", "-")}`)}
              className={`text-xs md:text-base border px-4 py-2 rounded-lg  2xl:text-lg font-bold capitalize  hover:text-primary-500 hover:border-primary-500 duration-300 ease-in-out ${ isCurrentPage ? " text-primary-500 border-primary-500" : "text-gray-500 border-gray-300"}`}
            >
              {link}
            </button>
          );
        })}
      </div>
      <section className="mt-8">{children}</section>
    </main>
  );
};

export default AppLayout;
