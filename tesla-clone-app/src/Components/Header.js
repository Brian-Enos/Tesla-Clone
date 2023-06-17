import React from 'react';
import HeaderImg from "../Images/logo.svg";

function Header() {
  return (
    <div className="HContainer">
      <a>
        <img src={HeaderImg} />
      </a>

      <div className="Menu">
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </div>

      <div className="RightMenu">
        <a href="#">Shop</a>
        <a href="#">Tesla Accout</a>

      </div>
    </div>
  )
}

export default Header