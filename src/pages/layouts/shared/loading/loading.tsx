import React from 'react'
import './loading.scss'
import LoadImage from 'assets/images/preloaders/orange/preloader_70o.svg'

const Loading: React.FC = () => {
  return (
    <div className="loading__panel">
      <div className="loading__content">
        <img src={LoadImage} alt="Loading" />
      </div>
    </div>
  )
}

export default Loading
