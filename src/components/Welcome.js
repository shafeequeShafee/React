import { Component } from "react";

class Welcome extends Component {
    // render() {
    //     return <h1>Hi,  Welcome {this.props.name}, Hi,Welcome  {this.props.nikename}</h1>
    // }

    // destructuring props and states
    render() {
        const {name,nikename}=this.props
        // const {state1,state2}=this.state
        return <h4>Hi,  Welcome {name}, Hi,Welcome  {nikename}</h4>
    }
}
export default Welcome