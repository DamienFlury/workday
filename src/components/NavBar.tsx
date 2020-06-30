import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const NavBar: React.FC<Props> = ({ onClick }) => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="h6" style={{ flex: 1 }}>
        Workday
      </Typography>
      <Button variant="contained" onClick={onClick}>
        Settings
      </Button>
    </Toolbar>
  </AppBar>
);

export default NavBar;
