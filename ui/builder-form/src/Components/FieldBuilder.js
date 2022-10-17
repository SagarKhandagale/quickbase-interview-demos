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

        var choicesArr = document.getElementById('choice-select').value.split('\n');

        var data = {
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
        var choicesText = document.getElementById('choice-select')
        var choicesArr = choicesText.value.split('\n');
        choicesArr = choicesArr.filter((val) => { return val !== '' });

        if (!choicesArr.includes(defVal)) {
            if (choicesArr.length >= 5) {
                alert('Default choice cannot be added because choices list is full');
            }
            else {
                choicesArr.push(defVal);
                document.getElementById('choice-select').value = choicesArr.join('\n');
                // setChoices(choicesText.value);
                alert('Default choice has been added to the choices list');
            }
        }
    }

    // const handleLabelChange = (event) => {
    //     setLabel(event.target.value);
    // }

    // const handleTypeSelect = (event) => {
    //     setType(event.target.value);
    // }

    // const handleReqValSelect = (event) => {
    //     setReqVal(!reqVal);
    // }

    // const handleDefValChange = (event) => {
    //     setDefVal(event.target.value);
    // }

    // const handleChoices = (event) => {

    //     // get the textarea
    //     const choicesText = document.getElementById('choice-select');
    //     var totalLines = choicesText.value.split('\n');
    //     var lineNum = choicesText.value.substr(0, choicesText.selectionStart).split("\n").length;
    //     var linesTillCursor = choicesText.value.substr(0, choicesText.selectionStart).split("\n");
    //     var choiceAdded = linesTillCursor[lineNum - 1];
    //     linesTillCursor.splice(lineNum - 1, 1);

    //     if (event.key === 'Enter') {
    //         // logic for textarea validations
    //         // get the line number where you are
    //         // check the value at that line 
    //         // if value is duplicate remove that line and set the cursor on same line
    //         // if not duplicate then check if total lines are 50 or grater 
    //         // if greater then remove that line

    //         // if entered value is duplicate
    //         if (linesTillCursor.includes(choiceAdded)) {
    //             totalLines.splice(lineNum - 1, 1);
    //             totalLines = totalLines.filter((val) => { return val !== '' });
    //             choicesText.value = totalLines.join('\n');
    //             alert('Choice already present');
    //         }
    //         else if (totalLines.length > 5) {

    //             // if cursor is at last line then only remove that value else keep the value and just show the alert
    //             if (totalLines.length === lineNum) {
    //                 totalLines.splice(lineNum - 1, 1);
    //             }

    //             totalLines = totalLines.filter((val) => { return val !== '' });
    //             choicesText.value = totalLines.join('\n');
    //             alert('Choices cannot be more than 5');
    //         }

    //         // if order alphabetically is selected in order dropdown then to sort values at runtime
    //         if (orderAlpha) {
    //             sortChoices(choicesText);
    //         }

            
    //         // setChoices(choicesText.value);
    //     }
    // }

    // const handleOrderChange = (event) => {
    //     setOrderAlpha(!orderAlpha);
    //     if (event.target.value) {
    //         const choicesText = document.getElementById('choice-select');
    //         sortChoices(choicesText);
    //     }
    // }

    const sortChoices = (choices) => {
        var choicesArr = choices.value.split('\n');
        choicesArr = choicesArr.filter((val) => { return val !== '' });
        choices.value = choicesArr.sort().join('\r\n');
    }

    return (
        <div>
            <form onSubmit={postSubmit}>
                
                <LabelForm label={label} setLabel={setLabel}/>
                <TypeOfSelect type={type} reqVal={reqVal} setType={setType} setReqVal={setReqVal}/>
                <DefaultTextValue defVal={defVal} setDefVal={setDefVal} />
                <ChoicesText orderAlpha={orderAlpha} sortChoices={sortChoices} />
                <OrderSelect orderAlpha={orderAlpha} setOrderAlpha={setOrderAlpha} sortChoices={sortChoices} />
                <SubmitResetForm />

            </form>
        </div>
    )
}

export default FieldBuilder
