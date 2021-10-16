import ThemeProvider from 'react-ui/theme-provider'
import { BrowserRouter as Router } from 'react-router-dom'

import MainLayout from 'components/main-layout/main-layout'

import 'antd/dist/antd.css'

import './App.scss'

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
