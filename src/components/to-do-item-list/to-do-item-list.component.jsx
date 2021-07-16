import React from 'react';
import CheckboxList from '../checkbox-list/checkbox-list.component';
import InteractiveList from '../done-list/done-list.component';

import './to-do-item-list.styles.scss';

const ToDoItemList = () => {
    // console.log(props);
    //  console.log(toDoItems);
    // console.log(doneItems)
    return (
        <div className='to-do-item-list-container'>
            <p>Things to do:</p>
            <CheckboxList />
            <p>Done:</p>
            <InteractiveList />
        </div>
    );
}

export default ToDoItemList;