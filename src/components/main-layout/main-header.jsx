import linkedinIcon from '@iconify-icons/mdi/linkedin'
import githubIcon from '@iconify-icons/mdi/github'
import { Icon } from '@iconify/react'
import Button from 'react-ui/button'
import Switch from 'react-ui/switch'
import Select from 'react-ui/select'
import SearchBar from 'react-ui/search-bar'

function MainHeader() {
  function goToLinkedin() {
    console.log('go to linkedin')
  }
  function goToGithub() {
    console.log('go to github')
  }

  function toggleDarkMode() {
    console.log('toggle dark mode')
  }

  return (
    <div className="main-header">
      <div className="main-header__left">
        <Select name="lang">
          <Select.Option value="en">EN</Select.Option>
          <Select.Option value="es">ES</Select.Option>
        </Select>
      </div>
      <div className="main-header__center">
        <SearchBar />
      </div>
      <div className="main-header__right">
        <Button onClick={goToLinkedin}>
          <Icon icon={linkedinIcon} />
        </Button>
        <Button onClick={goToGithub}>
          <Icon icon={githubIcon} />
        </Button>
        <Switch onChange={toggleDarkMode}></Switch>
      </div>
    </div>
  )
}

export default MainHeader
