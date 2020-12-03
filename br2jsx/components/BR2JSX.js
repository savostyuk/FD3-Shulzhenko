"use strict";

import React from 'react';
import PropTypes from 'prop-types';

import './BR2JSX.css';

class BR2JSX extends React.Component {

    static Proptypes = {
        text: PropTypes.string.isRequired,
    };

    render() {
        let regexp = /<br *\/?>/;  //регулярное выражение для br
        let words = this.props.text.split(regexp);
        let parts = [];
        words.forEach((w,i)=>{
            if (i)
          parts.push(<br key={i}/>);
          parts.push(w);
        })

        return (
            <div  className="BR2JSX">
                {parts}
            </div>
        )
    }
}

export default BR2JSX;


