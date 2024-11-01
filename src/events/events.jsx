import "./styles.css";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
// import Card from "./Card";
import Card from "./CardNews";
import { config } from "react-spring";
import Carroussel from "./Carroussel";

export default function App() {
  let cards = [
    {
      key: uuidv4(),
      content: <Card src="./events/4.png" heading="Parichay" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae" />
    },
    {
      key: uuidv4(),
      content: <Card src="./events/5.png" heading="One India" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae" />
    },
    {
      key: uuidv4(),
      content: <Card src="./events/6.png" heading="Aarohan" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae" />
    },
    {
      key: uuidv4(),
      content: <Card src="./events/7.png" heading="Sell X 3.0" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae" />
    },
    {
      key: uuidv4(),
      content: <Card src="./events/2.png" heading="Parichay" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae" />
    },
    {
      key: uuidv4(),
      content: <Card src="./events/3.png" heading="Parichay" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae" />
    },
    {
      key: uuidv4(),
      content: <Card src="./events/1.png" heading="Parichay" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam id ut atque pariatur! Quae" />
    },


  ]; /*.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });*/

  return (
    <div className="App">
      {/*<div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={cards}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showArrows}
          animationConfig={config.gentle}
        />
  </div>*/}
      <Carroussel
        cards={cards}
        height="500px"
        width="90%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}
