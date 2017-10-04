export const logger = store => next => action => {
  let result = next(action)
  console.log('next state', store.getState())
  return result
}
