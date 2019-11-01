import React from 'react';
import './sky.css';

class React extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="sky">

            </div>
        )
    }
}

function Cloud() {
    return (<div className="cloud">
        <span className="half-ellipse half-top-bottom"></span>
        <span className="half-ellipse half-top-bottom"></span>
        <span className="half-ellipse half-top-bottom"></span>
    </div>)
}