import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { editList, list } from '../config/listSlice';
import Modal from './Modal';
import InputGroupList from './InputGroupList';
import { getInputDateFormat } from '../config/utilities';
import { addList } from '../config/listSlice';
import { articles as art} from '../config/articleSlice';
const ListCard = () => {
    const groupList = useSelector(list)
    const currentDate = new Date().toLocaleDateString()
    const articles = useSelector(art)
    const totalArticle = (id)=>{
        let result = articles.filter(article=>article.listId == id)
        return result.length;
    }
    const purchasedItem = (id)=>{
        let result = articles.filter(article=>article.listId == id && article.status == true)
        return result.length;
    }
    const [listFormat, setListFormat] = useState({id:1, title:"",type:"list",date:getInputDateFormat(currentDate)});
    const [editMod, setEditMod] = useState(false)
    return (
        <>  
            {groupList.map((list,index)=>{
                if(list.type == "list"){

                    return <Link  to={`/list/${list.id}`} key={index} className='d-flex m-1 py-3 px-2 border rounded justify-content-between align-items-center'>
                                <div>
                                    <img className="rounded-circle" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-grocery-food-delivery-wanicon-lineal-color-wanicon.png" alt="" />
                                </div>
                                <div>
                                    <span>{list.title}</span>
                                </div>
                                <span>{
                                        `${purchasedItem(list.id)}/${totalArticle(list.id)}`
                                    }
                                </span>
                            </Link>
                }}
            )}
            <Modal 
                inputGroup={<InputGroupList elementFormat={listFormat} setElementFormat={setListFormat}/>}  
                elementFormat={listFormat} 
                editMod={editMod} 
                setEditMod={setEditMod}
                add={addList}
                edit={editList}
                titleAddButton="Créer"
            />
        </>
    );
}
export default ListCard;