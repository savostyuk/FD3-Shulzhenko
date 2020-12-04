"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import './DoubleButton.css';

class DoubleButton extends React.Component {

    static propTypes = {
        caption1: PropTypes.string.isRequired,
        caption2: PropTypes.string.isRequired,
        cbPressed: PropTypes.func.isRequired,
    }

    buttonClicked1 = (EO) => {
        this.props.cbPressed(1);
    }
    buttonClicked2 = (EO) => {
        this.props.cbPressed(2);
    }

    render() {
        return(
            <div>
                <input type='button' defaultValue={this.props.caption1} onClick={this.buttonClicked1}/>
                {this.props.children}
                <input type='button' defaultValue={this.props.caption2} onClick={this.buttonClicked2}/>
            </div>
        )
    }
}
export default DoubleButton;