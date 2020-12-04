"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {

    static propTypes = {
        colors: PropTypes.array.isRequired,
    };

    render() {
        let code = this.props.children;

        for (let i = 0; i<this.props.colors.length; i++) {
           code = <div style={{border:"solid 5px "+this.props.colors[i], padding: "5px"}}>{code}</div>;
        }

        return (
            <div  className="RainbowFrame">
                {code}
            </div>
        );

    }
}

export default RainbowFrame;
