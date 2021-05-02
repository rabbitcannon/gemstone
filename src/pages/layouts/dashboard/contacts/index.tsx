// import React, { useState } from 'react'
import React from 'react'
import ContactCard from './contact-card'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.scss'

const Contacts: React.FC = () => {
  // const [toggleStatus, setToggleStatus] = useState(false)
  //
  // const toggleContactPanel = () => {
  //   return ''
  // }

  return (
    <div
      id="contactContainer"
      className="bg-orange-100 pb-10 px-8"
      style={{ position: 'relative' }}
    >
      <h3 className="text-lg pl-4 py-4 font-medium text-gray-900">
        Your plan contacts
      </h3>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ContactCard
          name="Robert Blahut"
          company="TAG Resources"
          email_address="rblahut@tagresources.com"
          title="Account Manager"
          telephone="865-287-8407"
        />

        <ContactCard
          name="Robert Blahut 2"
          company="TAG Resources, LLC"
          email_address="rblahut@tagresources.com"
          title="Account Manager"
          telephone="865-287-8407"
        />

        <ContactCard
          name="Robert Blahut #3"
          company="TAG-Gizzle"
          email_address="rblahut@tagresources.com"
          title="Account Manager"
          telephone="865-287-8407"
        />
      </ul>
      {/* <div className="contact__container--collapse"> */}
      {/*  <FontAwesomeIcon icon={['fas', 'angle-double-up']} /> */}
      {/*  &nbsp;Collapse&nbsp; */}
      {/*  <FontAwesomeIcon icon={['fas', 'angle-double-up']} /> */}
      {/* </div> */}
    </div>
  )
}

export default Contacts
