import React, { useState } from 'react'

const FieldBuilder = () => {

    const [order, setOrder] = useState('alphabetical');
    const [label, setLabel] = useState('');
    const [type, setType] = useState('multi');
    const [reqVal, setReqVal] = useState(true);
    const [defVal, setDefVal] = useState('');

    const handleOrderChange = (event) => {
        setOrder(event.target.value);
    }

    const handleLabelChange = (event) => {
        setLabel(event.target.value);
    }

    const handleTypeSelect = (event) => {
        setType(event.target.value);
    }

    const handleReqValSelect = (event) => {
        setReqVal(!reqVal);
    }

    const handleDefValChange = (event) => {
        setDefVal(event.target.value);
    }

    return (
        <div>
            <form action='mailto:khandagale.s@northeastern.edu' method='post'>
                <div id='label'>
                    <label> Label </label>
                    <input type='text' value={label} onChange={handleLabelChange} required />
                </div>

                <div id='type'>
                    <label>Type:</label>
                    <input type='radio' name='type' value='multi' checked={type === 'multi'} onChange={handleTypeSelect} /><label>Multi-select</label>
                    <input type='radio' name='type' value='single' checked={type === 'single'} onChange={handleTypeSelect} /><label>Single-select</label>
                    <input type='checkbox' name='val-req' checked={reqVal} onChange={handleReqValSelect} /><label>Value is required</label>
                </div>

                <div id='default'>
                    <label> Default Value </label>
                    <input type='text' value={defVal} onChange={handleDefValChange} required />
                </div>

                <div id='choices'>
                    <label> Choices </label>
                    <textarea style={{ resize: 'none', height: '100px', overflowY: 'scroll' }} id='choice-select' cols='30' rows='5'></textarea>
                </div>

                <div id='order'>
                    <label>
                        Order:
                        <select value={order} onChange={handleOrderChange}>
                            <option value='alphabetical'>Display choices in alphabetical</option>
                            <option value='vegetable'>Vegetable</option>
                            <option value='meat'>Meat</option>
                        </select>
                    </label>
                </div>

                <div>
                    <input type='submit' value='Save Changes' />
                    <input type='reset' value='Cancel' />
                </div>
            </form>
        </div>
    )
}

export default FieldBuilder
