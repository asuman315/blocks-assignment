import React from "react";
import { cardsData } from "./components.mocks";
import BlockCardComponent from "./ui/BlockCard.uicomponent";

const BlockThreeComponent = () => {
  const { title, description, imageSrc, link } = cardsData[2];
  return (
    <BlockCardComponent
      description={description}
      imageSrc={imageSrc}
      link={link}
      title={title}
    />
  );
};

export default BlockThreeComponent;
