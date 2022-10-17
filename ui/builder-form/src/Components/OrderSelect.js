import React from 'react'

const OrderSelect = (props) => {

    const handleOrderChange = (event) => {
        props.setOrderAlpha(!props.orderAlpha);
        if (event.target.value) {
            const choicesText = document.getElementById('choice-select');
            props.sortChoices(choicesText);
        }
    }

    return (
        <div id='order'>
            <label>Order:</label>
            <input type='checkbox' name='order-alpha' checked={props.orderAlpha} onChange={handleOrderChange} />
            <label>Display choices in alphabetical</label>
        </div>
    )
}

export default OrderSelect
