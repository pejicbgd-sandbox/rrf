import React, { Component } from 'react';

import AppStore from './AppStore';
import AppActions from './AppActions';

export default class App extends Component {
    
    constructor() {
        super(...arguments);
        AppActions.createAccount();
        this.state = {
            balance: AppStore.getBalance()
        };
    }

    componentDidMount() {
        this.storeListener = AppStore.addListener(data => {
            this.handleEvent(data);
        });
    }

    componentWillUnmount() {
        this.storeListener.remove();
    }

    handleEvent() {
        this.setState({
            balance: AppStore.getBalance()
        });
    }

    deposit() {
        AppActions.deposit(Number(this.refs.ammount.value));
        this.refs.ammount.value = '';
    }

    withdraw() {
        AppActions.withdraw(this.refs.ammount.value);
        this.refs.ammount.value = '';
    }

    render () {
        return (
            <div className="banking">
                <h1>Dobrodosli na ultra fancy banking</h1>
                <h4>vas trenutni status je mizernih {this.state.balance}din</h4>
                <input type="text" placeholder="Unesi iznos" ref="ammount" />
                <br /><br />
                <button onClick={this.deposit.bind(this)}>Depozit</button>
                &nbsp; &nbsp;
                <button onClick={this.withdraw.bind(this)}>Podizanje</button>
            </div>
        );
    }
}