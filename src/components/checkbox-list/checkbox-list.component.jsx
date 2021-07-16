import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import blueGrey from '@material-ui/core/colors/blueGrey';
import DeleteIcon from '@material-ui/icons/Delete';

import { addToDoToDone,removeToDoItem } from '../../redux/to-do/to-do.actions';
import { selectToDoList } from '../../redux/to-do/to-do.selectors';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: blueGrey[700],
  },
}));

function CheckboxList({ toDoList,addToDoToDone,removeToDoItem }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
      console.log(value);
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    addToDoToDone(value);
  };

  const handleDelete = (value) => () => {
    //   console.log(value);
      removeToDoItem(value);
  }

  return (
    (toDoList.length>0) ?
    <List className={classes.root}>
      {toDoList.map((value) => {
        //    console.log(value);
        const labelId = `checkbox-list-label-${value.id}`;

        return (
          <ListItem key={value.id} role={undefined} dense button onClick={handleToggle(value)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={value.body} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={handleDelete(value)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    :
    <div className='to-do-list-empty'>
        <p>Nothing to do</p>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
    toDoList: selectToDoList
});

const mapDispatchToProps = dispatch => ({
    addToDoToDone: item => dispatch(addToDoToDone(item)),
    removeToDoItem: item => dispatch(removeToDoItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxList);
