import React from 'react'
import Layout from '../components/Layout'
import WorkHistorySection from '../components/WorkHistorySection'

const workHistory = [
  {
    companyName: 'Rock Solid Internet Systems',
    beginDate: new Date('July, 2021'),
    endDate: 'Current',
    linkToCompanyWebsite: 'https://www.rocksolidinternet.com/',
    linkToCompanyLinkedinProfile:
      'https://www.linkedin.com/company/rock-solid-internet-shipping/',
    companyImg: '',
    frontendTechs: [],
    backendTechs: [],
    roles: [],
    accomplishments: [],
  },
  {
    companyName: 'Callforce',
    beginDate: new Date('May, 2020'),
    endDate: new Date('July, 2021'),
    linkToCompanyWebsite: 'https://www.getcallforce.com/',
    linkToCompanyLinkedinProfile:
      'https://www.linkedin.com/company/callforce-llc/mycompany/',
    companyImg: '',
    frontendTechs: [],
    backendTechs: [],
    roles: [],
    accomplishments: [],
  },
  {
    companyName: 'Independent Contractor',
    beginDate: new Date('Nov, 2019'),
    endDate: new Date('May, 2020'),
    linkToCompanyWebsite: 'https://www.bradysnuggs.net/',
    linkToCompanyLinkedinProfile: 'https://www.linkedin.com/in/bradysnuggs/',
    companyImg: '',
    frontendTechs: [],
    backendTechs: [],
    roles: [],
    accomplishments: [],
  },
  {
    companyName: 'Bright Bridge Web',
    beginDate: new Date('Feb, 2019'),
    endDate: new Date('Nov, 2019'),
    linkToCompanyWebsite: 'https://brightbridgeweb.com/',
    linkToCompanyLinkedinProfile:
      'https://www.linkedin.com/company/bright-bridge-web/about/',
    companyImg: '',
    frontendTechs: [],
    backendTechs: [],
    roles: [],
    accomplishments: [],
  },
]

const WorkPage = () => {
  return (
    <Layout>
      <section className="container flex flex-col justify-between mx-auto">
        {workHistory.map((job) => {
          const {
            companyName,
            beginDate,
            endDate,
            linkToCompanyWebsite,
            linkToCompanyLinkedinProfile,
            companyImg,
            frontendTechs,
            backendTechs,
            roles,
            accomplishments,
          } = job
          return (
            <WorkHistorySection
              companyName={companyName}
              beginDate={beginDate}
              endDate={endDate}
              linkToCompanyLinkedinProfile={linkToCompanyLinkedinProfile}
              linkToCompanyWebsite={linkToCompanyWebsite}
              companyImg={companyImg}
              frontendTechs={frontendTechs}
              backendTechs={backendTechs}
              roles={roles}
              accomplishments={accomplishments}
            />
          )
        })}
      </section>
    </Layout>
  )
}

export default WorkPage
