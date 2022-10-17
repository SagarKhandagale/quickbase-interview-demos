import React, { useState } from 'react'
import axios from 'axios';

const FieldBuilder = () => {

    const [label, setLabel] = useState('');
    const [type, setType] = useState('multi');
    const [reqVal, setReqVal] = useState(true);
    const [defVal, setDefVal] = useState('');
    const [choices, setChoices] = useState('');
    const [order, setOrder] = useState('select');

    const postSubmit = (e) => {
        e.preventDefault();
        // var label = document.getElementById('label').value;
        // var type = document.getElementById('type').value;
        // var choices = document.getElementById('choices').value;
        // var defaultVal = document.getElementById('default').value;
        // var order = document.getElementById('order').value;
    
        axios.post('http://www.mocky.io/v2/566061f21200008e3aabd919', {
            'label':label,
            'type':type,
            'choices':JSON.stringify(choices),
            'default':defVal,
            'order':order
        }).then(result => {
            console.log(result)
        }).catch(err => {
            console.log(err)
        });
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

    const handleChoices = (event) => {
        setChoices(event.target.value);
    }

    const handleOrderChange = (event) => {
        setOrder(event.target.value);
        if (event.target.value === 'alphabetical') {
            const choicesText = document.getElementById('choice-select');
            sortChoices(choicesText);
        }
    }

    const sortChoices = (choices) => {
        choices.value = choices.value.split('\n').sort().join('\n');
    }

    return (
        <div>
            <form onSubmit={postSubmit}>
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
                    <textarea style={{ resize: 'none', height: '100px', overflowY: 'scroll' }} id='choice-select' cols='30' rows='5' onChange={handleChoices}></textarea>
                </div>

                <div id='order'>
                    <label>
                        Order:
                        <select value={order} onChange={handleOrderChange}>
                            <option value='select'>select</option>
                            <option value='alphabetical'>Display choices in alphabetical</option>
                            <option value='test'>test</option>
                        </select>
                    </label>
                </div>

                <div>
                    <button type='submit'>Save Changes</button>
                    <input type='reset' value='Cancel' />
                </div>
            </form>
        </div>
    )
}

export default FieldBuilder
