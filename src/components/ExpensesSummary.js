import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = (props) => {
    const expenseWord = props.expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = '€' + numeral(props.expensesTotal / 100).format('0,0.00')
    console.log(props.expensesTotal)
    return (
        <div>
            <h2>
            {!(props.expensesCount === 0) && <div>Viewing {props.expensesCount} {expenseWord} with total: {formattedExpensesTotal}</div>}
            </h2>
        </div>
    )
};
const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
  };
  
  export default connect(mapStateToProps)(ExpenseSummary);
  