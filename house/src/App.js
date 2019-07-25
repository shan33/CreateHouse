import React from 'react';
import './App.css';
import Land from './components/Land';

const person = {
    name:'xulanshan',
    age: '18'
};

class App extends React.Component {
    render() {
        return <div><Land></Land></div>
    }
}
export default App;
