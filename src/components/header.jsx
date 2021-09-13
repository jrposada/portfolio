import { Icon } from '@iconify/react'
import githubIcon from '@iconify-icons/mdi/github'
import linkedinIcon from '@iconify-icons/mdi/linkedin'

import Expander from 'react-ui/expander'
import SearchBar from 'react-ui/search-bar'
import Switch from 'react-ui/switch'
import Dropdown from 'react-ui/dropdown'
import Button from 'react-ui/button'

import './header.scss'

function Header() {
  function goToLinkedin() {
    console.log('Go to linkedin')
  }

  function goToGithub() {
    console.log('Go to github')
  }

  return (
    <header className="header">
      <SearchBar />
      <Expander />
      <Button>CV</Button>
      <Button onClick={goToLinkedin}>
        <Icon icon={linkedinIcon} style={{ height: '1em' }}></Icon>
        mmm
      </Button>
      <Button onClick={goToGithub}>
        <Icon icon={githubIcon}></Icon>
      </Button>
      <Switch />
      <Dropdown />
    </header>
  )
}

export default Header
