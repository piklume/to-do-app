import ToDoActionTypes from './to-do.types';
import { addToDoToDone } from './to-do.utils';

const INITIAL_STATE = {
    toDoList: [
        {
            id: 1,
            body: 'Wash the dishes'
        },
        {
            id: 2,
            body: 'Buy new books'
        },
        {
            id: 3,
            body: 'Get a dog'
        }
    ],
    doneList: [
        {
            id: 1,
            body: 'Pick up laundry'
        },
        {
            id: 2,
            body: 'Get medicines'
        },
        {
            id: 3,
            body: 'Get a cat'
        }
    ],
    isFetching: false,
    errorMessage: null
}

const toDoReducer = (state= INITIAL_STATE, action) => {
    switch(action.type) {
        case ToDoActionTypes.FETCH_TODO_START:
            return {
                ...state,
                isFetching: true
            };
        case ToDoActionTypes.FETCH_TODO_SUCCESS:
            return {
                ...state,
                toDoList: action.payload,
                errorMessage: null
            };
        case ToDoActionTypes.FETCH_TODO_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };
        case ToDoActionTypes.ADD_TODO_ITEM:
            return {
                ...state,
                toDoList: [...state.toDoList, action.payload]
            };
        case ToDoActionTypes.REMOVE_TODO_ITEM:
            return {
                ...state,
                toDoList: state.toDoList.filter(todo => todo.id !== action.payload.id)
            };
        case ToDoActionTypes.ADD_TODO_TO_DONE:
            return {
                ...addToDoToDone(state, action.payload)
            }
        default:
            return state;
    }
}

export default toDoReducer;