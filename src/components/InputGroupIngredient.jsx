import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { articles as art } from '../config/articleSlice';
const InputGroupIngredient = ({elementFormat, setElementFormat}) => {
    const articles = useSelector(art)

    return (
        <>
            <label>Ingredient</label>
            <select name="ingredient" id="ingredientList">
                <option value={null}>Choisir un ingrédient</option>
                {articles.map((article,index)=><option value={article.id} onClick={(e)=>setElementFormat(prev=>({...prev,articleId:article.id,name:article.name,price:article.price}))} key={index}>{article.name}</option>)}
            </select>
            <label>Quantité</label>
            <input type="number" value={elementFormat.quantity} onChange={ (e)=>setElementFormat((prev)=>({...prev,quantity:e.target.value})) } min={1} className='input' />
        </>
    );
};

export default InputGroupIngredient;