import React from 'react'

function Child(props) {
    return (
        <div>
            <h4>Parent llae methods child nnu vilikkunnu</h4>
            <button onClick={props.greetHandler}>Greet Parent</button>
            <h4> child nnu parentillekku parametrs pass cheyunnath arrow function syntax use cheyannam</h4>
            <button onClick={()=>props.greetHandlerParameter('Child')}>parameter</button>
        </div>
    )
}

export default Child
