import React, { Component } from 'react'
import ComponentE from './ComponentE'
import UserContext from './UserContext'

class ComponentD extends Component {
    static  contextType=UserContext
    render() {
        return (
            <div>
                <h6>Component E imported in component D</h6> 
                <ComponentE/>   
                <h6>Component D context {this.context}</h6> 
            </div>
        )
    }
}
// ComponentD.contextType=UserContext
export default ComponentD
