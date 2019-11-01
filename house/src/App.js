import React from 'react';
import './App.css';
import House from './components/House/House';
import River from './components/River/River';
import Theme from './components/Theme/Theme';
import { Button } from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark',
        };

        // 挂载监听函数
        this.updateTheme = this.updateTheme.bind(this);
    }

    updateTheme() {
        let curTheme = this.state.theme;
        this.setState({
            theme: 'dark' == curTheme ? 'light' : 'dark'
        });
    }

    render() {
        return (
            <div className="app">
                <Theme.Provider value={this.state.theme} />
                <section className="header">
                    <Button bsStyle="primary" onClick={this.updateTheme}>{this.state.theme}</Button>
                </section>
                <section>
                    <House owner={'XLS'}></House>
                    <River />
                </section>
            </div>
        )
    }
}

export default App;
