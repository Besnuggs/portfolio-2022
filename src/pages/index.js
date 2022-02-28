import React from 'react'
import Layout from '../components/layout'
import ProfileCard from '../components/profileCard'

const LandingPage = () => {
  return (
    <Layout>
      <section>
        <div className="h-full flex align-content justify-center">
          <ProfileCard />
        </div>
      </section>
    </Layout>
  )
}

export default LandingPage
