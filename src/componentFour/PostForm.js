import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:'',
             errorMsg:''
        }
    }
    changeHandler =(e)=>{
       this.setState({[e.target.name]:e.target.value})
    }
    submitHandler =(e)=>{
        e.preventDefault();
        console.log('stateObject',this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response =>{
            console.log('responseDataPost',response)
        })
        .catch(error=>{
            console.log('errorDataPost',error)
            this.setState({
                errorMsg: 'Error postingdata Data'
            })
        })
    }
    
    render() {
        const {userId,title,body,errorMsg}= this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandler}></input>
                    </div>

                    <button>Submit</button>
                </form>
                {
                  errorMsg ? <h6>{errorMsg}</h6> : null
                }

            </div>
        )
    }
}

export default PostForm
