import ThemeProvider from 'react-ui/theme-provider'
import MainLayout from 'components/main-layout/main-layout'

import './App.scss'
import React from 'react'

function App() {
  return (
    <ThemeProvider theme={{ backgroundColor: 'black' }}>
      <MainLayout />
    </ThemeProvider>
  )
}

export default App
