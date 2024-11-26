import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodo {
    id: number,
    title: string,
    isDone: boolean
}

type TInitialState = {
    startID: number,
    todos: ITodo[]
}

const initialState: TInitialState = {
    startID: 1,
    todos: []
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: ITodo = {
                id: state.startID,
                title: action.payload,
                isDone: false,
            }
            state.todos.push(newTodo);
            state.startID += 1; // ID artırma
        },
        doneControl: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.isDone = !todo.isDone;
            }
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload); 
        }
    }
})

export const { addTodo, doneControl, removeTodo } = todosSlice.actions
export default todosSlice.reducer
