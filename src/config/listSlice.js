import {createSlice} from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: "list",
    initialState: {
        value: JSON.parse(localStorage.getItem('list'))
    },
    reducers: {
        setListStatus: (state,action)=>{
            state.value = JSON.parse(localStorage.getItem('list'))
            state.value[action.payload.index].status = action.payload.status
            localStorage.setItem('list',JSON.stringify(state.value));

        },
        addList: (state,action)=>{
            if(state.value.length > 0){
                let id = state.value[state.value.length-1].id
                action.payload.id = id+1 
            }
            state.value.push(action.payload)
            localStorage.setItem('list',JSON.stringify(state.value));
            state.value = JSON.parse(localStorage.getItem('list'))
        },
        // ici action.payload correspond à un tableau où la clée 0 correspond à la position de le tableau value / clée 1 = l'List modifié
        editList: (state,action)=>{
            let list = JSON.parse(localStorage.getItem('list'));
            let index = list.findIndex(element=>element.id === action.payload[0])
            list[index] = action.payload[1];
            localStorage.setItem('list',JSON.stringify(list));
            
        },
        removeList: (state,action)=>{
            let list = JSON.parse(localStorage.getItem('list'))
            let index = list.findIndex(element=>element.id === action.payload)
            list.splice(index,1)
            localStorage.setItem('list',JSON.stringify(list));
        },
    }

})
export const {addList,editList,removeList,setListStatus} = listSlice.actions
export const list = state => state.listConfig.value
export default  listSlice.reducer;