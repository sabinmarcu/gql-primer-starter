import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Constants = {
  padding: 15,
}
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'row wrap',
    padding: Constants.padding,
    maxWidth: 1000,
    margin: '0 auto',
    alignItems: 'flex-start',
    justifyContent: 'center',
    boxSizing: 'border-box',
    '& > *': {
      flex: `0 0 50%`,
      boxSizing: 'border-box',
      maxWidth: `calc(50% - ${Constants.padding}px)`,
      marginBottom: Constants.padding,
      '&:nth-child(2n)': {
        marginLeft: Constants.padding,
      }
    },
    '@media (max-width: 1024px)': {
      flexFlow: 'column wrap',
      '& > *': {
        width: '100%',
        maxWidth: 'initial',
        '&:nth-child(2n)': {
          marginLeft: '0 !important',
        }
      }
    }
  }
});

const Split: React.FC = ({
  children,
}) => {
  const styles = useStyles();
  return <div className={styles.root}>
    {children}
  </div>;
};

export default Split;
