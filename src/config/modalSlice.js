import {createSlice} from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        value: true,
    },
    reducers: {
       setDisplay: (state)=>{
           state.value = !state.value
       }
    }

})
export const {setDisplay} = modalSlice.actions
export const displayModal = state => state.modalConfig.value
export default  modalSlice.reducer;