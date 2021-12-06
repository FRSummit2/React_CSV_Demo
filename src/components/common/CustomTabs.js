import React from 'react';

class CustomTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        console.log(this.props)
    }

    render() {
        return (
            <div className="grid-container mt-4 p-1 mb-5">
                <ul className="nav nav-tabs nav-justified" role="tablist">
                    {
                        this.props.tabs.map((element, index) => (
                            <li className="nav-item" key={index}>
                                <a className={index === 0 ? 'nav-link active' : 'nav-link'} id={'tab-btn-' + index} data-toggle="tab" href={'#tab-content-' + index} role="tab" aria-controls={'tab-content-' + index} aria-selected="true"><span data-toggle="tooltip" data-placement="top" title={element.name}>Tab {index}</span></a>
                            </li>
                        ))
                    }
                </ul>
                <div className="tab-content">
                    {
                        this.props.tabs.map((element, index) => (
                            <div className={index === 0 ? 'tab-pane fade text-left show active' : 'tab-pane fade text-left'} id={'tab-content-' + index} role="tabpanel" aria-labelledby={'tab-btn-' + index}>
                                {element.name}
                            </div>
                        ))
                    }
                </div>
                {/* <div className="grid-container mt-4 p-1 mb-5">
                    <ul className="nav nav-tabs nav-justified" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="test-tab" data-toggle="tab" href="#test" role="tab" aria-controls="test" aria-selected="true">Test</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="scatter-tab" data-toggle="tab" href="#scatter" role="tab" aria-controls="scatter" aria-selected="true">Scatter</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade text-left show active" id="test" role="tabpanel" aria-labelledby="test-tab">
                            Test
                        </div>
                        <div className="tab-pane fade text-left" id="scatter" role="tabpanel" aria-labelledby="scatter-tab">
                            Test
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default CustomTabs