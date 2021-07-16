import ToDoActionTypes from './to-do.types';

export const fetchToDoStart = () => ({
    type: ToDoActionTypes.FETCH_TODO_START
});

export const fetchToDoSuccess = (toDoList) => ({
    type: ToDoActionTypes.FETCH_TODO_SUCCESS,
    payload: toDoList
});

export const fetchToDoFailure = (errorMessage) => ({
    type: ToDoActionTypes.FETCH_TODO_FAILURE,
    payload: errorMessage
});

export const addToDoItem = toDoItem => ({
    type: ToDoActionTypes.ADD_TODO_ITEM,
    payload: toDoItem
});

export const removeToDoItem = toDoItem => ({
    type: ToDoActionTypes.REMOVE_TODO_ITEM,
    payload: toDoItem
});

export const addToDoToDone = toDoItem => ({
    type: ToDoActionTypes.ADD_TODO_TO_DONE,
    payload: toDoItem
});

export const removeDoneItem = doneItem => ({
    type: ToDoActionTypes.REMOVE_DONE_ITEM,
    payload: doneItem
});



