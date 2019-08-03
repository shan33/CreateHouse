
/**
 * 房屋 加载 Wall
 */

import React from 'react';

import './House.css';

class House extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            owner: ''
        };
    }

    componentDidMount() {
        this.setState({
            owner: this.props.owner
        });
    }

    render() {
        return (
            <div className="house" owner={this.props.owner}>
                <Roof />
                <Wall />
                <RockRoad />
            </div>
        )
    }
}
/* 墙壁 */
function Wall() {
    return (
        <div className="wall">
            <Door></Door>
        </div>
    )
}

function Door() {
    return (
        <div className="door">
            <Lock></Lock>
        </div>
    )
}

function Lock() {
    return <div className="door-lock"></div>
}

/* 房顶 */
function Roof() {
    return (
        <div className="roof"></div>
    )
}

/* 石板路 */
function RockRoad() {
    return (
        <div className="rock-road">
            <Rock />
            <Rock />
            <Rock />
            <Rock />
        </div>
    )
}
/* 石板 */
function Rock() {
    return <span className="rock"></span>
}

export default House;