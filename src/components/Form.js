import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          username: '',
          comments: '',
          topic:'react'
       }
     }
     handelUserNameChange=(event)=>{
this.setState({
    username:event.target.value
})
     }
     handelCommentChange=(event)=>{
this.setState({
    comments:event.target.value
})     }
handelTopicChange=(event)=>{
    this.setState({
        topic:event.target.value
    })

}
handelSubmit=(event)=>{
    alert(`${this.state.username} ${this.state.comments}${this.state.topic}`)
   event.preventDefult()
}
  render() {
    return (
      <form onSubmit={this.handelSubmit}>
          <div>
              <label>UserName:</label>
              <input type="text" value={this.state.username}
               onChange={this.handelUserNameChange} />
          </div>
          <div>
              <label>Comment</label>
              <textarea value={this.state.comments}
              onChange={this.handelCommentChange} ></textarea>
          </div>
          <div>
              <label>Topic</label>
              <select value={this.state.topic} onChange={this.handelTopicChange}>
                  <option value="react">React</option>
                  <option value="angular">Angular</option>
                  <option value="vue">Vue</option>
              </select>
          </div>
          <button type="submit">submit</button>
      </form>
    )
  }
}

export default Form
