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
    // console.log(csvData.table_data)
    const numberList = []
    const imageList = []
    // const largeTableDataList = []
    csvData.table_data.forEach(el => {
        // console.log(el[0])
        let data = {
            no: el[0],
            url: el[1],
            alt: el[2],
        }
        // console.log(data)
        imageList.push(data)
        // numberList.push(data)
        // numberList.push({
        //     a: el[0],
        //     a: el[1],
        //     a: el[2],
        //     a: el[3],
        //     a: el[4],
        //     a: el[5],
        //     a: el[6],
        //     a: el[7],
        //     a: el[8],
        //     a: el[8],
        //     a: el[10],
        // })
    })
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
                                                    {/* <RecycledList
                                                        itemFn={SheepRow}
                                                        attrList={numberList}
                                                        itemHeight={20}
                                                        rowOffset={100}
                                                        className={'CustomContainer'}
                                                    /> */}
                                                    {/* <RecycledList 
                                                        itemFn={ImageRow} 
                                                        attrList={imageList} 
                                                        itemHeight={20} 
                                                        rowOffset={100}
                                                        className={'CustomContainer'}
                                                    /> */}
                                    {
                                        csvData.table_data.map((element, index) => (
                                            // <RecycledList
                                            //     itemFn={SheepRow}
                                            //     itemHeight={20}
                                            //     rowOffset={100}
                                            //     className={'CustomContainer'}
                                            // >
                                            // </RecycledList>
                                            <tr key={index}>
                                                {
                                                    // index % 1000 === 0 ?
                                                    // setInterval(console.log('>> ' + index), 1000) : 
                                                    // console.log('regular')
                                                    element.map((el, i) => (
                                                        <td key={i}>{el}</td>
                                                    ))
                                                }
                                                
                                                {/* <RecycledList 
                                                        itemFn={LargeTableData} 
                                                        attrList={element} 
                                                        itemHeight={20} 
                                                        rowOffset={100}
                                                        className={'CustomContainer'}
                                                    /> */}

                                            </tr>
                                        ))
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