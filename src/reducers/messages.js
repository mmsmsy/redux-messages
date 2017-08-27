import uuid from 'uuid'

const initialState = {
  currentMessage: '',
  messages: []
}

const messages = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return Object.assign({}, state, {
        messages: [
          ...state.messages,
          {
            id: uuid(),
            text: state.currentMessage
          }
        ]})
    case 'CHANGE_MESSAGE':
      return Object.assign({}, state, {
        currentMessage: action.currentMessage
      })
    default:
      return state
  }
}

export default messages