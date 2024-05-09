import styles from '../styles/home.module.css'
const Header = () => {
  return (
      <>
      <header className={styles.header}>
        <a href="/">
          <h1 className={styles.brand}>Payy.</h1>
        </a>

        <a href="https://github.com/Gift-Jackson/vtu" target='_blank'>
          <i className="fa-brands fa-github"></i> Github
        </a>
      </header>
      </>
  )
}

export default Header