import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      {/* logo */}
      <div className="header__logo">
        <img
          src="https://static.oopocket.com/store/iconTreemall@3x.png"
          alt="Tree Mall logo"
        />
      </div>
    </div>
  );
}

export default Header;
