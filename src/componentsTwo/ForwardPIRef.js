import React, { Component } from 'react'
import ForwardIRef from './ForwardIRef'

class ForwardPIRef extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.inputRef=React.createRef()
    }
    clickHandler=()=>{
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <ForwardIRef ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ForwardPIRef
