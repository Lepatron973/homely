import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addArticle, articles as art, editArticle, removeArticle } from '../config/articleSlice';
import { setDisplay } from '../config/modalSlice';
import { getInputDateFormat } from '../config/utilities';
import InputGroupStock from './InputGroupStock';
import Modal from './Modal';

const ArticleStockCard = (props) => {
    const currentDate = new Date().toLocaleDateString()

    const dispatch = useDispatch();
    const articles = useSelector(art)
    const {listId} = useParams();
    const [articleFormat, setArticleFormat] = useState({id:1,name:"",quantity:1,date:getInputDateFormat(currentDate),listId:0})
    const filteredArticles = articles.filter(article=>article.listId == listId)
    const [editMod, setEditMod] = useState(false)
    return (
        <>
            {
                filteredArticles.map((article,index)=>
                   
                    <div  className='d-flex py-3 px-2 border rounded justify-content-between align-items-center' key={index}>
                        <div>
                            <span className='props'><input type="checkbox" className='rounded' checked={article.status} onChange={(e)=>{dispatch(editArticle({...article,status:!article.status}))}} /></span>
                            <img className="rounded-circle" src="https://img.icons8.com/color-glass/48/000000/real-food-for-meals.png" alt="" />
                            <span className='props'>{article.quantity}</span>
                            <span className='props'>{article.name}</span>
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            <span className='props'>{article.date}</span>
                            <button className='p-1 btn rounded bg-danger text-white mx-1' onClick={()=>dispatch(removeArticle(article))}><i className="bi bi-x-lg"></i></button>
                            <button className='p-1 btn rounded bg-warning text-white' onClick={()=>{
                                setArticleFormat(article)
                                dispatch(setDisplay())
                                setEditMod(!editMod)
                            }}><i className="bi bi-pencil-fill"></i></button>
                        </div>
                    </div>
                )
            }
            <Modal 
                inputGroup={<InputGroupStock articleStock={articleFormat} setArticleStock={setArticleFormat}/>}  
                elementFormat={articleFormat} 
                editMod={editMod} 
                setEditMod={setEditMod}
                add={addArticle}
                edit={editArticle}
                titleAddButton="AJouter"
            />
        </>
    );
};

export default ArticleStockCard;