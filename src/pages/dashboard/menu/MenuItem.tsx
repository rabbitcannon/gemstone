import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

interface IProps {
  text: string
  link: string
  // onClickHandler: () => onClickHandler(props.link)
}

const MenuItem: React.FC<IProps> = ({ text, link }) => {
  const dispatch = useDispatch()

  function onClickHandler(link: string) {
    console.log(link)
    dispatch(push(link))
  }

  return (
    <a
      href="#"
      onClick={() => onClickHandler(link)}
      className="text-gray-300 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
    >
      <FontAwesomeIcon icon={faTachometerAlt} size="lg" />{' '}
      <span className="ml-4">{text}</span>
    </a>
  )
}

export default MenuItem
