import * as actionTypes from '../actionTypes/todoActionTypes'


export const addTodo = name => ({
    type: actionTypes.ADD_TODO,
    payload: {
        name: name,
    },
})

export const loadTodos = todos => ({
    type: actionTypes.LOAD_TODOS,
    payload: {
        todos: todos,
    },
})

export const removeTodo = id => ({
    type: actionTypes.REMOVE_TODO,
    payload: {
        id: id,
    },
})