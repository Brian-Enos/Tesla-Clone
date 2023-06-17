import React from 'react';
import HeaderImg from "../Images/logo.svg";

function Header() {
  return (
    <div className="HContainer">
      <a>
        <img src={HeaderImg} />
      </a>

      <div className="Menu">
        <p><a href="#">Model S</a></p>
        <p><a href="#">Model 3</a></p>
        <p><a href="#">Model X</a></p>
        <p><a href="#">Model Y</a></p>
      </div>
    </div>
  )
}

export default Header