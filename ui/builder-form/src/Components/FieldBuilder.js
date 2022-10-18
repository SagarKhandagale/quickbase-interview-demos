import React, { useState } from 'react'
import axios from 'axios';
import LabelForm from './LabelForm';
import TypeOfSelect from './TypeOfSelect';
import DefaultTextValue from './DefaultTextValue';
import ChoicesText from './ChoicesText';
import OrderSelect from './OrderSelect';
import SubmitResetForm from './SubmitResetForm';

const FieldBuilder = () => {

    const [label, setLabel] = useState('');
    const [type, setType] = useState('multi');
    const [reqVal, setReqVal] = useState(true);
    const [defVal, setDefVal] = useState('');
    const [orderAlpha, setOrderAlpha] = useState(false);


    const postSubmit = (e) => {
        e.preventDefault();

        checkDefInChoices();

        let choicesArr = document.getElementById('choice-select').value.split('\n');

        let data = {
            "label": label,
            "select-type": type,
            "required": reqVal,
            "choices": choicesArr,
            "displayAlpha": orderAlpha,
            "default": defVal
        }

        console.log('FieldBuilder submitted data');
        console.log(data);

        axios.post('http://www.mocky.io/v2/566061f21200008e3aabd919', {
            data
        }).then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        });
    }

    const checkDefInChoices = () => {
        let choicesText = document.getElementById('choice-select');
        let choicesArr = choicesText.value.split('\n');
        choicesArr = choicesArr.filter((val) => { return val !== '' });

        if (!choicesArr.includes(defVal)) {
            if (choicesArr.length >= 5) {
                alert('Default choice cannot be added because choices list is full');
            }
            else {
                choicesArr.push(defVal);
                document.getElementById('choice-select').value = choicesArr.join('\n');
                alert('Default choice has been added to the choices list');
            }
        }
    }

    const sortChoices = (choices) => {
        let choicesArr = choices.value.split('\n');
        choicesArr = choicesArr.filter((val) => { return val !== '' });
        choices.value = choicesArr.sort().join('\r\n');
    }

    const reset = () => {
        setLabel('');
        setType('multi');
        setReqVal(true);
        setDefVal('');
        setOrderAlpha(false);
        let choicesText = document.getElementById('choice-select');
        choicesText.value = '';
    }

    return (
        <div className='container'>
            <h1 className='title'>Field Builder</h1>
            <form onSubmit={postSubmit}>

                <LabelForm label={label} setLabel={setLabel} />
                <TypeOfSelect type={type} reqVal={reqVal} setType={setType} setReqVal={setReqVal} />
                <DefaultTextValue defVal={defVal} setDefVal={setDefVal} />
                <ChoicesText orderAlpha={orderAlpha} sortChoices={sortChoices} />
                <OrderSelect orderAlpha={orderAlpha} setOrderAlpha={setOrderAlpha} sortChoices={sortChoices} />
                <SubmitResetForm reset={reset} />

            </form>
        </div>
    )
}

export default FieldBuilder
