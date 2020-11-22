import React from 'react';
import PropTypes from 'prop-types';

import './shop.css';
import Product from "./product";
import CardEditor from "./cardeditor";
import CardView from "./cardview";

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
    cardMode: 0,   //0 - no, 1-view, 2 - edit, 3 - add
    btnsDisabledDelete: false,
    blockChange: false,
        key:this.props.goods.length+1,

};
//при щелчке по строке
    selectItem =(code) => {
     this.setState ({cardMode: 1, selectedItemCode: code, btnsDisabledDelete: false });
    };

//callback для cardeditor
    cbSave = (newItem) => {
        var newGoods = this.state.goods.map(item =>
            item.code = newItem.code?newItem:item);
    this.setState({cardMode: 0, goods: newGoods, btnsDisabledDelete: false, blockChange: false })
    }

    //при нажатии кнопки Cancel
    cbCancel = () =>{
        this.setState({cardMode: 0, btnsDisabledDelete: false, blockChange: false })
    }

    //при нажатии кнопки Edit
changeItem = (code) => {
this.setState( {cardMode: 2, selectedItemCode: code, btnsDisabledDelete:true});
}
    OnChange = () => {
        this.setState({blockChange: true});
    }

    addProduct =() => {
        this.setState( {cardMode: 3, btnsDisabledDelete:true, blockChange: true, selectedItemCode: 0 });
    }

    //при нажатии кнопки удалить
deleteItem = (code) => {
    var Question = confirm("Вы хотите удалить товар?");
    if (Question) {
        var filterGoods = this.state.goods.filter (v =>
            v.code !==code);
        this.setState ({ goods:filterGoods, cardMode: 0})
    }
};

render(){
    var item = this.state.goods.find((v => v.code===this.state.selectedItemCode));
    let   addItem = {code: this.state.key,
        name: '',
        price: '',
        url:'',
        balance:''};

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
                 cbEditItem={this.changeItem}
                 cbDeleteItem={this.deleteItem}
                 btnsDisabledDelete = {this.state.btnsDisabledDelete}
                 blockChange={this.state.blockChange}
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
        {(this.state.cardMode === 0||this.state.cardMode === 1) &&  <input type='button' value='New product' onClick={this.addProduct}/>}
        {this.state.cardMode ===1 && <CardView item={item}/>}
        {this.state.cardMode ===2 && <CardEditor
            cardMode = {this.state.cardMode}
            item={item}
            nameIsValid={true}
            priceIsValid={true}
            urlIsValid={true}
            balanceIsValid={true}
            cbSaveChanges={this.cbSave}
            cbCancelChanges={this.cbCancel}
            cbOnChange={this.OnChange}
        />}
        {this.state.cardMode ===3 && <CardEditor
            cardMode = {this.state.cardMode}
            item = {addItem}
            nameIsValid={false}
            priceIsValid={false}
            urlIsValid={false}
            balanceIsValid={false}
            cbOnChange={this.OnChange}
            cbSaveChanges={this.cbSave}
            cbCancelChanges={this.cbCancel}
        />}
    </div>
};
}

export default Shop;