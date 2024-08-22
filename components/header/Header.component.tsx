import React from "react";
import DesktopHeaderComponent from "./DesktopHeader.component";
import MobileHeaderComponent from "./MobileHeader.component";

const HeaderComponent = () => {
  return (
    <header>
      <DesktopHeaderComponent />
      <MobileHeaderComponent />
    </header>
  );
};

export default HeaderComponent;
