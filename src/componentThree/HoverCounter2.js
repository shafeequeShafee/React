
import React, { Component } from 'react'

class HoverCounter2 extends Component {
    
    render() {
        const {count,incrementCount}=this.props
        return (
            <div>
              <h6 onMouseOver={incrementCount} >Hover {count} Times</h6>  
            </div>
        )
    }
}

export default HoverCounter2

