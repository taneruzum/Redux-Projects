import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/Theme/themeSlice";
import counterSlice from "./features/Counter/counterSlice";
import modalSlice from "./features/Modal/modalSlice";
import todosSlice from "./features/Todo/todoSlice";

export const GlobalStore = configureStore({
    reducer:{
        themeSlice,
        counterSlice,
        modalSlice,
        todosSlice,
    },
})

export type AppStore = typeof GlobalStore
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

// export type RootState = ReturnType<typeof GlobalStore.getState>
// export type AppDispatch = typeof GlobalStore.dispatch
