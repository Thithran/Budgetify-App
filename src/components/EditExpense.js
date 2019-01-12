import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses'
const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm 
                expense={props.expense}
                
                onSubmit={(expense) => {
                    // Dispatch the action to edit the expense
                    // Redirect to the dashboard
                    props.dispatch(editExpense(props.expense.id, {...expense}));
                    props.history.push('/');
                    // console.log('updated', expense);
                }}
            />
            <button onClick={() => {
                    props.dispatch(removeExpense({id: props.expense.id}))
                    props.history.push('/');
                    // console.log('removed', expense)
                }}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};
export default connect(mapStateToProps)(EditExpensePage);
// store.dispatch (editExpense(expenseTwo.expense.id, {amount: 500}));

// Technique: Create onSubmit tools and onClick button 
// Reuse ExpenseForm to edit 