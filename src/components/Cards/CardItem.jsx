import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ imgSrc, text, label, path }) => {
  return (
    <>
      <li className="cards_item">
        <Link className="card_item_link" to={path}>
          <figure className="card_item_pic-wrap" data-category={label}>
            <img src={imgSrc} alt="Travel Image" className="card_item_img" />
          </figure>
        </Link>
        <div className="card_info">
          <h2>{text}</h2>
        </div>
      </li>
    </>
  );
};

export default CardItem;
