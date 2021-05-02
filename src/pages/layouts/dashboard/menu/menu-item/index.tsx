import React, { useState } from 'react'
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

  function onClickHandler(link: string) {
    document.location.hash = link
    setActive(true)
    dispatch(push(link))
  }

  return (
    <button
      onClick={() => onClickHandler(link)}
      className={`${
        active ? 'text-white bg-navy' : 'text-gray-300'
      } group flex items-center px-5 py-2 text-sm font-medium rounded-md menu-item`}
    >
      <FontAwesomeIcon icon={['fas', icon]} size="lg" />
      <span className="ml-4">{text}</span>
    </button>
  )
}

export default Index
