import { Typography } from 'antd'
import { WithTranslation, withTranslation } from 'react-i18next'

import './welcome-message.scss'

interface WelcomeMessageProps extends WithTranslation {}
function WelcomeMessage({ t }: WelcomeMessageProps) {
  return (
    <div className="welcome-message">
      <div className="welcome-message__content">
        <Typography className="welcome-message__description">
          <Typography.Title level={2}>{t('welcome.title')}</Typography.Title>
          <Typography.Title level={4}>{t('welcome.subtitle')}</Typography.Title>
          <Typography.Paragraph>
            {t('welcome.presentation')}
          </Typography.Paragraph>
        </Typography>
        <div>
          <img
            alt="personal"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </div>
      </div>
    </div>
  )
}

export default withTranslation()(WelcomeMessage)
