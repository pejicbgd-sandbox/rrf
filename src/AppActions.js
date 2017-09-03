import AppDispatcher from './AppDispatcher';
import actions from './actions';

 const AppActions = {
    createAccount() {
        AppDispatcher.dispatch({
            type: actions.CREATED_ACCOUNT,
            ammount: 0
        });
    },

    deposit(ammount) {
        AppDispatcher.dispatch({
            type: actions.DEPOSITED,
            ammount: ammount
        });
    },

    withdraw(ammount) {
        AppDispatcher.dispatch({
            type: actions.WITHDRAWED,
            ammount: ammount
        });
    }
 };

 export default AppActions;