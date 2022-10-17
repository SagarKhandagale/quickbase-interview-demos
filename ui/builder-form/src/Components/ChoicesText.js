import React from 'react'

const ChoicesText = (props) => {

    const handleChoices = (event) => {

        // get the textarea
        const choicesText = document.getElementById('choice-select');
        var totalLines = choicesText.value.split('\n');
        var lineNum = choicesText.value.substr(0, choicesText.selectionStart).split("\n").length;
        var linesTillCursor = choicesText.value.substr(0, choicesText.selectionStart).split("\n");
        var choiceAdded = linesTillCursor[lineNum - 1];
        linesTillCursor.splice(lineNum - 1, 1);

        if (event.key === 'Enter') {
            // logic for textarea validations
            // get the line number where you are
            // check the value at that line 
            // if value is duplicate remove that line and set the cursor on same line
            // if not duplicate then check if total lines are 50 or grater 
            // if greater then remove that line

            // if entered value is duplicate
            if (linesTillCursor.includes(choiceAdded)) {
                totalLines.splice(lineNum - 1, 1);
                totalLines = totalLines.filter((val) => { return val !== '' });
                choicesText.value = totalLines.join('\n');
                alert('Choice already present');
            }
            else if (totalLines.length > 5) {

                // if cursor is at last line then only remove that value else keep the value and just show the alert
                if (totalLines.length === lineNum) {
                    totalLines.splice(lineNum - 1, 1);
                }

                totalLines = totalLines.filter((val) => { return val !== '' });
                choicesText.value = totalLines.join('\n');
                alert('Choices cannot be more than 5');
            }

            // if order alphabetically is selected in order dropdown then to sort values at runtime
            if (props.orderAlpha) {
                props.sortChoices(choicesText);
            }
            
            // setChoices(choicesText.value);
        }
    }
    
    return (
        <div id='choices'>
            <label> Choices </label>
            <textarea style={{ resize: 'none', height: '100px', overflowY: 'scroll' }} id='choice-select' cols='30' rows='5' onKeyDown={handleChoices}></textarea>
        </div>
    )
}

export default ChoicesText
