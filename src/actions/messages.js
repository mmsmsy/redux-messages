export const addMessage = () => ({
  type: 'ADD_MESSAGE',
})

export const changeMessage = (currentMessage) => ({
  type: 'CHANGE_MESSAGE',
  currentMessage
})