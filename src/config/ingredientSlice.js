import {createSlice} from "@reduxjs/toolkit";

export const ingredientSlice = createSlice({
    name: "ingredients",
    initialState: {
        value: JSON.parse(localStorage.getItem('ingredients'))
    },
    reducers: {
    
        addIngredient: (state,action)=>{
            if(state.value.length > 0){
                let id = state.value[state.value.length-1].id
                action.payload.id = id+1 
            }
            state.value.push(action.payload)
            localStorage.setItem('ingredients',JSON.stringify(state.value));
            state.value = JSON.parse(localStorage.getItem('ingredients'))
        },
        // ici action.payload correspond à un tableau où la clée 0 correspond à la position de le tableau value / clée 1 = l'Ingredient modifié
        editIngredient: (state,action)=>{
            let ingredients = JSON.parse(localStorage.getItem('ingredients'));
            let index = ingredients.findIndex(element=>element.id === action.payload.id)
            ingredients[index] = action.payload;
            localStorage.setItem('ingredients',JSON.stringify(ingredients));
            state.value = JSON.parse(localStorage.getItem('ingredients'));
            
        },
        removeIngredient: (state,action)=>{
            let ingredients = JSON.parse(localStorage.getItem('ingredients'))
            let index = ingredients.findIndex(element=>element.id === action.payload.id)
            ingredients.splice(index,1)
            localStorage.setItem('ingredients',JSON.stringify(ingredients));
            state.value = JSON.parse(localStorage.getItem('ingredients'));
        },
        
    }

})
export const {addIngredient,editIngredient,removeIngredient,setIngredientStatus} = ingredientSlice.actions
export const ingredients = state => state.ingredientConfig.value
export default  ingredientSlice.reducer;