import React from "react";
import BlockCardComponent from "./ui/BlockCard.uicomponent";
import { cardsData } from "./components.mocks";

const BlockTwoComponent = () => {
  const { title, description, imageSrc, link } = cardsData[1];
  return (
    <BlockCardComponent
      description={description}
      imageSrc={imageSrc}
      link={link}
      title={title}
    />
  );
};

export default BlockTwoComponent;
