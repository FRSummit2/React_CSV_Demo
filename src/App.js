import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router'

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <div className="content">
                        <Router />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;