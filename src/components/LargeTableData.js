import React from "react";

const LargeTableData = (el) => {
    console.log(el)
    const createRanderData = () => {
        let data = document.createElement('tr')
        el.forEach(element => {
            console.log(element)
            // data += `<td>${element}</td>`
            let td = document.createElement('td')
            td.innerText = element
            data.append(td)
        });
        console.log(data)
        return data
    }
    return (
        createRanderData()
        // props.map((el, i) => (
        // <td >{el}</td>
        // ))
        // -------------------------
        // <div>
        //     {
        //         el.forEach(element => {
        //             // console.log(element)
        //             <tr>Hello</tr>
        //         })
        //         // el.table_data.map((element, index) => (
        //         //     <tr key={index}>
        //         //         {
        //         //             element.map((el, i) => (
        //         //                 <td key={i}>{el}</td>
        //         //             ))
        //         //         }
        //         //     </tr>
        //         // ))
        //     }
        // </div>
    );
}

export default LargeTableData