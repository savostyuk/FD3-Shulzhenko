import React from 'react';
import PropTypes from 'prop-types';

import './cardeditor.css';

class CardEditor extends React.Component{

    static PropTypes: {
        item: PropTypes.object.isRequired,
        cbSave: PropTypes.func.isRequired,
        cbCancelChanges: PropTypes.isRequired,
    }

    state={
        item: {
            code: this.props.item.code,
            name: this.props.item.name,
            price: this.props.item.price,
            url: this.props.item.url,
            balance: this.props.item.balance,
        },
        nameIsValid: true,
        priceIsValid: true,
        urlIsValid: true,
        balanceIsValid: true,
        valueIsInValid: false,   //для кнопки save
    }

    editField = (EO) => {
        if(EO.target.value==='') {
            this.validField(EO, false);
        } else {
            this.validField(EO, true);
        }
    }

    validField =(EO, bool) =>{
        switch (EO.target.name) {
            case 'itemName':
                this.setState({name: EO.target.value, nameIsValid: bool, valueIsInValid: !bool});
                break;
            case 'itemPrice':
                this.setState({price: EO.target.value, priceIsValid: bool, valueIsInValid: !bool});
                break;
            case 'itemURL':
                this.setState({url: EO.target.value, urlIsValid: bool, valueIsInValid: !bool});
                break;
            case 'itemBalance':
                this.setState({balance: EO.target.value, balanceIsValid: bool, valueIsInValid: !bool});
                break;
        }
    }

    saveChanges = () =>{
        this.props.cbSave (this.state.item)
    }
    cancelChanges =() =>{
        this.props.cbCancelChanges()
    }

    render() {
        var head = Object.keys(this.props.item);
        console.log(head);
        return <div>
            <h1>Редактировать товар</h1>
           <div><label>ID: {this.state.item.code}</label></div>
            <div>
                <label>Name: </label>
                <input name='itemName' defaultValue={this.state.item.name} onChange={this.editField}/>
                {(!this.state.nameIsValid)&&<span className="errorField">Пожалуйста, заполните</span>}
            </div>
            <div>
                <label>Price: </label>
                <input name='itemPrice' defaultValue={this.state.item.price} onChange={this.editField}/>
                {(!this.state.priceIsValid)&&<span className="errorField">Пожалуйста, заполните</span>}
            </div>
            <div>
                <label>URL: </label>
                <input name='itemUrl' defaultValue={this.state.item.url} onChange={this.editField}/>
                {(!this.state.urlIsValid)&&<span className="errorField">Пожалуйста, заполните</span>}
            </div>
            <div>
                <label>Balance: </label>
                <input name='itemBalance' defaultValue={this.state.item.balance} onChange={this.editField}/>
                {(!this.state.balanceIsValid)&&<span className="errorField">Пожалуйста, заполните</span>}
            </div>
            <div>
                <input type='button' value='Save' onClick={this.saveChanges} disabled={this.state.valueIsInValid}/>
                <input type='button' value='Cancel' onClick={this.cancelChanges}/>
            </div>
        </div>
    }
}

export default CardEditor;