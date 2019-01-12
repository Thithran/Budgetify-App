import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css';
import './style/style.scss';

// Action
import * as actionExpenses from './actions/expenses';
import * as actionFilters from './actions/filters';

// Reducres 
import expensesReducers from './reducers/expenses';
import filtersReducers from './reducers/filters';

// Selector 
import expensesSelector from './selectors/expenses';

// Store 

const store = configureStore();

console.log(store.getState());

import getVisibleExpenses from './selectors/expenses'

// Store Update 

store.subscribe(()=> {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

// 
store.dispatch(actionExpenses.addExpense({ description: 'Water bill', amount: 4500}));
store.dispatch(actionExpenses.addExpense({ description: 'rent', amount: 109500}));
store.dispatch(actionExpenses.addExpense({ description: 'Gas bill', createdAt: 1000}));
store.dispatch(actionFilters.sortByAmount()); // amount

// addExpense -> water bill
// addExpnese -> Gas bill
// setTextFilter -> bill 
// get Visible -> print visibles one to the screen
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const demoState = {
    expense: [{
        id : 'daslfjdlskaf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0 
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //Date or amount
        startDate: undefined,
        endDate: undefined
    }
};

ReactDOM.render(jsx, document.getElementById('app'));