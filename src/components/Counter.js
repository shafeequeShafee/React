import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increaseCount(){
       this.setState({
           count: this.state.count +1
       },()=>console.log('countCallbackfunction',this.state.count)) // call back function second parameter or argument,state object 1st parameter
       console.log('count',this.state.count)  // update cheyunnathinnu mumb annekil setState nnu shesham kodukkukkaa
    }
    increaseCountPrevious(){       //njammakku state nnae update cheyyenekil based on previous state
        this.setState((prevState,props)=>({  // functionnae argumentayi pass cheyyukkaa // function has acess to previous state which can be used to calculatethe new state
            count:prevState.count + 1 // function ntae first argument prvious state,ethintae second argument props object aanu
           // count:prevState.count + props.Addvalue
        }))
    }
    increamentFive(){
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
        this.increaseCount()
    }
    increamentFivePrevious(){
        this.increaseCountPrevious()
        this.increaseCountPrevious()
        this.increaseCountPrevious()
        this.increaseCountPrevious()
        this.increaseCountPrevious()
    }
    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <button onClick={()=>this.increaseCount()}>Increase count</button>
                <button onClick={()=>this.increamentFive()}>IncreamentFive</button>
                <button onClick={()=>this.increamentFivePrevious()}>increamentFivePrevious</button>
            </div>
        )
    }
}

export default Counter
