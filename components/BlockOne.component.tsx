import React from "react";
import BlockCardComponent from "./ui/BlockCard.uicomponent";
import { cardsData } from "./components.mocks";

const BlockOne = () => {
  const { title, description, imageSrc, link } = cardsData[0];
  return (
    <BlockCardComponent
      description={description}
      imageSrc={imageSrc}
      link={link}
      title={title}
    />
  );
};

export default BlockOne;
