import React from 'react';
import PropTypes from 'prop-types';

import {clientEvents} from './events';

import MobileClient from './MobileClient';

import './MobileCompany.css';

class MobileCompany extends React.PureComponent {

    static propTypes = {
        name: PropTypes.string.isRequired,
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
        name: this.props.name,
        clients: this.props.clients,
        filtered: 0,   //0 начальное состояние+показать всех, 1- показать активных, 2 - показать заблокированных
    };

    setName1 = () => {
        this.setState({name:'Velcom'});
    };

    setName2 = () => {
        this.setState({name:'MTS'});
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
    }

    componentWillUnmount() {
        clientEvents.removeListener('EEditClient', this.editedClient);
        clientEvents.removeListener('EDeleteClient', this.deletedClient);
    }
    editedClient = (id) =>{

    }

    deletedClient = (id) =>{
        var Question = confirm("Вы хотите удалить клиента?");
        if (Question) {
            var filterClient = this.state.clients.filter(v =>
                v.id !== id);
            this.setState({clients: filterClient})
        }
    }


    render() {

        console.log("MobileCompany render");

        let filteredClient = this.filterClient(this.state.filtered);

        var clientsCode=filteredClient.map( client =>
            <MobileClient key={client.id} info={client}  />
        );

        return (
            <div className='MobileCompany'>
                <input type="button" value="Velcom" onClick={this.setName1} />
                <input type="button" value="MTS" onClick={this.setName2} />
                <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
                <hr />
                    <input type="button" value="Все" onClick={this.allShow} />
                    <input type="button" value="Активные" onClick={this.activeShow} />
                    <input type="button" value="Заблокированные" onClick={this.blockedShow} />
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
            </div>
        )
            ;

    }

}

export default MobileCompany;
