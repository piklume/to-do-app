export const addToDoToDone = (state,toDoItem) => {
    const { toDoList,doneList } = state;

    const newToDoList = toDoList.filter(toDo => toDo.id !== toDoItem.id);
    // const max = data.reduce((prev, current) => (prev.y > current.y) ? prev : current)
    const newDoneId = doneList.reduce((prev, curr) => (prev.id > curr.id) ? prev : curr, 0 ).id + 1;

    const newDoneList = [ ...doneList, { id: newDoneId, body: toDoItem.body} ]

    return {...state, 
            toDoList: newToDoList, 
            doneList: newDoneList 
        }
}
    
