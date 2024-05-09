import { ReactTyped } from "react-typed";
import btn from "../assets/illustration.svg";
import { Link } from "react-router-dom";
import styles from '../styles/home.module.css'
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header/>
      <main className={styles.wrapper}>
        <div className={styles.content}>
          <h1>
            With ease, <span className={styles.mark}>buy/ pay</span> for
            <br />
            <ReactTyped
              strings={[
                "cheap data.",
                "cheap airtime.",
                "other utilities.",
              ]}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </h1>
        </div>

        <Link to="/connect">
          <button className={styles.btn}>
            <img src={btn} alt="Connect Button" />
          </button>
        </Link>

        <p className={styles.text}
        >
          Click the button to stay <span className={styles.mark}>connected!</span>
        </p>
      </main>
    </>
  );
};

export default Home;
