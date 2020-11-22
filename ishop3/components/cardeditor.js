import React from 'react';
import PropTypes from 'prop-types';

import './cardeditor.css';

class CardEditor extends React.Component{

    static PropTypes: {
        item: PropTypes.object.isRequired,
        cbSaveChanges: PropTypes.func.isRequired,
        cbCancelChanges: PropTypes.func.isRequired,
        cbOnChange: PropTypes.func.isRequired,
        cardMode: PropTypes.number.isRequired,
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
        valuesAreInValid: false,   //для кнопки save
    }

    editField = (EO) => {
        this.props.cbOnChange();
        if(EO.target.value==='') {
            this.validField(EO, false);
        } else {
            this.validField(EO, true);
        }
    }

    validField =(EO, bool) =>{
        switch (EO.target.name) {
            case 'itemName':
            {this.state.item.name = EO.target.value;
                this.setState({nameIsValid: bool, valuesAreInValid: !bool});}
                break;
            case 'itemPrice':
            {this.state.item.price = EO.target.value;
                this.setState({priceIsValid: bool, valuesAreInValid: !bool});}
                break;
            case 'itemURL':
                {this.state.item.url = EO.target.value;
                this.setState({urlIsValid: bool, valuesAreInValid: !bool});}
                break;
            case 'itemBalance':
                    {this.state.item.balance = EO.target.value;
                this.setState({balanceIsValid: bool, valuesAreInValid: !bool});}
                break;
        }
    }

    saveChanges = () =>{
        this.props.cbSaveChanges (this.state.item)
    }

    cancelChanges =() =>{
        this.props.cbCancelChanges(this.props.item)
    }

    render() {
        return <div>
            { this.props.cardMode ===2 && <h1>Редактировать товар</h1>}
            { this.props.cardMode ===3 && <h1>Добавить новый товар</h1>}
            <div><label>ID: {this.props.item.code}</label></div>
            <div>
                <label>Name: </label>
                <input name='itemName' value={this.state.item.name} onChange={this.editField}/>
                {(!this.state.nameIsValid)&&<span className="errorField">Пожалуйста, заполните</span>}
            </div>
            <div>
                <label>Price: </label>
                <input name='itemPrice' value={this.state.item.price} onChange={this.editField}/>
                {(!this.state.priceIsValid)&&<span className="errorField">Пожалуйста, заполните</span>}
            </div>
            <div>
                <label>URL: </label>
                <input name='itemUrl' value={this.state.item.url} onChange={this.editField}/>
                {(!this.state.urlIsValid)&&<span className="errorField">Пожалуйста, заполните</span>}
            </div>
            <div>
                <label>Balance: </label>
                <input name='itemBalance' value={this.state.item.balance} onChange={this.editField}/>
                {(!this.state.balanceIsValid)&&<span className="errorField">Пожалуйста, заполните</span>}
            </div>
            <div>
                <input type='button' value='Save' onClick={this.saveChanges} disabled={this.state.valuesAreInValid}/>
                <input type='button' value='Cancel' onClick={this.props.cbCancelChanges}/>
            </div>
        </div>
    }
}

export default CardEditor;