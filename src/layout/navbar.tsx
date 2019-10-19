import React, { SyntheticEvent } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

type Props = {
  onOpen: (event: SyntheticEvent) => void,
}
const Navbar: React.FC<Props> = ({
  onOpen
}) =>
  <AppBar position="static">
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        onClick={onOpen}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">
        React App
      </Typography>
    </Toolbar>
  </AppBar>

export default Navbar;
