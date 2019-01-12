import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import expenseSelector from '../selectors/expenses'
export const ExpenseList = (props) => (
    <div>
    {   
        props.expenses.length === 0 ? (
            <p>No expenses</p>
        ) : (
            props.expenses.map(el => 
            <ExpenseListItem 
                key={el.id}
                {...el}
            />)
        )
    }
    {}
    </div>
);

const ConnectedExpenseList = connect((state) => {
    return {
        expenses: expenseSelector        (state.expenses, {...state.filters})    
    };
    
})(ExpenseList);

export default ConnectedExpenseList;
