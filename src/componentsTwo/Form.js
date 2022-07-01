import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             address:'',
             BestThings:''
        }
    }
    handleUsername =(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleAddress =(event)=>{
        this.setState({
            address:event.target.value
        })
    }
    handleSelect=(event)=>{
        this.setState({
            BestThings:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username}${this.state.address}${this.state.BestThings} `)
        // event.preventDefault();
        
    }
    
    render() {
        // const {username,address,BestThings}=this.state
        return (
            <div>
              <h4>Form</h4>
              <h6>##############</h6>  
              <form  onSubmit={this.handleSubmit}>
                  <div>
                     <label>userName:</label>
                     <input type='text' value={this.state.username} onChange={this.handleUsername}/>
                  </div>

                  <div>
                     <label>address:</label>
                     <textarea value={this.state.address} onChange={this.handleAddress}/>
                  </div>

                  <div>
                     <label>Best things</label>
                     <select value={this.state.BestThings} onChange={this.handleSelect}>
                         <option value='friends'>Friends</option>
                         <option value='travel'>travel</option>
                         <option value='food'>food</option>
                         <option value='someone'>someone</option>
                     </select>
                  </div>

                  <button type='submit'>Submit</button>
                  
              </form>
              <div>
                  <h6>username: {this.state.username}</h6>
                  <h6>address: {this.state.address}</h6> 
                  <h6>BestThings:{this.state.BestThings}</h6>
              </div>
            </div>
        )
    }
}

export default Form
