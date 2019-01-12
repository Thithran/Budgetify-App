import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT' });
    expect(state).toEqual([])
})

test('shouw remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0],expenses[2]]);
})

// shoud not remove expens if id not found 
test ('should not remove expense if id not found', () => {
    const action ={
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state= expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
    
})

test ('Should setup add expense', () => {
    const expense = {
        id: '101',
        description: 'bill', 
        note: '', 
        createdAt: 20000,
        amount: 100
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});


//should edit expense 
test ('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount: 10000
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(10000);
})

// shouldn't edit expense if id not found 
test ('should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE', 
        id: '-1',
        updates: {
            amount: 10000
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})