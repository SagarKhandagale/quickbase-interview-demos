import React from 'react'

const DefaultTextValue = (props) => {

    const handleDefValChange = (event) => {
        props.setDefVal(event.target.value);
    }

    return (
        <div id='default'>
            <label> Default Value </label>
            <input type='text' value={props.defVal} onChange={handleDefValChange} required />
        </div>
    )
}

export default DefaultTextValue
