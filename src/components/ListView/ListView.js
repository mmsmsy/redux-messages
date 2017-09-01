// dependencies
import React, {Component} from 'react'
import {connect} from 'react-redux'
// components
import AddMessage from '../AddMessage/AddMessage'
// actions
import {addMessage, changeMessage} from '../../actions/messages'
// styles
import './ListView.css';

class ListView extends Component {
  render() {
    console.log(this.props.messages)
    let messages
    if (this.props.messages) {
      messages = this.props.messages.toJS().map(message => (
        <li key={message.id}>{message.text}</li>
      ))
    } else {
      messages = 'No messages'
    }

    return (
      <div className="list-view">
        <div className="list-view-header">
          {messages}
        </div>
        <AddMessage addMessage={this.props.addMessage} changeMessage={this.props.changeMessage}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages.get('messages')
})

const mapDispatchToProps = (dispatch) => ({
  addMessage: (event) => {
    event.preventDefault()
    dispatch(addMessage())
  },
  changeMessage: (event) => dispatch(changeMessage(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListView)
