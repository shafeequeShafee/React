import React, { Component } from 'react'

export class EventHandlingClass extends Component {
    clickHandler(){
        alert('click class event')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>click me</button>
            </div>
        )
    }
}

export default EventHandlingClass
