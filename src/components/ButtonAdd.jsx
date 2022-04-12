import React from 'react';
import '../styles/ButtonAdd.css'
import { useDispatch, useSelector } from 'react-redux';
import { displayModal,setDisplay } from '../config/modalSlice';

const ButtonAdd = () => {
    const display = useSelector(displayModal);
    const dispatch = useDispatch();
    return (
        <button id='button-add-container' onClick={(e)=>dispatch(setDisplay())} className={`btn btn-primary ${display == false ? "d-none" : ""}`}>
           <i className="bi bi-plus-lg"></i>
        </button>
    );
};

export default ButtonAdd;