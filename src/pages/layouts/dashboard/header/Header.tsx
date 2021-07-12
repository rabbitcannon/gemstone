import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'redux/hooks/typedSelector'
import { RootState } from 'redux/store'
import { Company } from 'redux/types/company.types'

import './Header.scss'

interface IProps {
  location: string | undefined
}

const Header: React.FC<IProps> = ({ location }) => {
  const { company } = useSelector<Company>((state: RootState) => state.company)

  console.log(company.name)

  return (
    <div className="w-auto bg-white py-4 px-8 text-gray-800 border-gray-300 border-b">
      <div className="float-left">
        <FontAwesomeIcon size="lg" icon={['fas', 'home']} /> | {location}
      </div>
      <div className="float-right">
        <div className="float-left mr-3">
          <span className="fa-layers fa-fw">
            <FontAwesomeIcon icon={['fas', 'bell']} />
            <span className="fa-layers-counter">1,419</span>
          </span>
        </div>
        <div className="float-left text-gray-500">
          {company ? <span>{company.name}</span> : <span>N/A</span>}
          <FontAwesomeIcon size="lg" icon={['fas', 'caret-down']} />
        </div>
      </div>
    </div>
  )
}

export default Header
