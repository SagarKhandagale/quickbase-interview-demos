import React from 'react'

const SubmitResetForm = (props) => {
    return (
        <div className='row even-row'>
            <div className="column-left"><button className='button' type='submit'>Save Changes</button></div>
            <div className="column-right"><button className='button' style={{ color: 'red' }} onClick={props.reset}>Cancel</button></div>
        </div>
    )
}

export default SubmitResetForm
