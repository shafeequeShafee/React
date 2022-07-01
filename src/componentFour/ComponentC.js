import React, { Component } from 'react'
import ComponentD from './ComponentD'

class ComponentC extends Component {
    render() {
        return (
            <div>
                <h6>Component D importaed in component C</h6>
                <ComponentD/>
            </div>
        )
    }
}

export default ComponentC
