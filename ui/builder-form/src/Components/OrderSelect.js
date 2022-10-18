import React from 'react'

const OrderSelect = (props) => {

    const handleOrderChange = (event) => {
        let textArea = document.getElementById('choice-select');
        props.setOrderAlpha(!props.orderAlpha);
        if (event.target.checked && textArea.value!== null) {
            let lines = textArea.value.split("\n");
            const caseInSensitiveCompare = (a,b) => a.toLowerCase().localeCompare(b.toLowerCase());
            lines.sort(caseInSensitiveCompare);
            textArea.value = lines.filter(x=>x!=="").join("\n");
        }
        // props.setOrderAlpha(!props.orderAlpha);
        // if (event.target.value) {
        //     const choicesText = document.getElementById('choice-select');
        //     props.sortChoices(choicesText);
        // }
    }

    return (
        <div id='order' className='row'>
            <div className="column-left"><label>Order:</label></div>
            <div className="column-right"><input type='checkbox' name='order-alpha' checked={props.orderAlpha} onChange={handleOrderChange} />
            <label>Display choices in alphabetical</label></div>
        </div>
    )
}

export default OrderSelect
