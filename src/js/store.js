import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

let middleware = applyMiddleware(thunk)
export default createStore(reducer, middleware)
