import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { editList, list } from '../config/listSlice';
import Modal from './Modal';
import InputGroupListPlat from './InputGroupListPlat';
import { getInputDateFormat } from '../config/utilities';
import { addList } from '../config/listSlice';
import { articles as art} from '../config/articleSlice';
const ListPlatsCard = () => {
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
    const [listFormat, setListFormat] = useState({id:1, title:"",type:"plats"});
    const [editMod, setEditMod] = useState(false)
    return (
        <>  
            {groupList.map((list,index)=>{

                if(list.type == "plats"){

                    return <Link  to={`/plats/${list.id}`} key={index} className='d-flex m-1 py-3 px-2 border rounded justify-content-between align-items-center'>
                                <div>
                                    <img className="rounded-circle" src="https://img.icons8.com/external-colours-bomsymbols-/91/000000/external-food-food-set-1-colours-bomsymbols-.png" alt="" />
                                </div>
                                <div>
                                    <span>{list.title}</span>
                                </div>
                            </Link>
                }
            }
            )}
            <Modal 
                inputGroup={<InputGroupListPlat elementFormat={listFormat} setElementFormat={setListFormat}/>}  
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
export default ListPlatsCard;