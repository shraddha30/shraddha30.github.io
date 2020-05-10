import React from "react"
import PropTypes from "prop-types"
import Header from './header';

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>
      </footer>
    </>
  )
}

export default Layout
