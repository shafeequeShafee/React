import React, { Component } from 'react'

class ConditionRendering extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // #############  conditional rendering 1st  approach if else
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <h4> if else conditional rendering</h4>
        //             <h5>Welcome Anu</h5>
        //         </div>
        //     )
        // }
        // else {
        //     return (
        //         <div>
        //             <h4> if else conditional rendering</h4>
        //             <h5>Welcome guest</h5>
        //         </div>

        //     )

        // }


        // ###########   conditional rendering 2nd approach = element varriable approach
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>
        //         <h4> element varriable approach</h4>
        //         <h5>Welcome Anu</h5>
        //     </div>
        // }
        // else {
        //     message = <div>
        //         <h4> element varriable approach</h4>
        //         <h5>Welcome guest</h5>
        //     </div>
        // }

        // return(
        //     <div>
        //         {message}
        //     </div>
        // )

        // ########  conditional rendering 3rd approach = ternary conditional operator
        // return(
        //     this.state.isLoggedIn ?
        //     <div>
        //         <h4> ternary conditional operator approach</h4>
        //         <h5>Welcome Anu</h5>
        //     </div>  :
        //     <div>
        //     <h4> ternary conditional operator approach</h4>
        //     <h5>Welcome guest</h5>
        // </div>    
        // )

        // ########  conditional rendering 4th approach = short circuit operator approach
       return this.state.isLoggedIn && <div>
            <h4> short circuit operator approach</h4>
            <h5>Welcome Anu</h5>
        </div>
    }
}

export default ConditionRendering
