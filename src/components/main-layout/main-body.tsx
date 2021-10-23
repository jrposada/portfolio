import { Route, Redirect, Switch } from 'react-router-dom'

import WelcomePage from 'pages/welcome/welcome-page'
import RouteNotFound from 'components/place-holders/route-not-found'
import ProjectDetails from 'pages/project-details/project-details'

function MainBody() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/welcome" />
      </Route>
      <Route exact path="/welcome">
        <WelcomePage />
      </Route>
      <Route exact path="/project-details/:id">
        <ProjectDetails />
      </Route>
      <Route exact>
        <RouteNotFound />
      </Route>
    </Switch>
  )
}

export default MainBody
