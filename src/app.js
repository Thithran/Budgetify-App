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

import getVisibleExpenses from './selectors/expenses'

// Store Update 

// store.subscribe(()=> {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// })

// addExpense -> water bill
// addExpnese -> Gas bill
// setTextFilter -> bill 
// get Visible -> print visibles one to the screen
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));