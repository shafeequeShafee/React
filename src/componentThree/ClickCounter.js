import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    // incrementCount=()=>{
    //     this.setState(prevState=>{
    //         return { count:prevState.count +1}
    //     })
    // }
    
    render() {
        // const {count}=this.state
        const {count,incrementCount}=this.props
        return (
            <div>
                <button onClick={incrementCount}>{this.props.name} friend {this.props.friend} Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter,5)
