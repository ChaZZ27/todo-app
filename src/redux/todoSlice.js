import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
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
            const finishedTodos = state.map(item => {
                if (item.id === action.payload.id) {
                    item.isFinished = !item.isFinished;
                }
                return item
            })
            return state[finishedTodos]
        }
    }
})

export const { addTodo, removeTodo, finishTodo } = todoSlice.actions

export default todoSlice.reducer;