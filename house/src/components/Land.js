import React from 'react';

function LandObj(width, height, owner) {
    this.owner = owner;
    this.width = width;
    this.height = height;
}

class Land extends React.Component {
    render() {
        var myLand = new LandObj(400, 100, 'xiaofang');
        var land = {
            width: '400px',
            height: '100px',
            border: 'solid 1px #aaa'
        }
        return <div style={land}>这是一块地</div>;
    }
}
export default Land;