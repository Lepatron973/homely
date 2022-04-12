import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addArticle, articles as art, editArticle, removeArticle } from '../config/articleSlice';
import { setDisplay } from '../config/modalSlice';
import InputGroupArticle from './InputGroupArticle'
import Modal from './Modal';
const ArticleCard = (props) => {
    const dispatch = useDispatch();
    const [prixTt, setPrixTt] = useState(0)
    const articles = useSelector(art)
    const {listId} = useParams();
    const [articleFormat, setArticleFormat] = useState({id:1,status:false,name:"",quantity:1,price:0,listId:listId})
    const filteredArticles = articles.filter(article=>article.listId == listId)
    const [editMod, setEditMod] = useState(false)
    let prixTTAchat = 0;
    articles.map(article=>{
        if(article.listId == listId && article.status == true)
            prixTTAchat += parseFloat(article.price)
    })
    return (
        <>
            <div className='missedItem'>
                <h4 className='text-center m-3'>Liste</h4>
                {
                    filteredArticles.map((article,index)=>{

                        if(article.status == false){

                            return  <div  className='d-flex py-3 px-2 border rounded justify-content-between align-items-center' key={index}>
                                        <div>
                                            <span className='props'><input type="checkbox" className='rounded' checked={article.status} onChange={(e)=>{dispatch(editArticle({...article,status:!article.status}))}}/></span>
                                            <img className="rounded-circle" src="https://img.icons8.com/color-glass/48/000000/real-food-for-meals.png" alt="" />
                                            <span className='props'>{article.quantity}</span>
                                            <span className='props'>{article.name}</span>
                                        </div>
                                        <div>
                                            
                                        </div>
                                        <div>
                                            <span className='props'>{article.price}€</span>
                                            <button className='p-1 btn rounded bg-danger text-white mx-1' onClick={()=>dispatch(removeArticle(article))}><i className="bi bi-x-lg"></i></button>
                                            <button className='p-1 btn rounded bg-warning text-white' onClick={()=>{
                                                setArticleFormat(article)
                                                dispatch(setDisplay())
                                                setEditMod(!editMod)
                                            }}><i className="bi bi-pencil-fill"></i></button>
                                        </div>
                                    </div>
                        }
                    })
                }
            </div>
            <div className='missedItem'>
                <h4 className='text-center m-3'>Articles achetés : {prixTTAchat}€</h4>
                {
                    filteredArticles.map((article,index)=>{

                        if(article.status == true){
                            
                            return  <div  className='d-flex py-3 px-2 border bg-success rounded justify-content-between align-items-center' key={index+10}>
                                        <div>
                                            <span className='props'><input type="checkbox" className='rounded' checked={article.status} onChange={(e)=>{dispatch(editArticle({...article,status:!article.status}))}}/></span>
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
                inputGroup={<InputGroupArticle elementFormat={articleFormat} setElementFormat={setArticleFormat}/>}  
                elementFormat={articleFormat} 
                editMod={editMod} 
                setEditMod={setEditMod}
                add={addArticle}
                edit={editArticle}
                titleAddButton="Ajouter"
            />
        </>
    );
};

export default ArticleCard;