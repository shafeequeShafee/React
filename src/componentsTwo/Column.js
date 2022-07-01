import React from 'react'

function Column() {
    const names=['anu','mandu','sfq','kunju']
    return (
        <React.Fragment>
            {
                names.map(name=>(
                    <React.Fragment key={name}>
                        <td>{name}</td>
                    </React.Fragment>
                ))
            }
        </React.Fragment>
    )
}

export default Column
