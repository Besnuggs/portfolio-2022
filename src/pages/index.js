import React from 'react'
import { Link } from 'gatsby'

const LandingPage = () => {
  return (
    <div>
      <h2 className="text-3xl underline">
        Hello from main. <Link to="/about">Head to about</Link>
      </h2>
    </div>
  )
}

export default LandingPage
