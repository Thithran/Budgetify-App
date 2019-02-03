import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export class ExpenseTotal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sum: 0,
        }
    }
    componentDidMount = () => {
        let sum = 0;
        this.props.expenses.map((expense) => {
            sum = sum + expense.amount;
        })
        this.setState({ sum });
    }
    render() {
        return (
            <div>
                Total of expenses is: {numeral(this.state.sum / 100).format('$0,0.00')}
            </div>
        )
    }
}

export default ExpenseTotal;
