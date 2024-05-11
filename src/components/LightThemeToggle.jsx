import styles from "../styles/mobilenav.module.css";

const LightThemeToggle = ({ onClick }) => {
  return (
    <>
      <div className={styles.theme} onClick={onClick}>
        <div className={styles.theme_text}>
          <span className="material-symbols-outlined">light_mode</span>
          <span>Light</span>
        </div>
        <div className={styles.toggle}>
          <div className={styles.slider}></div>
        </div>
      </div>
    </>
  );
};

export default LightThemeToggle;
