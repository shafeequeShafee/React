import React from 'react'

function MemoComp({name}) {
    console.log('name',name)
    console.log('########   Memo Comp Render  ########')
    return (
        <div>
           my name is  {name} in memo
        </div>
    )
}

export default React.memo(MemoComp)
