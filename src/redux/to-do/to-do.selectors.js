import { createSelector} from 'reselect';

const selectToDos = state => state.todos;

export const selectToDoList = createSelector(
    [selectToDos],
    toDos => toDos.toDoList
);

export const selectDoneList = createSelector(
    [selectToDos],
    toDos => toDos.doneList
);

