import React,{useState} from 'react';

const InputGroupList = ({elementFormat, setElementFormat}) => {
    
    return (
        <>
            <label>Titre</label>
            <input type="text" value={elementFormat.title} onChange={ (e)=>setElementFormat((prev)=>({...prev,title:e.target.value})) } className='input' />
            <label>Date</label>
            <input type="date" value={elementFormat.date} onChange={ (e)=>setElementFormat((prev)=>({...prev,date:e.target.value}))  } className='input' /> 
            <label>Image</label>
            <input type="file" className='input input-file' />  
        </>
    );
};

export default InputGroupList;