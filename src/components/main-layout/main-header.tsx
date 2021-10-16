import { useCallback, useMemo } from 'react'

import linkedinIcon from '@iconify/icons-mdi/linkedin'
import githubIcon from '@iconify/icons-mdi/github'
import azureIcon from '@iconify/icons-mdi/azure'
import spainFlag from '@iconify/icons-emojione-v1/flag-for-spain'
import unitedStatesFlag from '@iconify/icons-emojione-v1/flag-for-united-states'
// import moonIcon from '@iconify/icons-mdi/moon-waning-crescent'
// import sunIcon from '@iconify/icons-mdi/white-balance-sunny'
import { Icon } from '@iconify/react'

import { WithTranslation, withTranslation } from 'react-i18next'

import { Button, Menu, Dropdown } from 'antd'
import Search from 'antd/lib/input/Search'

import ExternalNavLink from 'components/externalNavLink'

import './main-header.scss'

const ICON_SIZE = '1.5em'

interface MainHeaderProps extends WithTranslation {}
function MainHeader({ t, i18n }: MainHeaderProps) {
  const changeLanguage = useCallback(
    (lang) => () => {
      i18n.changeLanguage(lang)
    },
    [i18n]
  )

  const handleSearch = useCallback((value: string): void => {
    console.log('search: ', value)
  }, [])

  const currentLanguageIcon = useMemo(() => {
    switch (i18n.language) {
      case 'es':
        return spainFlag
      default:
        return unitedStatesFlag
    }
  }, [i18n.language])

  return (
    <div className="main-header">
      <div className="main-header__left">
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item
                onClick={changeLanguage('en')}
                icon={
                  <Icon
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    icon={unitedStatesFlag}
                  />
                }
              />
              <Menu.Item
                onClick={changeLanguage('es')}
                icon={
                  <Icon width={ICON_SIZE} height={ICON_SIZE} icon={spainFlag} />
                }
              />
            </Menu>
          }
        >
          <Icon
            width={ICON_SIZE}
            height={ICON_SIZE}
            icon={currentLanguageIcon}
          />
        </Dropdown>
      </div>

      <div className="main-header__center">
        <Search
          placeholder={t('general.search')}
          onSearch={handleSearch}
          enterButton
        />
      </div>

      <div className="main-header__right">
        <ExternalNavLink to="https://www.linkedin.com/in/javier-rodr%C3%ADguez-posada-68086b123/">
          <Button
            icon={
              <Icon width={ICON_SIZE} height={ICON_SIZE} icon={linkedinIcon} />
            }
            type="text"
          />
        </ExternalNavLink>
        <ExternalNavLink to="https://github.com/jrposada/">
          <Button
            icon={
              <Icon width={ICON_SIZE} height={ICON_SIZE} icon={githubIcon} />
            }
            type="text"
          />
        </ExternalNavLink>
        <ExternalNavLink to="https://javiropos.visualstudio.com/">
          <Button
            icon={
              <Icon width={ICON_SIZE} height={ICON_SIZE} icon={azureIcon} />
            }
            type="text"
          />
        </ExternalNavLink>
        {/* <Switch
          onChange={toggleDarkMode}
          checkedIcon={sunIcon}
          uncheckedIcon={moonIcon}
        ></Switch> */}
      </div>
    </div>
  )
}

export default withTranslation()(MainHeader)
export type { MainHeaderProps }
