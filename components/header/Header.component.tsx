import React from "react";
import DesktopHeaderComponent from "./DesktopHeader.component";
import MobileHeaderComponent from "./MobileHeader.component";

const HeaderComponent = () => {
  return (
    <header className="w-screen @container">
      <DesktopHeaderComponent />
      <MobileHeaderComponent />
    </header>
  );
};

export default HeaderComponent;
