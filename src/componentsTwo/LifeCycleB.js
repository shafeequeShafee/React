import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'sfq'
        }
        console.log('LifeCycleB CONSTRUCTOR()')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps()')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleB componentDidMount()')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate()')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleB getSnapshotBeforeUpdate()') 
        return null
    }
    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate()')  
    }
    componentWillUnmount(){
        console.log('LifeCycleB componentWillUnmount()') 
    }
    render() {
        console.log('LifeCycleB render()')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifeCycleB
