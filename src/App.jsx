import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Connect from "./Pages/Connect"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/connect" element={<Connect/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
