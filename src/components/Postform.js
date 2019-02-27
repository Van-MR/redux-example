import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'


class Postform extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       title:'',
       body:''
    }
  }

  handleChange = e => {
       this.setState({
         [e.target.name] : e.target.value
       })
  }

  handleSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    this.props.createPost(post)

    this.setState({
      title:'',
      body:''
    })
  }


  render () {
     return(
        <div>
           <h1>Add Post</h1>
           <form onSubmit={this.handleSubmit}>
              <div>
                <label>Title:</label><br/>
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}   />
              </div>
              <div>
                <label>Body:</label><br/>
                <textarea
                  name="body"
                  value={this.state.body}
                  onChange={this.handleChange} />
              </div>
              <br/>
              <button type="submit">Submit</button>
           </form>
        </div>
     )
  }
}

Postform.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null,{ createPost })(Postform);
