import React, { Component } from 'react'

class RenderProps extends Component {
    render() {
        return (
            <div>
              {this.props.render(false)}
            </div>
        )
    }
}

export default RenderProps
