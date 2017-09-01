import {combineReducers} from 'redux'
import messages from './messages'

const messagesApp = combineReducers({
  messages
})

export default messagesApp