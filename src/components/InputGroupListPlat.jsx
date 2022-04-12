import React,{useState} from 'react';

const InputGroupListPlat = ({elementFormat, setElementFormat}) => {
    
    return (
        <>
            <label>Titre</label>
            <input type="text" value={elementFormat.title} onChange={ (e)=>setElementFormat((prev)=>({...prev,title:e.target.value})) } className='input' />
            <label>Image</label>
            <input type="file" className='input input-file' />  
        </>
    );
};

export default InputGroupListPlat;