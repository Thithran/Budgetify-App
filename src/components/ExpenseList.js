import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import ExpenseTotal from './ExpenseTotal';
import numeral from 'numeral';

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
          
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
