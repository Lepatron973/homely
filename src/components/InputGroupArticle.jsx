import React,{useState} from 'react';

const InputGroupArticle = ({elementFormat, setElementFormat}) => {
    
    return (
        <>
            <label>Nom</label>
            <input type="text" value={elementFormat.name} onChange={ (e)=>setElementFormat((prev)=>({...prev,name:e.target.value})) } className='input' />
            <label>Quantité</label>
            <input type="number" value={elementFormat.quantity} onChange={ (e)=>setElementFormat((prev)=>({...prev,quantity:e.target.value})) } min={0} className='input' />
            <label>Prix</label>
            <input type="number" value={elementFormat.price} onChange={ (e)=>setElementFormat((prev)=>({...prev,price:e.target.value}))  } min={0} step={0.1} className='input' /> 
            <label>Image</label>
            <input type="file" className='input input-file' />  
        </>
    );
};

export default InputGroupArticle;