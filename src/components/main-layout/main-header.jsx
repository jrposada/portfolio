import linkedinIcon from '@iconify-icons/mdi/linkedin'
import githubIcon from '@iconify-icons/mdi/github'
import azureIcon from '@iconify-icons/mdi/azure'
import moonIcon from '@iconify-icons/mdi/moon-waxing-crescent'
import sunIcon from '@iconify/icons-mdi/white-balance-sunny'
import { Icon } from '@iconify/react'
import { useCallback } from 'react'
import Button from 'react-ui/button'
import Switch from 'react-ui/switch'
import Select from 'react-ui/select'
import SearchBar from 'react-ui/search-bar'
import ExternalNavLink from 'components/externalNavLink'
import { useState } from 'react'

import './main-header.scss'

function MainHeader() {
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const toggleDarkMode = useCallback(() => {
    console.log('toggle dark mode')
  }, [])

  return (
    <div className="main-header">
      <div className="main-header__left">
        <Select name="lang" loading={isLoading} disabled={isDisabled}>
          <Select.Option value="en">EN</Select.Option>
          <Select.Option value="es">ES</Select.Option>
        </Select>
        <Button onClick={() => setIsLoading(!isLoading)} primary>
          Loading
        </Button>
        <Button onClick={() => setIsDisabled(!isDisabled)} primary>
          Disable
        </Button>
      </div>
      <div className="main-header__center">
        <SearchBar />
      </div>
      <div className="main-header__right">
        <ExternalNavLink to="https://www.linkedin.com/in/javier-rodr%C3%ADguez-posada-68086b123/">
          <Button icon>
            <Icon widht="1.5em" height="1.5em" icon={linkedinIcon} />
          </Button>
        </ExternalNavLink>
        <ExternalNavLink to="https://github.com/jrposada/">
          <Button icon>
            <Icon widht="1.5em" height="1.5em" icon={githubIcon} />
          </Button>
        </ExternalNavLink>
        <ExternalNavLink to="https://javiropos.visualstudio.com/">
          <Button icon>
            <Icon widht="1.5em" height="1.5em" icon={azureIcon} />
          </Button>
        </ExternalNavLink>
        <Switch
          onChange={toggleDarkMode}
          checkedIcon={sunIcon}
          uncheckedIcon={moonIcon}
        ></Switch>
      </div>
    </div>
  )
}

export default MainHeader
