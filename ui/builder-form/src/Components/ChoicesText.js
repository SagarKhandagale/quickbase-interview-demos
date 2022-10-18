import React from 'react'

const LINES_LIMIT = 5;

const ChoicesText = (props) => {

    const handleChoices = (event) => {
    //     const choicesText = document.getElementById('choice-select');
    //     let lines = choicesText.value.split("\n");
    //     const lineNum = choicesText.value.substr(0, choicesText.selectionStart).split("\n").length;

        
    //     if(event.key === "Enter") {
    //         console.log(lines, lineNum);
    //         if(lines.length > LINES_LIMIT) {
    //             alert(`Add ${lineNum} Number of entries exceeds ${LINES_LIMIT}`);
    //             console.log(lines);
    //             lines.splice(lineNum - 1, 1);
    //             console.log(lines);
    //         }
    //         const uniqueLines = [];
    //         let seen = new Set();
    //         for(let item of lines) {
    //             item = item.trim();
    //             if(item==="") continue;

    //             if(seen.has(item.toLowerCase())) {
    //                 alert(`${item} is duplicate`);
    //             }
    //             else{
    //                 uniqueLines.push(item);
    //                 seen.add(item.toLowerCase());
    //             }
    //         }

    //         lines = uniqueLines;
    //     }
    //     document.getElementById("choice-select").value = lines.join("\n");
    // }
    //     return (
    //     <div id='choices' className='row even-row'>
    //         <div className="column-left"><label> Choices </label></div>
    //         <div className="column-right"><textarea id='choice-select' cols='30' rows='5' onKeyDown={handleChoices}></textarea></div>
    //     </div>
    // )
        // get the textarea
        const choicesText = document.getElementById('choice-select');
        var totalLines = choicesText.value.split('\n');
        var lineNum = choicesText.value.substr(0, choicesText.selectionStart).split("\n").length;
        var linesTillCursor = choicesText.value.substr(0, choicesText.selectionStart).split("\n");
        var choiceAdded = linesTillCursor[lineNum - 1].trim();

        let notEmpty = val => val !== ''

        linesTillCursor.splice(lineNum - 1, 1);

        if (event.key === 'Enter') {
            const uniqueLines = [];
            let seen = new Set();
            for(let item of totalLines) {
                item = item.trim();
                if(seen.has(item.toLowerCase())) {
                    alert(`${item} is duplicate`);
                }
                else{
                    uniqueLines.push(item);
                    seen.add(item.toLowerCase());
                }
            }
            totalLines = uniqueLines;
            choicesText.value = totalLines.join("\n");


            // logic for textarea validations
            // get the line number where you are
            // check the value at that line 
            // if value is duplicate remove that line and set the cursor on same line
            // if not duplicate then check if total lines are 50 or grater 
            // if greater then remove that line

            // if entered value is duplicate
            // if (linesTillCursor.includes(choiceAdded)) {
            //     totalLines = totalLines.map(x=>x.trim()).map(x => x.toUpperCase())
            //     totalLines.splice(lineNum - 1, 1);
            //     totalLines = totalLines.filter(notEmpty);
            //     console.log(totalLines);
            //     choicesText.value = totalLines.join('\n');
            //     alert('Choice already present');
            // }
            if (totalLines.length > 5) {

                // if cursor is at last line then only remove that value else keep the value and just show the alert
                if (totalLines.length === lineNum) {
                    totalLines.splice(lineNum - 1, 1);
                }

                totalLines = totalLines.filter(val => val !== '');
                choicesText.value = totalLines.join('\n');
                alert('Choices cannot be more than 5');
            }
            // else {
            //     totalLines = totalLines.filter(val => val !== '');
            //     choicesText.value = totalLines.join('\n');
            // }

            // if order alphabetically is selected in order dropdown then to sort values at runtime
            if (props.orderAlpha) {
                props.sortChoices(choicesText);
            }
        }
    }
    
    return (
        <div id='choices' className='row even-row'>
            <div className="column-left"><label> Choices </label></div>
            <div className="column-right"><textarea id='choice-select' cols='30' rows='5' onKeyDown={handleChoices}></textarea></div>
        </div>
    )
}


export default ChoicesText
