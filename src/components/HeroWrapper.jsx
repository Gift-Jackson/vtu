import { Link } from "react-router-dom";
import heroSvg from "../assets/hero.png";
import { ReactTyped } from "react-typed";
import style from '../styles/hero.module.css'

const HeroWrapper = () => {
  return (
    <>
      <main>
        <div className={style.container}>
          <div className={style.left}>
            <div className={style.content}>
              <p>Bill payment got easier</p>
              <h1>
                We <span className={style.mark}>offer</span>{" "} <br />
                <ReactTyped
                  strings={[
                    "cheap data.",
                    "cheap airtime.",
                    "and more...",
                  ]}
                  typeSpeed={100}
                  backSpeed={50}
                  loop
                />
              </h1>
              <p>
                              Join <span className="mark">QuestPay</span> Today... <br />
                             Purchase data, airtime and Utility bills, all on super cheap rates.
              </p>
              <Link to="/connect">
                <button className={style.btn}>
                  Get Started <i className="fa-solid fa-arrow-right fa-beat"></i>
                </button>
              </Link>
            </div>
          </div>
          <div className={style.right}>
                      <div className={style.img}>
                      <img src={heroSvg} alt="Hero illustration" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroWrapper;
