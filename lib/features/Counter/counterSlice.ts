import { createSlice, PayloadAction } from "@reduxjs/toolkit"


type TState = {
    count:number
}

const initialState:TState = {
    count:0
}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        addOne:(state)=>{
            state.count +=1;
        },
        subtractOne:(state)=>{
            state.count -= 1;
        },
        addCustom:(state,action:PayloadAction<number>)=>{
            state.count += action.payload; 
        },
        subtractCustom:(state,action:PayloadAction<number>)=>{
            state.count -= action.payload;
        }
    }
})

export const {addOne,subtractOne,addCustom,subtractCustom} = counterSlice.actions;
export default counterSlice.reducer