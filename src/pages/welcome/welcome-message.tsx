import { WithTranslation, withTranslation } from 'react-i18next'

interface WelcomeMessageProps extends WithTranslation {}
function WelcomeMessage({ t }: WelcomeMessageProps) {
  return <>{t('welcome.message')}</>
}

export default withTranslation()(WelcomeMessage)
