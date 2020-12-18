import React from 'react';
import PropTypes from 'prop-types';

import {clientEvents} from './events';
import {formEvents} from './events';

import MobileClient from './MobileClient';
import ClientForm from './ClientForm';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

    static propTypes = {
        clients:PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                fam: PropTypes.string.isRequired,
                im: PropTypes.string.isRequired,
                otch: PropTypes.string.isRequired,
                balance: PropTypes.number.isRequired,
            })
        ),
    };

    state = {
        clients: this.props.clients,
        filtered: 0,   //0 начальное состояние+показать всех, 1- показать активных, 2 - показать заблокированных
        formMode: 0,  //форма закрыта, 1 - редактировать, 2 - добавить нового
        selectedClientCode: null,
    };

    allShow = () =>{
        this.setState({filtered: 0});
    }

    activeShow = () =>{
        this.setState({filtered: 1});
    }

    blockedShow = () =>{
        this.setState({filtered: 2});
    }

    filterClient = (mode) => {
        if (mode === 0) {
            return this.state.clients;
        }
        if (mode === 1) {
            return this.state.clients.filter (v => v.balance>=0);
        }
        if (mode === 2) {
            return this.state.clients.filter (v => v.balance<0);
        }

    }

    componentDidMount() {
        clientEvents.addListener('EEditClient', this.editedClient);
        clientEvents.addListener('EDeleteClient', this.deletedClient);
        formEvents.addListener('EAddNewClient', this.saveChanged);
        formEvents.addListener('ECancelForm', this.cancelChanged);
    }

    componentWillUnmount() {
        clientEvents.removeListener('EEditClient', this.editedClient);
        clientEvents.removeListener('EDeleteClient', this.deletedClient);
        formEvents.removeListener('EAddNewClient', this.saveChanged);
        formEvents.removeListener('ECancelForm', this.cancelChanged);
    }

    editedClient = (id) =>{
        this.setState({formMode: 1});
        this.setState({selectedClientCode: id});
    }

    deletedClient = (id) =>{
        var Question = confirm("Вы хотите удалить клиента?");
        if (Question) {
            var filterClient = this.state.clients.filter(v =>
                v.id !== id);
            this.setState({clients: filterClient});
        }
    }
    addClient = () =>{
        this.setState({formMode: 2});
    }
    saveChanged = (client) =>{
        if (this.state.formMode===1) {
            let indexEdit;
            this.state.clients.forEach((v, i) => {
                if (v.id===client.id) {
                    indexEdit=i;
                }
            });
            let editedClients = this.state.clients;
            editedClients[indexEdit] = client;
            this.setState({clients: editedClients});
        }

        if (this.state.formMode===2) {
            let maxId=0;
            this.state.clients.forEach(v => {
                if (v.id>maxId) {
                    maxId=v.id
                }
            })
            client.id = maxId+1;
            this.state.clients.push(client);
        }
        this.setState({formMode: 0});
    }


    cancelChanged = () =>{
        this.setState({formMode: 0});
    }

    render() {

        console.log("MobileCompany render");

        let filteredClient = this.filterClient(this.state.filtered);

        var clientsCode=filteredClient.map( client =>
            <MobileClient key={client.id} info={client}  />
        );

        let selectedClient;
        if (this.state.formMode===1){
            selectedClient = this.state.clients.filter (client => client.id===this.state.selectedClientCode);
        }

        return (
            <div className='MobileCompany'>
                <hr />
                    <input className="showAll" type="button" value="Все" onClick={this.allShow} />
                    <input className="showActive" type="button" value="Активные" onClick={this.activeShow} />
                    <input className="showBlocked" type="button" value="Заблокированные" onClick={this.blockedShow} />
                <hr />
                <table className='MobileCompanyClients'>
                    <tbody>
                    <tr className="Headings">
                        <td>Фамилия</td>
                        <td>Имя</td>
                        <td>Отчество</td>
                        <td>Баланс</td>
                        <td>Статус</td>
                        <td>Редактировать</td>
                        <td>Удалить</td>
                    </tr>
                    {clientsCode}
                    </tbody>
                </table>
                <input type="button" value="Добавить клиента" onClick={this.addClient} />
                {this.state.formMode===1 &&
                <ClientForm
                    key = {selectedClient[0].id}
                    info = {selectedClient}
                    formMode = {this.state.formMode}/>
                }
                {this.state.formMode===2 &&
                    <ClientForm formMode={this.state.formMode}/>
                }
            </div>
        )
            ;

    }

}

export default MobileCompany;
