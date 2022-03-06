import React from 'react'
import Layout from '../components/Layout'
import TechGrid from '../components/TechGrid'

const skills = ['frontend', 'backend', 'other']

const SkillsPage = () => {
  return (
    <Layout>
      {skills.map((skillType) => {
        const capitalizedSkillName =
          skillType.charAt(0).toUpperCase() + skillType.slice(1)
        return (
          <div>
            <h2>{capitalizedSkillName}:</h2>
            <TechGrid skillsType={skillType} />
          </div>
        )
      })}
    </Layout>
  )
}

export default SkillsPage
