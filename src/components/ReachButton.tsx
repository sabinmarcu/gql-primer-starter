import React from 'react';
import { Link } from '@reach/router';
import { Button } from '@material-ui/core';

type Props = {
  containerClassName?: string,
}
  & React.ComponentProps<typeof Link>
  & React.ComponentProps<typeof Button>;
const ReachButton: React.FC<Props> = ({
  containerClassName,
  to,
  ...rest
}) => (
  <Link
    to={to}
    className={containerClassName}
  >
    <Button {...rest} />
  </Link>
);

export default ReachButton;
