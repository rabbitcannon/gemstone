import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
  render() {
    return (
      <div className="w-auto bg-white py-4 px-8 text-gray-800 animate__animated animate__fadeInDown">
        <div className="float-left">
          <h2 className="prose-xl">
            <FontAwesomeIcon icon={faHome} /> | Dashboard
          </h2>
        </div>
        <div className="float-right"> -- Company Name -- </div>
      </div>
    )
  }
}

export default Header
