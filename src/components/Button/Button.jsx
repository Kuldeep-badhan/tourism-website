import React from "react";
import { Link } from "react-router-dom";

// local imports
import "./Button.css";

const Button = ({ children, type, buttonStyle, buttonSize, onClick }) => {
  const STYLES = ["btn--primary", "btn--outlined"];
  const SIZES = ["btn--medium", "btn--large"];

  const checkButtonStyles = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSizes = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to={"/signup"} className="btn_mobile">
      <button
        onClick={onClick}
        type={type}
        className={`btn ${checkButtonStyles} ${checkButtonSizes}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
