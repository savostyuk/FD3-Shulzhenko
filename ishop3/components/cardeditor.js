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
        nameIsValid: PropTypes.bool.isRequired,
        priceIsValid: PropTypes.bool.isRequired,
        urlIsValid: PropTypes.bool.isRequired,
        balanceIsValid: PropTypes.bool.isRequired,
    }

    state={
            code: this.props.item.code,
            name: this.props.item.name,
            price: this.props.item.price,
            url: this.props.item.url,
            balance: this.props.item.balance,
        nameIsValid: this.props.nameIsValid,
        priceIsValid: this.props.priceIsValid,
        urlIsValid: this.props.urlIsValid,
        balanceIsValid: this.props.balanceIsValid,
    }

    editFieldName = (EO) => {
        this.props.cbOnChange();
        this.setState({name: EO.target.value});
        if(!(EO.target.value)) {
            this.setState({nameIsValid: false});
        } else {
            this.setState({nameIsValid: true});
        }
    }
    editFieldPrice = (EO) => {
        this.props.cbOnChange();
        this.setState({price: EO.target.value});
        if(!(EO.target.value)) {
            this.setState({priceIsValid: false});
        } else {
            this.setState({priceIsValid: true});
        }
    }
    editFieldUrl = (EO) => {
        this.props.cbOnChange();
        this.setState({url: EO.target.value});
        if(!(EO.target.value)) {
            this.setState({urlIsValid: false});
        } else {
            this.setState({urlIsValid: true});
        }
    }
    editFieldBalance = (EO) => {
        this.props.cbOnChange();
        this.setState({balance: EO.target.value});
        if(!(EO.target.value)) {
            this.setState({balanceIsValid: false});
        } else {
            this.setState({balanceIsValid: true});
        }
    }

    saveChanges = () =>{
        let newItem = {};
        newItem.code = this.state.code;
        newItem.name = this.state.name;
        newItem.price = this.state.price;
        newItem.url = this.state.url;
        newItem.balance = this.state.balance;
        console.log(newItem);
        this.props.cbSaveChanges (newItem);
    }

    cancelChanges =() =>{
        this.props.cbCancelChanges();
    }

    render() {
        return <div>
            { this.props.cardMode ===2 && <h3>Редактировать товар</h3>}
            { this.props.cardMode ===3 && <h3>Добавить новый товар</h3>}
            <div><label>ID: {this.props.item.code}</label></div>
            <div>
                <label>Name: </label>
                <input name='itemName' value={this.state.name} onChange={this.editFieldName}/>
                {(!this.state.nameIsValid)&&<span className="errorField">Пожалуйста, заполните</span>}
            </div>
            <div>
                <label>Price: </label>
                <input name='itemPrice' value={this.state.price} onChange={this.editFieldPrice}/>
                {(!this.state.priceIsValid)&&<span className="errorField">Пожалуйста, заполните</span>}
            </div>
            <div>
                <label>URL: </label>
                <input name='itemUrl' value={this.state.url} onChange={this.editFieldUrl}/>
                {(!this.state.urlIsValid)&&<span className="errorField">Пожалуйста, заполните</span>}
            </div>
            <div>
                <label>Balance: </label>
                <input name='itemBalance' value={this.state.balance} onChange={this.editFieldBalance}/>
                {(!this.state.balanceIsValid)&&<span className="errorField">Пожалуйста, заполните</span>}
            </div>
            <div>
                {this.props.cardMode ===2 &&  <input type='button' value='Save' onClick={this.saveChanges} disabled={!(this.state.nameIsValid&&this.state.priceIsValid&&this.state.urlIsValid&&this.state.balanceIsValid)}/>}
                {this.props.cardMode ===3 &&  <input type='button' value='Add' onClick={this.saveChanges} disabled={!(this.state.nameIsValid&&this.state.priceIsValid&&this.state.urlIsValid&&this.state.balanceIsValid)}/>}
                <input type='button' value='Cancel' onClick={this.cancelChanges}/>
            </div>
        </div>
    }
}

export default CardEditor;