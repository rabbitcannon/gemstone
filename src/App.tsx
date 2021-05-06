import React from 'react'
import { Routes } from './routes/routes'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas, fab, far)

function App() {
  return <Routes />
}

export default App
