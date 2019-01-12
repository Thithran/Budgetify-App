// When an command is called, Actions handels all the information, then sent it to Reducers to perform it 

// command -> Translated by Actions -> Perform by reducers 

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
            return [
                ...state,
                action.expense
            ]; // this return a new list of expenses

        case 'REMOVE_EXPENSE': 
            return state.filter(({id}) => id !== action.id);

        case 'EDIT_EXPENSE': 
            return state.map((expense)=> {
                if (expense.id === action.id){
                    return {
                        ...expense, 
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
};

