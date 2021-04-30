import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

import './MenuItem.scss'

interface IProps {
  text: string
  link: string
  icon?: string
}

const MenuItem: React.FC<IProps> = ({ text, link }) => {
  const dispatch = useDispatch()

  function onClickHandler(link: string) {
    document.location.hash = link
    dispatch(push(link))
  }

  return (
    <button
      onClick={() => onClickHandler(link)}
      className="text-gray-300 group flex items-center px-2 py-2 text-sm font-medium rounded-md menu-item"
    >
      <FontAwesomeIcon icon={faTachometerAlt} size="lg" />{' '}
      <span className="ml-4">{text}</span>
    </button>
  )
}

export default MenuItem
