import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              posts:[],
              errorMsg:''
         }
     }
     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(response =>{
             console.log('response',response)
             this.setState({
                 posts:response.data
             })
         })
         .catch(error=>{
             console.log('error',error)
             this.setState({
                 errorMsg: 'Error retreiving Data'
             })
         })
     }
     
    render() {
        const {posts,errorMsg}=this.state
        return (
            <div>
                <h4>List Of Post</h4>
                {
                    posts.length ? 
                    posts.map(post =><h6 key={post.id}>{post.title}</h6>) : null
                }
                {
                  errorMsg ? <h6>{errorMsg}</h6> : null
                }
            </div>
        )
    }
}

export default PostList
