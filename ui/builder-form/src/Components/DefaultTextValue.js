import React from 'react'

const DefaultTextValue = (props) => {

    const handleDefValChange = (event) => {
        props.setDefVal(event.target.value);
    }

    return (
        <div id='default' className='row'>
            <div className="column-left"><label> Default Value </label></div>
            <div className="column-right"><input className='textbox' type='text' value={props.defVal} onChange={handleDefValChange} required /></div>
        </div>
    )
}

export default DefaultTextValue
