import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import blueGrey from '@material-ui/core/colors/blueGrey';
import AssignmentIcon from '@material-ui/icons/Assignment';
import UndoIcon from '@material-ui/icons/Undo';

import './done-list.styles.scss';

import { selectDoneList } from '../../redux/to-do/to-do.selectors';
import { removeDoneItem,addToDoItem } from '../../redux/to-do/to-do.actions';

const useStyles = makeStyles(() => ({
root: {
     width: '100%',
    maxWidth: 360,
    backgroundColor: blueGrey[700],
  },
}));


function InteractiveList({ doneList,removeDoneItem,addToDoItem }) {
    // console.log(doneList);
  const classes = useStyles();
 
  const handleDelete = (value) => () => {
    // console.log(value);
    removeDoneItem(value);
    } 

    const handleUndo = (value) => () => {
        // console.log(value);
        removeDoneItem(value);
        addToDoItem(value);
        } 

  return (
        (doneList.length>0)?
        <List className={classes.root} dense={true}>   
            {
               doneList.map((value) => {
                const { id, body } = value;
                return (
                    <ListItem key={id}>
                        <ListItemAvatar>
                            <Avatar>
                                <AssignmentIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText className='done-list-item-text' primary={body} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="undo" onClick={handleUndo(value)}>
                                <UndoIcon />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={handleDelete(value)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                )
            }) 
            }  
        </List>
        :
        <div className='done-list-empty'>
            <p>No tasks done yet</p>
        </div>
  );
}

const mapStateToProps = createStructuredSelector({
    doneList: selectDoneList
});

const mapDispatchToProps = dispatch => ({
    removeDoneItem: item => dispatch(removeDoneItem(item)),
    addToDoItem: item => dispatch(addToDoItem(item)),
})

export default connect(mapStateToProps,mapDispatchToProps)(InteractiveList);
