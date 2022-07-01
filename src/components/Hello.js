import React from "react"

const Hello =()=>{
    // return (
        // using JSX
        // <div className='dumyclass'>
        //     <h4>Hello sfq, Are you feel good</h4>
        // </div>
    // )


    // without jsx
    // return  React.createElement('div',null,'Hello sfq, Are you feel good')
    // null properties aanu, ath njammak key value pair aati kodukkaam
    // just class koduthallum mathi
    return  React.createElement(
        'div',null,
        React.createElement('h4',{id:'hello',className:'dumyclass'},'Hello sfq, Are you feel good'))
}
export default Hello