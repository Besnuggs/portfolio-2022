import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
