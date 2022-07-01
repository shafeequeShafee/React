import React from 'react'
import '../components/myStyle.css'

function Stylesheet(props) {
    let className=props.primary ? 'primary' : ''
    return (
        <div>
            <h5>Regular stylesheet</h5>
            <h5>#####################################</h5>
            <h5 className='primary'>Stylesheet</h5>
            <h5 className='primary'>Stylesheet</h5>
            <h5 className={className}>Based on props</h5>
            <h5 className={`primary font-xl`}>Multiple class</h5>
            <h5 className={`${className} font-xl`}>multiple class with props</h5>
        </div>
    )
}

export default Stylesheet
