import React from "react";

const LargeTableData = ({el}) => {
    console.log(el)
    return (
        // props.map((el, i) => (
        // <td >{el}</td>
        // ))
        // -------------------------
        
        el.map((element, index) => (
            // console.log(index + '    ' + element)
            <tr key={index}>
                {

                    element.map((el, i) => (
                        <td key={i}>{el}</td>
                    ))
                }
            </tr>
        ))
        
        // -------------------------
        
        // ''
    );
}

export default LargeTableData