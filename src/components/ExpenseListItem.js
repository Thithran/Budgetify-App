// Export a stateless functional component 
// description, amount, createdAt 

import React from 'react';
import {Link} from 'react-router-dom'; // you have to use LINK in order to remain the ID for expense. a href automatically refresh new ID 
import {connect} from 'react-redux';
import { removeExpense } from '../actions/expenses'
export const ExpenseListItem = ({id, dispatch, description, amount, createdAt}) => (
    <div>
        <Link to= {`/edit/${id}`}>
        <h3>{description}</h3></Link> 
        <p>{amount} - {createdAt}</p>
        <button onClick={() => {
            dispatch(removeExpense({id}))
        }} >Remove</button>
    
    </div>
);

export default connect()(ExpenseListItem);


