import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Budgetify</h1>
        <NavLink exact to="/" activeClassName="active">Home page </NavLink>
        <NavLink to="/create" activeClassName="active">Create </NavLink>
    </header>
)

export default Header;