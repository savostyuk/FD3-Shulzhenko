import React from 'react';
import PropTypes from 'prop-types';

import './shop.css';
import Product from "./product";

class Shop extends React.Component {

    propTypes: {
        shop: PropTypes.string.isRequired,
        goods: PropTypes.array.isRequired,
    };

    state = {
    goods: this.props.goods.slice(),
    selectedItemCode: 0,
    classNameItemDefault: 'Item',
    classNameItemSelect: 'Item_Select',

};

selectItem =(code) => {
    this.setState ({selectedItemCode: code });
};

deleteItem = (code) => {
    var Question = confirm("Вы хотите удалить товар?");
    if (Question) {
        var filterGoods = this.state.goods.filter (v =>
            v.code !==code);
        this.setState ({ goods:filterGoods})
    }
};

render(){
    var headings = Object.keys(this.props.goods[0]);
    for (var z = 0; z < headings.length; z++){
        if (headings[z] === "code") headings.splice(z, 1);
    }

    var headingsCode = headings.map( k =>
        <td key={k} className={'HeadingsItem'}>{k}</td>
    );

    var goodsCode = this.state.goods.map (v=>
        <Product key={v.code}
                 code={v.code}
                 name={v.name}
                 price={v.price}
                 url={v.url}
                 balance={v.balance}
                 cbSelectItem={this.selectItem}
                 cbDeleteItem={this.deleteItem}
                 classNameItem={((this.state.selectedItemCode) === (v.code))?(this.state.classNameItemSelect):(this.state.classNameItemDefault)}
        />
);

    return <div className='IShop'>
        <div className='Shop'>{this.props.shop}</div>
        <table className='GoodsShop'>
            <tbody>
            <tr className='Headings'>{headingsCode} <td className='HeadingsItem'>control</td></tr>
            {goodsCode}
            </tbody>
        </table>
    </div>
};
}

export default Shop;
