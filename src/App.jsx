import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Connect from "./Pages/Connect"
import Notfound from "./Pages/Notfound"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/connect" element={<Connect/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
