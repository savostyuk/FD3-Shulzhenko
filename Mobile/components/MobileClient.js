import React from 'react';
import PropTypes from 'prop-types';

import {clientEvents} from './events';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

    static propTypes = {
        info:PropTypes.shape({
            id: PropTypes.number.isRequired,
            fam: PropTypes.string.isRequired,
            im: PropTypes.string.isRequired,
            otch: PropTypes.string.isRequired,
            balance: PropTypes.number.isRequired,
        }),
    };

    editClient = (EO) =>{
        clientEvents.emit('EEditClient', this.props.info.id);
    }

    deleteClient = (EO) =>{
        clientEvents.emit('EDeleteClient', this.props.info.id);
    }


    render() {

        console.log("MobileClient id="+this.props.info.id+" render");

        let status;
        if (this.props.info.balance>=0) status = 'active'
        else status = 'blocked';

        return (
                    <tr className='MobileClientInfo'>
                        <td>{this.props.info.fam}</td>
                        <td>{this.props.info.im}</td>
                        <td>{this.props.info.otch}</td>
                        <td>{this.props.info.balance}</td>
                        <td className={"status"+status}>{status}</td>
                        <td>
                            <input type='button' value='Редактировать'  onClick={this.editClient}/>
                        </td>
                        <td>
                            <input type='button' value='Удалить'  onClick={this.deleteClient}/>
                        </td>
                    </tr>

        );

    }

}

export default MobileClient;
