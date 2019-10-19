import React, { useState } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

import clsx from 'clsx';
import useStyles from './styles';

const Layout: React.FC = ({ children }) => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
      />
      <div
        className={
          clsx(
            styles.content,
            { [styles.contentShift]: open },
          )
        }
      >
        <Navbar onOpen={() => setOpen(true)} />
        {children}
      </div>
    </div>
  );
}
export default Layout;
