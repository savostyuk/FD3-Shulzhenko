import React from 'react';

function withRainbowFrame(colors) {
    return function(Component) {
        return props => (
            <div style={{backgroundColor:colors}}>
                <Component {...props} />
            </div>
        );
    };
}

/*
let withColorBackground = color => Component => props =>
    <div style={{backgroundColor:color}}>
      <Component {...props} />
    </div>
;
*/

export { withRainbowFrame };
