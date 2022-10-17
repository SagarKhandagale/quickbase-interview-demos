import React from 'react'

const LabelForm = (props) => {
    
    const handleLabelChange = (event) => {
        props.setLabel(event.target.value);
    }

    return (
        <div id='label'>
            <label> Label </label>
            <input type='text' value={props.label} onChange={handleLabelChange} required />
        </div>
    )
}

export default LabelForm
