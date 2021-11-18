import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router"
import { CSVLink } from "react-csv"
import { NavLink } from 'react-router-dom'

import RecycledList from 'react-recycled-scrolling'
import ImageRow from "./ImageRow";
import LargeTableData from "./LargeTableData";

const Page2 = () => {

    const history = useHistory();
    const [boxPlotDataColumn, setBoxPlotDataColumn] = useState([])
    const [boxPlotDataCount, setBoxPlotDataCount] = useState(0)

    const [csvSplitedData, setCsvSplitedData] = useState([])

    // useEffect(() => {
    //     console.log('useEffect')
    //     setBoxPlotDataColumn([])
    //     setBoxPlotDataCount(0)
    // }, []);

    const csvData = useSelector(state => state.csvTransection)
    console.log(csvData)
    // console.log(Array.isArray(csvData))
    // console.log(csvData.table_data)
    const numberList = []
    const imageList = []

    for (let i = 1; i <= 1000000; i++) {
        imageList.push({
            no: i,
            alt: `thumbnail of ${i}.jpg`,
            // url: `https://picsum.photos/id/${i}/100/100.jpg`
            url: `https://picsum.photos/id/${1}/100/100.jpg`
        });
    }

    // const numberList = []
    for (let i = 1; i <= 200; i++) numberList.push(i)
    const SheepRow = (no) => (<div> {no} Sheep </div>)

    // let cp_data = []
    // csvData.forEach( (element, index) => {
    //     cp_data
    //     setTimeout(() => {
    //         let data = 
    //     })
    // })

    const returnUploadComponent = () => {
        setTimeout(() => {
            history.push({
                pathname: "/"
            });
        }, 1500)
    }

    let csvReport = csvData ? csvData.writable : []

    const createArray = (element) => {
        console.log(element)
        let arr = [4, 7, 5, 1, 7, 5, 56, 7]
        // arr = element
        return arr
    }

    const arrayCheck = (arr) => {
        // console.log(arr)
        console.log(Array.isArray(arr))
    }

    return (
        <div className="container-fluid p-0">
            <div className="header p-3">
                <NavLink exact to="/">Back to Home</NavLink>
                {
                    csvData ? <h4>CSV Data Table</h4> : ''
                }
            </div>
            {
                csvData ?
                    <>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        {
                                            csvData.header.map((element, index) => (
                                                <th scope="col" key={index}>{element.name}</th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* < RecycledList
                                        itemFn={LargeTableData}
                                        attrList={csvData.table_data}
                                        itemHeight={20}
                                        rowOffset={100}
                                        className={'CustomContainer'}
                                    /> */}
                                    {/* <RecycledList
                                        itemFn={SheepRow}
                                        attrList={numberList}
                                        itemHeight={20}
                                        rowOffset={100}
                                        className={'CustomContainer'}
                                    /> */}
                                    <RecycledList
                                        itemFn={ImageRow}
                                        attrList={imageList}
                                        itemHeight={120}
                                        rowOffset={100}
                                        className={'CustomContainer'}
                                    />
                                    {
                                        // csvData.table_data.map((element, index) => (
                                        //     arrayCheck(element)
                                        //     // console.log(index + '    ' + element)
                                        //     // < RecycledList 
                                        //     //         key={index}
                                        //     //         itemFn = { LargeTableData } 
                                        //     //         attrList = { createArray(element) } 
                                        //     //         itemHeight = { 20} 
                                        //     //         rowOffset = { 100}
                                        //     //         className = { 'CustomContainer'}
                                        //     // />
                                        // //     // <RecycledList
                                        // //     //     itemFn={SheepRow}
                                        // //     //     itemHeight={20}
                                        // //     //     rowOffset={100}
                                        // //     //     className={'CustomContainer'}
                                        // //     // >
                                        // //     // </RecycledList>
                                        //     // <tr key={index}>
                                        //     //     {
                                        //     //         element.map((el, i) => (
                                        //     //             // arrayCheck(el)
                                        //     //             <td key={i}>{el}</td>
                                        //     //         ))
                                        //     //     }

                                        //     // </tr>
                                        // ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="btn-group p-1" role="group" aria-label="Basic example">
                            <CSVLink type="button" className="btn btn-secondary" data={csvReport} >Download CSV File</CSVLink>
                        </div>
                    </> :
                    <>
                        <h3>No CSV found</h3>
                        {
                            returnUploadComponent()
                        }
                    </>
            }

        </div >
    );
}

export default Page2;