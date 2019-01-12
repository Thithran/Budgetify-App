import moment from 'moment';
export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 0,
    createdAt: 0
},{
    id: '2',
    description: 'rent',
    note: '',
    amount: 1,
    createdAt: moment(0).subtract(4, 'day').valueOf()
},{
    id: '3',
    description: 'credit card',
    note: '',
    amount: 2 ,
    createdAt: moment(0).add(4,'day').valueOf()
}]