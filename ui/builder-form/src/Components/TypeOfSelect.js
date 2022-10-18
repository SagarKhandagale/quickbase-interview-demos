import React from 'react'

const TypeOfSelect = (props) => {

    const handleTypeSelect = (event) => {
        props.setType(event.target.value);
    }

    const handleReqValSelect = (event) => {
        props.setReqVal(!props.reqVal);
    }

    return (
        <div id='type' className='row even-row'>
            <div className="column-left"><label>Type:</label></div>
            <div className="column-right">
                <input type='radio' name='type' value='multi' checked={props.type === 'multi'} onChange={handleTypeSelect} /><label>Multi-select</label>
                <input type='radio' name='type' value='single' checked={props.type === 'single'} onChange={handleTypeSelect} /><label>Single-select</label>
            <br />
            <br />
                <input type='checkbox' name='val-req' checked={props.reqVal} onChange={handleReqValSelect} /><label>Value is required</label>
            </div>
        </div>
    )
}

export default TypeOfSelect
