import React from 'react'

function ListRendering2({person}) {
    
    return (
        <div>
            <h4>I am {person.name},  i am {person.age} year old, i have skilled in {person.skill}</h4>
        </div>
    )
}

export default ListRendering2
