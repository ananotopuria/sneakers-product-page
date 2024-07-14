import { Link } from "react-router-dom";
import { useRef } from "react";
import React from "react";

const Navigation = () => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleLinkClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  return (
    <>
      <nav>
        <div className="navigation hidden">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
            ref={checkboxRef}
          />
          <label
            htmlFor="navi-toggle"
            className="navigation__button flex flex-col"
          >
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link
                  to="/starter_project/products"
                  className="navigation__link"
                  onClick={handleLinkClick}
                >
                  Collections
                </Link>
              </li>
              <li className="navigation__item">
                <Link
                  to="/starter_project/"
                  className="navigation__link"
                  onClick={handleLinkClick}
                >
                  Man
                </Link>
              </li>
              <li className="navigation__item">
                <Link
                  to="/starter_project/"
                  className="navigation__link"
                  onClick={handleLinkClick}
                >
                  Women
                </Link>
              </li>
              <li className="navigation__item">
                <Link
                  to="/starter_project/"
                  className="navigation__link"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/starter_project/"
                  className="navigation__link"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
      <nav className="header__nav">
        <ul className="flex gap-5 header__nav-list">
          <li>
            <Link to="/starter_project/products">Collection</Link>
          </li>
          <li>
            <Link to="/starter_project/">Men</Link>
          </li>
          <li>
            <Link to="/starter_project/">Women</Link>
          </li>
          <li>
            <Link to="/starter_project">About</Link>
          </li>
          <li>
            <Link to="/starter_project">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
