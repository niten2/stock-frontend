import React from 'react'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { history, configureStore } from 'store'
import { Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { configureClient } from 'config/apollo_client'
// import { loadConfig } from "actions/auth"

import Layout from 'components/shared/layout'
import Page404 from 'components/shared/page404'
import Login from 'components/login'
import Register from 'components/register'
import Profile from 'components/profile'
import Dashboard from 'components/dashboard'

export default () => {

  const store = configureStore()
  const client = configureClient()

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ApolloProvider store={store} client={client}>
          <Switch>

            <Layout exact path="/dashboard" name="Dashboard" component={Dashboard}/>
            <Layout exact path="/login" component={Login}/>
            <Layout exact path="/register" component={Register}/>
            <Layout exact path="/profile" component={Profile}/>

            <Redirect exact from="/" to="/dashboard"/>
            <Layout path="*" component={Page404}/>

          </Switch>
        </ApolloProvider>
      </ConnectedRouter>
    </Provider>
  )
}
