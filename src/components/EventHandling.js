import React from 'react'

function EventHandling() {
    function clickHandler(){
        alert('click event')
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>   {/* event handler is function not a function call {clickHandler()} */}
        </div>
    )
}

export default EventHandling
