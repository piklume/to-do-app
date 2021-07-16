import React, { useState } from 'react';
import { connect } from 'react-redux';
import CheckboxList from '../checkbox-list/checkbox-list.component';
import InteractiveList from '../done-list/done-list.component';
import { addToDoItem } from '../../redux/to-do/to-do.actions';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import blueGrey from '@material-ui/core/colors/blueGrey';

import './to-do-item-list.styles.scss';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        backgroundColor: blueGrey[50],
      },
    },
  }));

const ToDoItemList = ({ addToDoItem }) => {
    const classes = useStyles();
    const [newToDo, setNewToDo] = useState({body: ''});

    const handelChange = (event) => {
        event.preventDefault();
        // console.log(event.target.value);
        setNewToDo({body: event.target.value});
    }
    
    const handelSubmit = event => {
        event.preventDefault();
        
        addToDoItem(newToDo);
        setNewToDo({body: ''})
      }

    return (
        <div className='to-do-item-list-container'>
            <p>Things to do:</p>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handelSubmit}>
                <TextField id="filled-basic" 
                value={newToDo.body} 
                label="New To-Do" 
                variant="filled" 
                onChange={handelChange} 
                />
            </form>
            <CheckboxList />
            <p>Done:</p>
            <InteractiveList />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addToDoItem: item => dispatch(addToDoItem(item))
});

export default connect(null,mapDispatchToProps)(ToDoItemList);