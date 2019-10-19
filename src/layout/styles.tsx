import { makeStyles } from '@material-ui/core/styles';

const Constants = {
  drawerWidth: 300,
}

const useStyles = makeStyles(theme => ({
  content: {
    width: 'calc(100%)',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    width: `calc(100% - ${Constants.drawerWidth}px)`,
    marginLeft: Constants.drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    width: Constants.drawerWidth,
  },
  drawerToolbar: {
    justifyContent: "flex-end"
  },
  drawerButton: {
    width: '100%',
    height: '100%',
  },
  drawerButtonLabel: {
    justifyContent: 'flex-start'
  },
}));

export default useStyles;
