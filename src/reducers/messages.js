import uuid from 'uuid'
import {fromJS} from 'immutable'

const initialState = fromJS({
  currentMessage: '',
  messages: []
})

const messages = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return state.update('messages', messages => messages.push({
        id: uuid(),
        text: state.get('currentMessage')
      }));
    case 'CHANGE_MESSAGE':
      return state.set('currentMessage', action.currentMessage)
    default:
      return state
  }
}

export default messages