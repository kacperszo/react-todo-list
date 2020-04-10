import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actions'
import { combineReducers } from 'redux'

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]

        case REMOVE_TODO:
            return state.filter((todo, index) => index !== action.index)

        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })

        default:
            return state
    }
}

const reducers = combineReducers({
    todos
})

export default reducers