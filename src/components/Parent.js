import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ParentName:'Parent'
        }
        this.greetParent=this.greetParent.bind(this)
        this.greetwithParameter=this.greetwithParameter.bind(this)
    }
    greetParent(){
        // alert('Hello'+this.state.ParentName)
         alert(`hello ${this.state.ParentName}`)
    }
    greetwithParameter(childName){
        alert(`hello ${this.state.ParentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <Child greetHandler={this.greetParent}  greetHandlerParameter={this.greetwithParameter}/>   
            </div>
        )
    }
}

export default Parent
