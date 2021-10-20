// import Plot from "react-plotly.js";

// export default class BoxPlot {
//     boxPlot() {
//     }
// }



// var React = require('react');
// var Component = React.Component;
// import CanvasJS from 'canvasjs'
// // var CanvasJS = CanvasJSReact.CanvasJS;
// // var CanvasJSChart = CanvasJSReact.CanvasJSChart;


// class App extends Component {
//     render() {
//         const options = {
//             theme: "light2",
//             animationEnabled: true,
//             title: {
//                 text: "Energy in Baked Foods"
//             },
//             axisY: {
//                 title: "Energy Per 100 g (kcal/100g)"
//             },
//             data: [{
//                 type: "boxAndWhisker",
//                 yValueFormatString: "#,##0.# \"kcal/100g\"",
//                 dataPoints: [
//                     { label: "Bread", y: [179, 256, 300, 418, 274] },
//                     { label: "Cake", y: [252, 346, 409, 437, 374.5] },
//                     { label: "Biscuit", y: [236, 281.5, 336.5, 428, 313] },
//                     { label: "Doughnut", y: [340, 382, 430, 452, 417] },
//                     { label: "Pancakes", y: [194, 224.5, 342, 384, 251] },
//                     { label: "Bagels", y: [241, 255, 276.5, 294, 274.5] }
//                 ]
//             }]
//         }
//         return (
//             <div>
//                 <CanvasJSChart options={options}
//                 /* onRef={ref => this.chart = ref} */
//                 />
//                 {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
//             </div>
//         );
//     }
// }
// export default App;



import CanvasJS from 'canvasjs'

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "Daily Sleep Statistics of Age Group 12 - 20"
        },
        axisX: {
            valueFormatString: "DDD"
        },
        axisY: {
            title: "Sleep Time (in Hours)"
        },
        data: [{
            type: "boxAndWhisker",
            xValueFormatString: "DDDD",
            yValueFormatString: "#0.0 Hours",
            dataPoints: [
                { x: new Date(2017, 6, 3), y: [4, 6, 8, 9, 7] },
                { x: new Date(2017, 6, 4), y: [5, 6, 7, 8, 6.5] },
                { x: new Date(2017, 6, 5), y: [4, 5, 7, 8, 6.5] },
                { x: new Date(2017, 6, 6), y: [3, 5, 6, 9, 5.5] },
                { x: new Date(2017, 6, 7), y: [6, 8, 10, 11, 8.5] },
                { x: new Date(2017, 6, 8), y: [5, 7, 9, 12, 7.5] },
                { x: new Date(2017, 6, 9), y: [4, 6, 8, 9, 7] }
            ]
        }]
    });
    chart.render();

}


// export default class BoxPlot {
//     boxPlot() {
//     }
// }