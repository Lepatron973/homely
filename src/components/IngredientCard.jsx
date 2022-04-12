import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { articles as art} from '../config/articleSlice';
import { ingredients as ing, removeIngredient,addIngredient, editIngredient} from '../config/ingredientSlice';
import { setDisplay } from '../config/modalSlice';
import InputGroupArticle from './InputGroupArticle'
import InputGroupIngredient from './InputGroupIngredient';
import Modal from './Modal';
const IngredientCard = (props) => {
    const dispatch = useDispatch();
    const [prixTt, setPrixTt] = useState(0)
    const articles = useSelector(art)
    const ingredients = useSelector(ing)
    const {listId} = useParams();
    const [articleFormat, setArticleFormat] = useState({id:1,status:false,name:"",quantity:1,price:0,platId:listId,articleId:1})
    const filteredIngredients = ingredients.filter(article=>article.platId == listId)
    const [editMod, setEditMod] = useState(false)
    
    return (
        <>
            <div className='missedItem'>
                <h4 className='text-center m-3'>Ingrédient manquant</h4>
                {
                    filteredIngredients.map((article,index)=>{

                        if(article.status == false && article.quantity >= 0 && article.platId == listId){

                            return  <div  className='d-flex py-3 px-2 border bg-warning rounded justify-content-between align-items-center' key={index}>
                                        <div>
                                            <img className="rounded-circle" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-harvest-gardening-flaticons-lineal-color-flat-icons.png" alt="" />
                                            <span className='props'>{article.quantity}</span>
                                            <span className='props'>{article.name}</span>
                                        </div>
                                        <div>
                                            
                                        </div>
                                        <div>
                                            <button className='p-1 btn rounded bg-danger text-white mx-1' onClick={()=>dispatch(removeIngredient(article))}><i className="bi bi-x-lg"></i></button>
                                        </div>
                                    </div>
                        }
                    })
                }
            </div>
            <div className='missedItem'>
                <h4 className='text-center m-3'>Ingrédient disponible</h4>
                {
                    articles.map((article,index)=>{

                        if(article.status == true && article.quantity > 0 && article.platId == listId){
                            
                            return  <div  className='d-flex py-3 px-2 border bg-success rounded justify-content-between align-items-center' key={index+10}>
                                        <div>
                                            <img className="rounded-circle" src="https://img.icons8.com/color-glass/48/000000/real-food-for-meals.png" alt="" />
                                            <span className='props'>{article.quantity}</span>
                                            <span className='props'>{article.name}</span>
                                        </div>
                                        <div>
                                            
                                        </div>
                                        <div>
                                            <span className='props'>{article.price}€</span>
                                        </div>
                                    </div>
                        }
                    })
                }
            </div>
            <Modal 
                inputGroup={<InputGroupIngredient elementFormat={articleFormat} setElementFormat={setArticleFormat}/>}  
                elementFormat={articleFormat} 
                editMod={editMod} 
                setEditMod={setEditMod}
                add={addIngredient}
                edit={editIngredient}
                titleAddButton="Ajouter"
            />
        </>
    );
};

export default IngredientCard;