import React,{useState} from 'react';

const InputGroupStock = ({articleStock, setArticleStock}) => {
    
    return (
        <>
            <label>Nom</label>
            <input type="text" value={articleStock.name} onChange={ (e)=>setArticleStock((prev)=>({...prev,name:e.target.value})) } className='input' />
            <label>Quantité</label>
            <input type="number" value={articleStock.quantity} onChange={ (e)=>setArticleStock((prev)=>({...prev,quantity:e.target.value})) } min={0} className='input' />
            <label>Date</label>
            <input type="date" value={articleStock.date} onChange={ (e)=>setArticleStock((prev)=>({...prev,date:e.target.value}))  } className='input' /> 
            <label>Image</label>
            <input type="file" className='input input-file' />  
        </>
    );
};

export default InputGroupStock;