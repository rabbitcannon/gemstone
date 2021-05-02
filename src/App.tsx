import React from 'react'
import { Routes } from './routes/routes'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas, fab)

function App() {
  return <Routes />
}

export default App
