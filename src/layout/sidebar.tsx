import React, { SyntheticEvent } from 'react';
import {
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
} from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon } from '@material-ui/icons';

import ReachButton from '../components/ReachButton';
import useStyles from './styles';
import routes from '../screens';


type Props = {
  onClose: (event: SyntheticEvent) => void,
  open: boolean,
}
const Sidebar: React.FC<Props> = ({
  onClose,
  open,
}) => {
  const styles = useStyles();
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      className={styles.drawer}
      classes={{
        paper: styles.drawer
      }}
      open={open}
    >
      <AppBar
        position="static"
        color="default"
      >
        <Toolbar className={styles.drawerToolbar}>
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
          >
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <List>
          {routes.filter(({ title }) => !!title).map(({ title, link }) => (
            <ListItem
              key={link}
            >
              <ReachButton
                fullWidth
                to={link}
                containerClassName={styles.drawerButton}
                classes={{
                  root: styles.drawerButtonLabel,
                }}
              >
                {title}
              </ReachButton>
            </ListItem>
          ))}
      </List>
    </Drawer>
  );
};
export default Sidebar;
