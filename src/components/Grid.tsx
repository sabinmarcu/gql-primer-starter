import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Constants = {
  padding: 15,
}
const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridGap: Constants.padding,
    padding: Constants.padding,
    gridTemplateColumns: 'repeat(6, 1fr)',
    "@global": {
      ".full": {
        gridColumn: "1/7",
        '@media (max-width: 1980px)': {
          gridColumn: '1/6',
        },
        '@media (max-width: 1650px)': {
          gridColumn: '1/5',
        },
        '@media (max-width: 1280px)': {
          gridColumn: '1/4',
        },
        '@media (max-width: 1024px)': {
          gridColumn: '1/3',
        },
        '@media (max-width: 768px)': {
          gridColumn: '1/2',
        }
      },
    },
    '@media (max-width: 1980px)': {
      gridTemplateColumns: 'repeat(5, 1fr)',
    },
    '@media (max-width: 1650px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    '@media (max-width: 1280px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    '@media (max-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(1, 1fr)',
    }
  }
})

type Props = {
  columns?: number,
}
const Grid: React.FC<Props> = ({
  columns = 3,
  children,
}) => {
  const styles = useStyles(columns);
  return <div className={styles.root}>
    {children}
  </div>;
};

export default Grid;
