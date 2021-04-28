import React from 'react'
import ContactCard from './ContactCard'

const Contacts: React.FC = () => {
  return (
    <div className="bg-orange-100 pb-10 px-8">
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
  )
}

export default Contacts
