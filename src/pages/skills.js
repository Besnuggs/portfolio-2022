import React from 'react'
import Layout from '../components/Layout'
import TechGrid from '../components/TechGrid'

const SkillsPage = () => {
  return (
    <Layout>
      <section className="h-full">Skills Page.</section>
      <TechGrid skillsType="frontend" />
    </Layout>
  )
}

export default SkillsPage
