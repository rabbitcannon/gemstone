import React from 'react'
import PersonalInformation from './personal-information'
import Notifications from './notifications'

const ProfileIndex: React.FC = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="divide-y divide-text-500 py-4">
        <PersonalInformation />

        <div className="pt-10">
          <Notifications />
        </div>
      </div>
    </div>
  )
}

export default ProfileIndex
