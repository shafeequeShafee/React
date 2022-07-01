import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        // another method ref create cheyyaan , call back ref
        this.callBackRef = null
        this.setCallBackRef = (element) => {
            this.callBackRef = element
        }
        this.state = {

        }
    }
    componentDidMount() {
        // console.log('inputRef', this.inputRef)
        // this.inputRef.current.focus()
        if(this.callBackRef){
            this.callBackRef.focus()
        }
    }
    
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <div>
                    <h6>Input ref</h6>
                    <input type='text' ref={this.inputRef} />
                    <button onClick={this.clickHandler}>Click</button>
                </div>
                <div>
                    <h6>callback ref ref</h6>
                    <input type='text' ref={this.setCallBackRef} />
                    <button onClick={this.clickHandler}>Click</button>
                </div>
            </div>
        )
    }
}

export default RefsDemo
