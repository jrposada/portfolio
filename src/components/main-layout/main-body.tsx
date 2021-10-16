import { Route, Redirect, Switch } from 'react-router-dom'

import WelcomePage from 'pages/welcome/welcome-page'
import RouteNotFound from 'components/place-holders/route-not-found'

function MainBody() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/welcome" />
      </Route>
      <Route exact path="/welcome">
        <WelcomePage />
      </Route>
      <Route exact>
        <RouteNotFound />
      </Route>
    </Switch>
  )
}

export default MainBody
