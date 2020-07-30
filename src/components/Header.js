import React, { useCallback } from 'react';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import Logo from './Logo';
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 150,
    padding: theme.spacing(2),
    backgroundImage: 'url(/images/banner.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    marginBottom: theme.spacing(2),
  },
  container: {
    marginBottom: 50,
  },
}));

const Header = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleLogoClick = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Box className={classes.root}>
      <Container maxWidth="md">
        <Grid container justify="space-between" className={classes.container}>
          <Grid item onClick={handleLogoClick}>
            <Logo />
          </Grid>
          <Grid item>
            <Menu />
          </Grid>
        </Grid>
        <Grid>
          {children}
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
