import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppNavBar from './Components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';


function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <AppNavBar></AppNavBar>

                    <Switch>
                        <Route path="/" component={Main} exact />
                    </Switch>
                </div>
            </Router>

        </div>
    );
}

export default App;