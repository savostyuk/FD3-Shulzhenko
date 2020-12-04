import React from 'react';
import './RainbowFrame.css';

function withRainbowFrame(colors) {

    return function(Component) {
        return function (props) {
            let Comp = <Component {...props} />;
            for (let i = 0; i<colors.length; i++) {
                Comp = <div style={{border: "solid 5px " + colors[i], padding: "5px"}}>{Comp}</div>
            }
          return   <div className="RainbowFrame">
              {Comp}
          </div>
        };
    };
}

export { withRainbowFrame };
