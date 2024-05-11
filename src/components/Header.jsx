import { Link, NavLink } from "react-router-dom";
import styles from "../styles/header.module.css";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <a href="/">
          <h2 className={styles.brand}>QuestPay</h2>
        </a>

        <nav className={styles.nav}>
          <ul>
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

          <div className={styles.btns}>
            <a href="https://github.com/Gift-Jackson/vtu" target="_blank">
              <i className="fa-brands fa-github"></i> <span>Github</span>
            </a>
            <Link to="/connect">
              <button className={styles.btn}>
                Let me in... <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
            <button className="menu-btn">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
