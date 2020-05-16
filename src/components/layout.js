import React from "react"
import PropTypes from "prop-types"
import Header from './header';
import { Helmet } from "react-helmet"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>A11ys - an Accessibility blog</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <footer>
      </footer>
    </>
  )
}

export default Layout
