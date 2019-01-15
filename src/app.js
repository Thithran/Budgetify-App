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


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));