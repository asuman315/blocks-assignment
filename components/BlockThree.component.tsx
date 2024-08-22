import React from "react";
import { cardsData } from "./components.mocks";
import BlockCardComponent from "./ui/BlockCard.component";

const BlockThreeComponent = () => {
    const { title, description, imageSrc, link } = cardsData[2];            
  return (
    <section>
      <BlockCardComponent
        description={description}
        imageSrc={imageSrc}
        link={link}
        title={title}
      />
    </section>
  );
};

export default BlockThreeComponent;
