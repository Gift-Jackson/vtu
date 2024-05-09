import { Link } from "react-router-dom"
import Header from "../components/Header"
import style from '../styles/lost.module.css'

const Notfound = () => {
  return (
      <>
          <Header/>
          <main>
              <div className={style.wrapper}>
                  <h1>404</h1>
                  <p>I see you&apos;re lost. We&apos;re lost too! 🤷</p>
                  <Link to="/">
                  <label className={style.back}><i className="fa-solid fa-arrow-left"></i> &nbsp;<span>Go back</span></label>
                  </Link>
                    </div>
          </main>
      </>
  )
}

export default Notfound