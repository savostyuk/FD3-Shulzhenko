import React from 'react';

function withRainbowFrame(colors) {

    for (let i = 0; i<colors.length; i++) {
    }
    return function(Component) {
        return props => (
            <div style={{border:"solid 5px "+colors[0], padding: "5px"}}>
                <Component {...props} />
            </div>
        );
    };
}

export { withRainbowFrame };
