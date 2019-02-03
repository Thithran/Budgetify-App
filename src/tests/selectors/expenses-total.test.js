import selectExpenseTotal from '../../selectors/expenses-total.js';
const expenses = [{
    id:'1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
},{
    id:'2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 2
},{
    id:'1',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: 4
}];

const total = selectExpenseTotal(expenses);
test('test total of expenses' , () => {
    expect(total).toBe(114195)
})