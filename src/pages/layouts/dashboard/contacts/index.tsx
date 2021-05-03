import React, { useState } from 'react'
import ContactCard from './contact-card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.scss'
import { Transition } from '@headlessui/react'

const Contacts: React.FC = () => {
  const [toggleStatus, setToggleStatus] = useState(true)

  const arrowIcon = toggleStatus ? 'angle-double-up' : 'angle-double-down'

  // TODO need to fix transition of collapse panel
  return (
    <>
      <Transition
        show={toggleStatus}
        enter="transition ease duration-200"
        enterFrom="opacity-0 height-0"
        enterTo="opacity-100 height-100"
        leave="transition ease duration-200"
        leaveFrom="opacity-100 height-100"
        leaveTo="opacity-0 height-0"
      >
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
        </div>
      </Transition>
      <div className="contact__container--collapse">
        <button
          onClick={() => setToggleStatus((toggleStatus) => !toggleStatus)}
        >
          <FontAwesomeIcon icon={['fas', arrowIcon]} />
          &nbsp;Contacts&nbsp;
          <FontAwesomeIcon icon={['fas', arrowIcon]} />
        </button>
      </div>
    </>
  )
}

export default Contacts
