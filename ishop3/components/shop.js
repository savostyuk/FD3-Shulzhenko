import React from 'react';
import PropTypes from 'prop-types';

import './shop.css';
import Product from "./product";
import CardEditor from "./cardeditor";

class Shop extends React.Component {

    propTypes: {
        shop: PropTypes.string.isRequired,
        goods: PropTypes.array.isRequired,
    };

    state = {
    goods: this.props.goods.slice(),   //перезаписываем массив с товарами
    selectedItemCode: 0,
    classNameItemDefault: 'Item',
    classNameItemSelect: 'Item_Select',
    cardMode: 0,   //0 - no, 1-view, 2 - edit

};

selectItem =(code) => {
    this.setState ({selectedItemCode: code });
};

//callback для cardeditor
cbSave = (newItem) => {
        this.state.goods = this.state.goods.map(item =>
            item.code = newItem.code?newItem:item)
    this.setState({cardMode: 0, goods: this.state.goods})
    }

changeItem = (code) => {
this.setState( {cardMode: 2, selectedItemCode: code });
}

deleteItem = (code) => {
    var Question = confirm("Вы хотите удалить товар?");
    if (Question) {
        var filterGoods = this.state.goods.filter (v =>
            v.code !==code);
        this.setState ({ goods:filterGoods})
    }
};

render(){
    var item = this.state.goods.find((v => v.code===this.state.selectedItemCode));
    console.log(item);

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
                 cdEditItem={this.changeItem}
                 cbDeleteItem={this.deleteItem}
                 classNameItem={((this.state.selectedItemCode) === (v.code))?(this.state.classNameItemSelect):(this.state.classNameItemDefault)}
        />
);

    return <div className='IShop'>
        <div className='Shop'>{this.props.shop}</div>
        <table className='GoodsShop'>
            <tbody>
            <tr className='Headings'>{headingsCode}<td className='HeadingsItem'>control</td></tr>
            {goodsCode}
            </tbody>
        </table>
        {this.state.cardMode ===1 && <CardView item={item}/>}
        {this.state.cardMode ===2 && <CardEditor item={item} cbSave={this.cbSave}/>}
    </div>
};
}

export default Shop;
