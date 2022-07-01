// import React, { Component } from 'react'
import React, { PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

// class ParentComp extends Component {
class ParentComp extends PureComponent{
    constructor(props) {
        super(props)
    
        this.state = {
             name:'sfq'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'sfq'
            })
        },2000)          // set interval acept two argument, 1st one arrow function
    }
    
    render() {
        console.log('########  Parent Comp Render  ########')
        return (
            <div>
                Parent Component
                pure component shallow compairing nadathum puthiya statae or props il difference ndo nnu, athayath update ndo nnu,
                indekil mathram ath update cheyyum or rerender cheyyum. illekil rerender cheyooolla
                <PureComp name={this.state.name}/>
                <RegularComp name={this.state.name}/>
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
