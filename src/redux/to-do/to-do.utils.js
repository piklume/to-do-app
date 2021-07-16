const getNewId = (items) => (
    (items.length > 0) ?
    items.reduce((prev, curr) => (prev.id > curr.id) ? prev : curr, 0 ).id + 1
    : 1
)


export const addToDoToDone = (state,toDoItem) => {
    const { toDoList,doneList } = state;

    const newToDoList = toDoList.filter(toDo => toDo.id !== toDoItem.id);
    // const max = data.reduce((prev, current) => (prev.y > current.y) ? prev : current)
    const newId = getNewId(doneList);

    const newDoneList = [ ...doneList, { id: newId, body: toDoItem.body} ]

    return {...state, 
            toDoList: newToDoList, 
            doneList: newDoneList 
        }
}

export const addToDoItem = (toDoList, toDoItem) => {
    const newId = getNewId(toDoList);

    return [...toDoList, { id: newId, body: toDoItem.body }]
}
    
