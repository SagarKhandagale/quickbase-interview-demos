import React from 'react'

const LabelForm = (props) => {
    
    const handleLabelChange = (event) => {
        props.setLabel(event.target.value);
    }

    return (
        <div id='label' className='row'>
            <div className="column-left"><label> Label </label></div>
            <div className="column-right"><input className='textbox' type='text' value={props.label} onChange={handleLabelChange} required /></div>
        </div>
    )
}

export default LabelForm
