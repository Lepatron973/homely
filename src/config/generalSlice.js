import {createSlice} from "@reduxjs/toolkit";

export const generalSlice = createSlice({
    name: "general",
    initialState: {
        value: JSON.parse(localStorage.getItem("general")),
    
    },
    reducers: {
       
    }

})
export const {} = generalSlice.actions
export const selectGeneral = state => state.generalConfig.value
export default  generalSlice.reducer;