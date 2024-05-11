import styles from "../styles/mobilenav.module.css";

const DarkThemeToggle = ({ onClick }) => {
  return (
    <>
      <div className={styles.theme} onClick={onClick}>
        <div className={styles.theme_text}>
          <span className="material-symbols-outlined">dark_mode</span>
          <span>Dark</span>
        </div>
        <div className={styles.toggle}>
          <div className={styles.dark_slider}></div>
        </div>
      </div>
    </>
  );
};

export default DarkThemeToggle;
