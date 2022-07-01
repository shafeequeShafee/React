import React from 'react'

function Inline() {
    const heading={
        fontSize:'20px',
        color:'#1df53a'
    }
    const headingBg={
        backgroundColor:'#080921'
    }
    return (
        <div>
            <h5>Inline Style</h5>
            <h5>#####################################</h5>
            <h5 style={heading}>Inline object style</h5>
            <h5 style={{...heading ,...headingBg}}>two  object inline style</h5>
            <h5 style={{color:'black',backgroundColor:'white'}}>inline style</h5>
            <h5 className='error'>Error In inline component, import in app.js or parent component// child components innu apply cheyyam</h5>
            {/* <h5 className={styles.sucess}>Sucess</h5> */}
            <h5>Module njmmakku agannae use cheyyaan pattooolla</h5>
        </div>
    )
}

export default Inline
