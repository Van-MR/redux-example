import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

class Posts extends React.Component {
  componentWillMount() {
     console.log(this.props);
     this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }


  render () {
     const postItem = this.props.posts.map(item => {
         return(
           <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
           </div>
         )
     })
     return(
      <div>
         <h1>POSTS</h1>
         { postItem }
      </div>
     )
  }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost:state.posts.item
})

Posts.protoTypes = {
  fetchPosts:PropTypes.func.isRequired,
  posts:PropTypes.array.isRequired,
  newPost:PropTypes.object
}

export default connect(mapStateToProps,{ fetchPosts })(Posts);
