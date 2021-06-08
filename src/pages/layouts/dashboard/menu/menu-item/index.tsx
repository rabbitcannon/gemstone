import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

import './index.scss'
import { IconName } from '@fortawesome/fontawesome-common-types'

interface IProps {
  active?: boolean
  text: string
  link: string
  icon: IconName
}

const Index: React.FC<IProps> = ({ text, link, icon }) => {
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (link === window.location.pathname) {
      setActive(true)
    } else {
      setActive(false)
    }
  })

  function onClickHandler(link: string) {
    document.location.hash = link
    dispatch(push(link))
  }

  return (
    <div className={`hover:bg-cool-gray-700 ${active ? 'text-white bg-navy' : 'text-gray-300'}`}>
      <button
        onClick={() => onClickHandler(link)}
        className=" group flex items-center px-5 py-2 text-sm font-medium rounded-md menu-item"
      >
        <FontAwesomeIcon icon={['fas', icon]} size="lg" />
        <span className="ml-4">{text}</span>
      </button>
    </div>
  )
}

export default Index
