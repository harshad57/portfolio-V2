import React from "react";
import "./Menu.css"; // Import our CSS file

const Menu = ({ value, click }) => {
  return (
    <div className="menu-wrapper">
      <label className="burger menu" htmlFor="burger">
        <input
          type="checkbox"
          id="burger"
          onClick={click}
          checked={value}
          readOnly
        />
        <span />
        <span />
        <span />
      </label>
    </div>
  );
};

export default Menu;