import React from 'react';
import { Link } from 'react-router-dom';
import { getPage } from '../config/utilities';
const Header = (props) => {
   
    return (
        <div className='container'>
            <h1 ><span id='prevButton'></span> Grocery App</h1>
            <h2>{props.title}</h2>
        </div>
    );
};
export default Header;