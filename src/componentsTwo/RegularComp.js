import React, { Component } from 'react'

class RegularComp extends Component {
    render() {
        console.log('########  Regular Comp Render  ########')
        return (
            <div>
                Regular component
                <h6>my name is {this.props.name}</h6>
            </div>
        )
    }
}

export default RegularComp
