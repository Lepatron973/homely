import {createSlice} from "@reduxjs/toolkit";

export const articleSlice = createSlice({
    name: "articles",
    initialState: {
        value: JSON.parse(localStorage.getItem('articles'))
    },
    reducers: {
    
        setArticleStatus: (state,action)=>{
            state.value = JSON.parse(localStorage.getItem('articles'))
            state.value[action.payload.index].status = action.payload.status
            localStorage.setItem('articles',JSON.stringify(state.value));

        },
        addArticle: (state,action)=>{
            if(state.value.length > 0){
                let id = state.value[state.value.length-1].id
                action.payload.id = id+1 
            }
            state.value.push(action.payload)
            localStorage.setItem('articles',JSON.stringify(state.value));
            state.value = JSON.parse(localStorage.getItem('articles'))
        },
        // ici action.payload correspond à un tableau où la clée 0 correspond à la position de le tableau value / clée 1 = l'article modifié
        editArticle: (state,action)=>{
            let articles = JSON.parse(localStorage.getItem('articles'));
            let index = articles.findIndex(element=>element.id === action.payload.id)
            articles[index] = action.payload;
            localStorage.setItem('articles',JSON.stringify(articles));
            state.value = JSON.parse(localStorage.getItem('articles'));
            
        },
        removeArticle: (state,action)=>{
            let articles = JSON.parse(localStorage.getItem('articles'))
            let index = articles.findIndex(element=>element.id === action.payload.id)
            articles.splice(index,1)
            localStorage.setItem('articles',JSON.stringify(articles));
            state.value = JSON.parse(localStorage.getItem('articles'));
        },
        
    }

})
export const {addArticle,editArticle,removeArticle,setArticleStatus} = articleSlice.actions
export const articles = state => state.articleConfig.value
export default  articleSlice.reducer;