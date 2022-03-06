import React from 'react'
import { Linkedin } from '@icons-pack/react-simple-icons'

const formatDate = (date) => {
  if (date === 'Current') {
    return date
  }

  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
}

const WorkHistorySection = ({
  companyName,
  beginDate,
  endDate,
  linkToCompanyWebsite,
  linkToCompanyLinkedinProfile,
  companyImg,
  frontendTechs,
  backendTechs,
  roleTitle,
  roleDescription,
  accomplishments,
}) => {
  const startDateStr = formatDate(beginDate)
  const endDateStr = formatDate(endDate)

  return (
    <div className="mt-6 w-300">
      <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between">
          <span className="font-light text-gray-600">{`${startDateStr} - ${endDateStr}`}</span>
          <a
            href={linkToCompanyWebsite}
            className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
            target="_blank"
            rel="noreferrer"
          >
            {companyName}
          </a>
        </div>
        <div className="mt-2">
          <span className="text-2xl font-bold text-gray-700">Role Title</span>
          <p className="mt-2 text-gray-600">
            Role Description: Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Tempora expedita dicta totam aspernatur
            doloremque. Excepturi iste iusto eos enim reprehenderit nisi,
            accusamus delectus nihil quis facere in modi ratione libero!
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <a
            href={linkToCompanyLinkedinProfile}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  )
}

export default WorkHistorySection
