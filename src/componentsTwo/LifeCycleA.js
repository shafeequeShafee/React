import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'sfq',
            isLoggedIn: true
        }
        console.log('LifeCycleA CONSTRUCTOR()')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps()')
        return null
    }
    componentDidMount() {
        console.log('LifeCycleA componentDidMount()')
    }
    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate()')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate()')
        return null
    }
    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate()')
    }
    componentWillUnmount() {
        console.log('LifeCycleA componentWillUnmount()')
    }
    ChangeState = () => {
        this.setState({
            name: 'Anu',
        })
    }
    ChangeUnmount= () => {
        this.setState({
            isLoggedIn: false
        })
    }
    render() {
        console.log('LifeCycleA render()')
        return this.state.isLoggedIn && <div>
            LifeCycleA
            <h5>Welcome {this.state.name}</h5>
            <button onClick={this.ChangeState}>UpdateState</button>
            <button onClick={this.ChangeUnmount}>Unmount</button>
            <LifeCycleB />
        </div>

        
    }
}

export default LifeCycleA
