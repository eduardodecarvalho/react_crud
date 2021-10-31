import './Logo.css';
import logo from '../../assets/images/brasil_flag.png'
import React from 'react';
import { Link } from 'react-router-dom';

const App = () => 
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </ Link>
    </aside>

export default App;    