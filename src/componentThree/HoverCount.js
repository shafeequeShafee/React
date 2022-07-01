import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

class HoverCount extends Component {
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
                <h6 onMouseOver={incrementCount}>{this.props.name} Hover {count} times</h6>
                props pass cheyumbol hoc yil spread operator use cheyannam, athupollae
                hoc yilleku parameter pass cheyyanum pattum
            </div>
        )
    }
}

export default UpdatedComponent(HoverCount,10)
