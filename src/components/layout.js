import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

const Wrapper = ({ children }) => {
  return (
    <div
      className="h-full bg-[#071e34] flex flex-col justify-between"
      style={{
        margin: '0 auto',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  )
}

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Navbar />
        {children}
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout
