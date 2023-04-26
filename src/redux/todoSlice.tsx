import { createSlice } from "@reduxjs/toolkit";

type NewTodoType = {
    id: number;
    text: string;
    isFinished: boolean;
}

const todoSlice = createSlice({
    name: "todos",
    initialState: [] as NewTodoType[],
    reducers: {
        addTodo: (state, action) => {
            const newTodo: NewTodoType = {
                id: Date.now(),
                text: action.payload.text,
                isFinished: false
            }
            state.push(newTodo);
        },
        removeTodo: (state, action) => {
            const removedTodos = state.filter(item => action.payload.id !== item.id)
            return removedTodos
        },
        finishTodo: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].isFinished = !state[index].isFinished;
            }
        }
    }
})

export const { addTodo, removeTodo, finishTodo } = todoSlice.actions

export default todoSlice.reducer;