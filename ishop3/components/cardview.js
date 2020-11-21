import React from 'react';
import PropTypes from 'prop-types';

class CardView extends React.Component{
    static PropTypes: {
        item: PropTypes.object.isRequired,}

        render() {
            return <div>
                <h3>{this.props.item.name}</h3>
                <p>Price: <span>{this.props.item.price}</span></p>
                <p>Url: <span>{this.props.item.url}</span></p>
                <p>Balance: <span>{this.props.item.balance}</span></p>
            </div>
        }

}
export default CardView;