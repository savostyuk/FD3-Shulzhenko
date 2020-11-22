import React from 'react';
import PropTypes from 'prop-types';

import './product.css';

class Product extends React.Component{

    static propTypes: {
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
        classNameItem: PropTypes.string.isRequired,
        cbSelectItem: PropTypes.func.isRequired,
        cbDeleteItem: PropTypes.func.isRequired,
        cbEditItem: PropTypes.func.isRequired,
        btnsDisabledDelete: PropTypes.bool.isRequired,
        blockChange: PropTypes.bool.isRequired,
    };

    highlightItem = (EO) =>{
        if (this.props.blockChange !== true)
        this.props.cbSelectItem ( this.props.code);
    };

    editItem = (EO) =>{
        EO.stopPropagation();      // останавливаем всплытие React события
       this.props.cbEditItem (this.props.code);
    };

    delItem = (EO) =>{
        EO.stopPropagation();       // останавливаем всплытие React события
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
                <input type='button' value='Edit' disabled={this.props.blockChange} onClick={this.editItem}/>
               <input type='button' value='Delete' disabled={this.props.btnsDisabledDelete}  onClick={this.delItem}/>
            </td>
        </tr>
    };
}

export default Product;