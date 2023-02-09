import React from "react";

import CardItem from "./CardItem";
import img9 from "../../assets/images/img-9.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              imgSrc={img9}
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              imgSrc={img2}
              text="Travel through the Islands of Bali iin a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards_items_2">
            <CardItem
              imgSrc={img9}
              text="Explore the hidden waterfall deep inside the Amazon jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              imgSrc={img2}
              text="Travel through the Islands of Bali iin a Private Cruise"
              label="Luxury"
              path="/services"
            />
            <CardItem
              imgSrc={img3}
              text="Travel through the sea on the ship."
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
