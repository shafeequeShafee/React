import {Component} from "react";

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'message for visitor' 
        }
    }
    // ChangeMsg(){
    //    this.setState({
    //        message:'message for staffs'
    //    })
    // }
    ChangeMsg=()=>{
        this.setState({
            message:'message for staffs'
        })
    }
   render(){
       return(
           <div>
              <h4>Hi, {this.state.message}</h4>
              <button onClick={()=>this.ChangeMsg()}>Change</button>
           </div>
          
       )
   }  
}
export default  Message 