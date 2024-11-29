import React, { useState } from 'react'
import { SidebarClass1 } from './components/answers/1-basic-project'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import { Sidebar2Transition } from './components/sidebars/Sidebar2Transition'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div>
      <Sidebar2Transition/>
    </div>
  )
}

export default App
