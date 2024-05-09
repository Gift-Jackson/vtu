import { Link } from "react-router-dom"
import Header from "../components/Header"
import styles from '../styles/home.module.css'
import connect from '../styles/connect.module.css'

const Connect = () => {
  return (
      <>
          <Header />
          <main className={styles.wrapper}>
              <div className={connect.content}>
                  <h2>Get Started!</h2>
                  <p>Login or Sign Up to continue...</p>

                  <div className={connect.btns}>
                      <Link>
                      <button className={connect.btn_1}>Login</button>
                      </Link>
                      <p>Or</p>
                      <Link>
                      <button className={connect.btn_2}>Sign Up</button>
                      </Link>
                  </div>

                  <Link to="/">
                  <p><i className="fa-solid fa-arrow-left"></i> &nbsp;<span>Go back</span></p>
                  </Link>
              </div>
          </main>
      </>
  )
}

export default Connect