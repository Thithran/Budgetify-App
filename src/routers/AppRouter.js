import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpense';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import EditExpensePage from '../components/EditExpense';

// Using Browser Router and Ruote to make multiple website 

const AppRouter = () => (
    <BrowserRouter>
        {//Using swtich to get only one URL from BrowserRouter
        }
        <div>
            <Header />
        <Switch> 
            <Route exact path="/" component={ExpenseDashboardPage} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage}/>
        </Switch>
        </div>
    </BrowserRouter>
)
export default AppRouter;