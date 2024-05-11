import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Connect from "./Pages/Connect"
import Notfound from "./Pages/Notfound"
import { useState } from "react"

const App = () => {
  const [menu, setMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home menu={menu} toggleMenu={toggleMenu} isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>} />
          <Route path="/connect" element={<Connect menu={menu} toggleMenu={toggleMenu} isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>} />
          <Route path="*" element={<Notfound menu={menu} toggleMenu={toggleMenu} isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
