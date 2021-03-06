import React from 'react';
import PropTypes from 'prop-types';

import {formEvents} from './events';

import './ClientForm.css';

class ClientForm extends React.PureComponent {

    static propTypes = {
        info:PropTypes.arrayOf(
            PropTypes.shape({
            id: PropTypes.number,
            fam: PropTypes.string,
            im: PropTypes.string,
            otch: PropTypes.string,
            balance: PropTypes.number,
        })
        ),
        formMode: PropTypes.number.isRequired,
    };

    newFamRef = null;
    newImRef = null;
    newOtchRef = null;
    newBalanceRef = null;

    setNewFamRef = (ref) => {
        this.newFamRef=ref;
    };
    setNewImRef = (ref) => {
        this.newImRef=ref;
    };
    setNewOtchRef = (ref) => {
        this.newOtchRef=ref;
    };
    setNewBalanceRef = (ref) => {
        this.newBalanceRef=ref;
    };

    addNewClient = () =>{
        let newClient = {};
        if (this.props.formMode===1){
            newClient.id = this.props.info[0].id;
        }
        newClient.fam = this.newFamRef.value;
        newClient.im = this.newImRef.value;
        newClient.otch = this.newOtchRef.value;
        newClient.balance = Number(this.newBalanceRef.value);
       formEvents.emit('EAddNewClient', newClient) ;
    }

    cancelForm = () =>{
        formEvents.emit('ECancelForm') ;
    }

    render() {

        console.log("ClientForm render");

        return <div>
            { this.props.formMode ===1 && <h3>Редактировать данные клиента</h3>}
            { this.props.formMode ===2 && <h3>Добавить нового клиента</h3>}
            <div className='field-form'>
                <label>Фамилия: </label>
            <input defaultValue={(this.props.formMode===1)?this.props.info[0].fam:""} ref={this.setNewFamRef}/>
            </div>
            <div className='field-form'>
                <label>Имя: </label>
                <input defaultValue={(this.props.formMode===1)?this.props.info[0].im:""} ref={this.setNewImRef}/>
            </div>
            <div className='field-form'>
                <label>Отчество: </label>
                <input defaultValue={(this.props.formMode===1)?this.props.info[0].otch:""} ref={this.setNewOtchRef}/>
            </div>
            <div className='field-form'>
                <label>Баланс: </label>
                <input defaultValue={(this.props.formMode===1)?this.props.info[0].balance:""} ref={this.setNewBalanceRef}/>
            </div>
            <input type='button' value='Сохранить' onClick={this.addNewClient}/>
            <input type='button' value='Отмена' onClick={this.cancelForm}/>
        </div>

    }

}
export default ClientForm;