import { EventEmitter } from 'fbemitter';
import AppDispatcher from './AppDispatcher';
import actions from './actions';

let balance = 0;
let CHANGE_EVENT = 'status changed';
let _e = new EventEmitter();

const AppStore = {
    addListener(callback) {
        return _e.addListener(CHANGE_EVENT, callback);
    },

    getBalance() {
        return balance;
    },

    dispatchToken: AppDispatcher.register(action => {
        //pay attention, emit() must be called AFTER balance update
        //othervise, old balance value is emitted`
        switch(action.type) {
            case actions.CREATED_ACCOUNT:
            balance = 0;
            _e.emit(CHANGE_EVENT);
            break;

            case actions.DEPOSITED:
            balance = balance + Number(action.ammount);
            _e.emit(CHANGE_EVENT);
            break;

            case actions.WITHDRAWED:
            balance = balance - action.ammount;
            _e.emit(CHANGE_EVENT);
            break;
        }
    })
};

export default AppStore;