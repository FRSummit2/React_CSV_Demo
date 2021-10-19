import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Router from './router/Router'

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <div className="header">
                        <NavLink exact to="/">Page1</NavLink>
                        <NavLink to="/page2">Page2</NavLink>
                    </div>
                    <div className="content">
                        <Router />
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;