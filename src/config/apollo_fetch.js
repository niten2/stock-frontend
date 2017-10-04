import { createApolloFetch } from 'apollo-fetch'
import settings from "config/settings"
import authProvider from "config/auth_provider"

const addToken = (req, next) => {
  if (!req.options.headers) {
    req.options.headers = {}
  }
  req.options.headers.authorization = authProvider.fetchToken()
  next()
}

export const apolloFetch = createApolloFetch({ uri: settings.urlBackend })

apolloFetch.use(addToken)
