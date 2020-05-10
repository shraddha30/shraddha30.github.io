import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-content"><Link to="/" className="header-link">A11ys</Link></h1>  
    </header>
  )
}

export default Header
