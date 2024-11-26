import { createSlice } from "@reduxjs/toolkit";


type TModalInit ={
    isOpen:boolean
}

const initialState:TModalInit = {
    isOpen:false
}

const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
        modalController:(state)=>{
            state.isOpen = !state.isOpen
        }
    }
})

export const {modalController} = modalSlice.actions
export default modalSlice.reducer