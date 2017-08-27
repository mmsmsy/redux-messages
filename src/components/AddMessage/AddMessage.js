// dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux'
// components
import { addMessage } from '../../actions/messages'

const AddMessage = ({addMessage, changeMessage}) => (
  <div className='add-message'>
    <form onSubmit={addMessage}>
      <label>
        Message
        <input type='text' onChange={changeMessage}/>
      </label>
    </form>
  </div>
)
export default AddMessage
