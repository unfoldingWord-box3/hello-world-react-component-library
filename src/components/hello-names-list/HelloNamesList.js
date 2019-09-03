import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
} from '@material-ui/core';

function HelloNamesList({
  classes,
  names,
  style,
}) {
  const helloNameComponents = names.map(name =>
    <ListItem>Hello {name}</ListItem>
  );

  return (
    <List className={classes.root} style={style}>
      {helloNameComponents}
    </List>
  );
};

HelloNamesList.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** The names of the people to say hello to. */
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** The overriding CSS for this component */
  style: PropTypes.object,
};

const styles = theme => ({
  root: {
  },
});

export default withStyles(styles)(HelloNamesList);
