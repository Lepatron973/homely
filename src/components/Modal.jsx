import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayModal,setDisplay } from '../config/modalSlice';
import InputGroupList from './InputGroupList';
import { addArticle, list } from '../config/listSlice';
import "../styles/AddInput.css";
import { getPage , getInputDateFormat} from '../config/utilities';
import { useParams } from 'react-router-dom';
import InputGroupStock from './InputGroupStock';
import '../styles/Modal.css'
const Modal = ({inputGroup,modalTitle,add,edit,elementFormat,editMod,titleAddButton}) => {
   
    const display = useSelector(displayModal);
    const dispatch = useDispatch();
    return (
        <div className={`${display == true ? "d-none" : ""} modale`} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{modalTitle}</h5>
                    <button type="button" onClick={(e)=>{dispatch(setDisplay())}} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    
                    {inputGroup}
                
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={(e)=>{dispatch(setDisplay())}} data-bs-dismiss="modal">Annuler</button>
                    <button type="button" onClick={
                        (e)=>{
                            if(editMod == false){

                                dispatch(add(elementFormat))
                                 
                            }else{
                                dispatch(edit(elementFormat))
                                 
                            }
                            dispatch(setDisplay())  
                            
                        }
                    } className={`btn ${(editMod) == false ? "btn-primary" : "btn-warning"}`}>{(editMod) == false ? titleAddButton : "modifier"}</button>
                </div>
                </div>
            </div>
        </div>

    );
};

export default Modal;