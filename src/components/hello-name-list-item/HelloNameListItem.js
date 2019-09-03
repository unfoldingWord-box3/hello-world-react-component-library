import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemText,
} from '@material-ui/core';

function HelloNameListItem({
  classes,
  name,
}) {
  const primaryText = `Hello ${name}`;
  return (
    <ListItem>
      <ListItemText primary={primaryText} />
    </ListItem>
  );
};

HelloNameListItem.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** The name of the person to say hello to. */
  name: PropTypes.string.isRequired,
};

export default HelloNameListItem;
