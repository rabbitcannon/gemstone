import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Header.scss'

class Header extends Component {
  render() {
    return (
      <div className="w-auto bg-white py-4 px-8 text-gray-800">
        <div className="float-left">
          <FontAwesomeIcon size="lg" icon={['fas', 'home']} /> | Dashboard
        </div>
        <div className="float-right">
          <div className="float-left mr-3">
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon={['fas', 'bell']} />
              <span className="fa-layers-counter">1,419</span>
            </span>
          </div>
          <div className="float-left text-gray-500">
            Company Name&nbsp;
            <FontAwesomeIcon size="lg" icon={['fas', 'caret-down']} />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
