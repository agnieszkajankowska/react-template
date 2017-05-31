import React, { Component } from 'react';
import './App.css';
import Counter from './Counter/Counter'
import Counter2 from './Counter/Counter2'


class App extends Component {
    render() {
        return (
            <div className="App">
                <Counter />
                <Counter2 />
            </div>
        );
    }
}

export default App;
