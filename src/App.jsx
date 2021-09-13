import ThemeProvider from 'react-ui/theme-provider'
import MainLayout from 'components/main-layout/main-layout'

import './App.scss'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={{ backgroundColor: 'black' }}>
      <Router>
        <MainLayout />
      </Router>
    </ThemeProvider>
  )
}

export default App
