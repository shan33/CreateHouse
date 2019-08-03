import React from 'react';
import './App.css';
import House from './components/House/House';
import River from './components/River/River';

const owner = 'XLS';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <House owner={owner}></House>
                <River />
            </div>
        )

    }
}

export default App;
