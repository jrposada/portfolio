import Projects from './projects'
import WelcomeMessage from './welcome-message'

import './welcome-page.scss'

function WelcomePage() {
  return (
    <div className="welcome-page">
      <WelcomeMessage />
      <Projects />
    </div>
  )
}

export default WelcomePage
