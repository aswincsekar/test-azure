import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './App.css';
import New from './New';
import Main from './Main';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Main}/>
                <Route path="/new" component={New}/>
            </div>
        </Router>
    );
  }
}

export default App;
