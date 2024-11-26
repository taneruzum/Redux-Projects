import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IMode {
    isDarkMode:boolean
}

const initialState:IMode ={
    isDarkMode:false
}

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggleTheme:(state)=>{
            state.isDarkMode = !state.isDarkMode;
        },
        setTheme:(state,action:PayloadAction<string>)=>{
            state.isDarkMode = action.payload === 'dark';
        }
    }
})

export const {toggleTheme,setTheme}= themeSlice.actions
export default themeSlice.reducer