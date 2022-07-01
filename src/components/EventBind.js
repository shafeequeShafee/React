import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }

        this.changeMsg=this.changeMsg.bind(this)
    }
    changeMsg(){  // event handler il this keyword undefined aanu
        this.setState({
            message:'Good Bye'
        })
    }

    changeMsgNew=()=>{
        this.setState({
            message:'   Good bye new'
        })
    }

    
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.changeMsg.bind(this)}>1st approach Click</button>
                <button onClick={()=>this.changeMsg()}>2nd approach Click</button>
                <button onClick={this.changeMsg}>3rd approach Click // best </button>
                <button onClick={this.changeMsgNew}>4th approach Click // arrow best </button>
            </div>
        )
    }
}

export default EventBind
