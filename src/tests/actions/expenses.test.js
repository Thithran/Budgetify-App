import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense( { id: '123abc'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    });    
});

test('Should setup add expense action object', () => {
    const expenseData = {
        description:'coffee',
        amount:'300',
        createdAt: 1000,
        note: 'this was last month rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })

});

test('Should setup edit expense action object', () => {
    const action = editExpense( '123abc', {amount: '300'} );
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            amount: '300'
        }
    })
})

test('Should setup add expense action object with default values', () => {
    const expenseDefaultData ={
        description : '', 
        note : '', 
        amount : 0, 
        createdAt : 0 
    }
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDefaultData,
            id: expect.any(String)
        }
    })
})