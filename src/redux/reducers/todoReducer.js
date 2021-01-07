import {v4} from 'uuid'
import * as actionTypes from '../actionTypes/todoActionTypes'

const initState = []

export const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [
                ...state,
                {
                    id: v4(),
                    name: action.payload.name,
                },
            ]
        case actionTypes.REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload.id)
        case actionTypes.LOAD_TODOS:
            return action.payload.todos
        default:
            return state
    }
}