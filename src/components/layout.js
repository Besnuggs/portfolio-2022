import React from 'react'
import Navbar from './navbar'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright ©2022</p>
      </footer>
    </div>
  )
}

export default Layout
