import { Link, NavLink } from "react-router-dom";
import styles from "../styles/mobilenav.module.css";
import LightThemeToggle from "./LightThemeToggle";
import { useEffect} from "react";
import DarkThemeToggle from "./DarkThemeToggle";
import PropTypes from '../../node_modules/prop-types'

const MobileNav = ({ toggleMenu, isDarkMode, toggleTheme }) => {

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode, toggleMenu]);



  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.overlay} onClick={toggleMenu}></div>
        <div className={styles.container}>
          <div className={styles.header}>
            {isDarkMode ? (
              <DarkThemeToggle onClick={toggleTheme} />
            ) : (
              <LightThemeToggle onClick={toggleTheme} />
            )}
            <button onClick={toggleMenu} className="menu-btn">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <ul id="mobile-nav" className={styles.nav}>
            <li>
              <NavLink className="nav-link" to="/">
                Welcome
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/offers">
                Offers
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/contacts">
                Reach Us
              </NavLink>
            </li>
          </ul>
          <Link to="/connect">
            <button className={styles.btn}>
              Get Started <i className="fa-solid fa-arrow-right fa-beat"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

MobileNav.propTypes = {
    toggleMenu:PropTypes.string,
    isDarkMode:PropTypes.string,
    toggleTheme:PropTypes.string
}

export default MobileNav;
