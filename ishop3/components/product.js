import React from 'react';
import PropTypes from 'prop-types';

import './product.css';

class Product extends React.Component{

    static propTypes: {
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        balance: PropTypes.string.isRequired,
        classNameItem: PropTypes.string.isRequired,
        cbSelectItem: PropTypes.func.isRequired,
        cbDeleteItem: PropTypes.func.isRequired,
    };

    highlightItem = (EO) =>{
        this.props.cbSelectItem ( this.props.code);
    };

    delItem = (EO) =>{
        EO.stopPropagation();
        this.props.cbDeleteItem ( this.props.code);
    };

    render(){

        return <tr className={this.props.classNameItem} onClick={this.highlightItem}>
            <td className='Name'>{this.props.name}</td>
            <td className='Price'>{this.props.price}</td>
            <td className='Url'>
                <a className="Img" href={this.props.url}>{this.props.url}</a>
            </td>
            <td className='Balance'>{this.props.balance}</td>
            <td className='Control'>
               <input type='button' value='Delete' onClick={this.delItem}/>
            </td>
        </tr>
    };
}

export default Product;