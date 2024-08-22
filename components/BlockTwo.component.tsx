import React from "react";
import BlockCardComponent from "./ui/BlockCard.component";
import { cardsData } from "./components.mocks";

const BlockTwoComponent = () => {
  const { title, description, imageSrc, link } = cardsData[1];
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

export default BlockTwoComponent;
