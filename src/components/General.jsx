import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectGeneral } from '../config/generalSlice';

const General = () => {
    const general = useSelector(selectGeneral)
    return (
        <div className='d-flex flex-wrap'>
            {general.map((element,index)=>
                <Link to={element.path} id='home-card' className='col-5 p-2 border rounded bg-light m-1' key={index}>
                    <img className='icon' src={element.icon} />
                    <div className='title'> {element.title}</div> 
                </Link>
            )}
        </div>
    );
};

export default General;