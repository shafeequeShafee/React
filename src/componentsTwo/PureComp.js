import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('########  Pure Comp Render  ########')
        return (
            <div>
                PureComponent
                <h6>my name is {this.props.name}</h6>
            </div>
        )
    }
}

export default PureComp

