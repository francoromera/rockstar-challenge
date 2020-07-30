import React from 'react';
import { Box, Container, makeStyles, Paper, TableContainer, Table, TableRow, TableCell, TableBody, Grid } from '@material-ui/core';
import _ from 'lodash';

import Loading from './Loading';
import MovieThumbnail from './MovieThumbnail';

const useStyles = makeStyles(() => ({
  cell: {
    verticalAlign: 'top',
    minWidth: 100,
  },
}));

const MovieDetails = ({
  loading,
  movie,
}) => {
  const classes = useStyles();

  const data = [
    { property: 'title', label: 'Title' },
    { property: 'original_title', label: 'Original Title' },
    { property: 'overview', label: 'Overview' },
    { property: 'release_date', label: 'Release Date' },
    { property: 'imdb_id', label: 'IMDB' },
    { property: 'vote_average', label: 'Vote Average' },
  ];
  
  return (
    <Box className={classes.root}>
      <Container maxWidth="md">
        {loading ? (
          <Loading />
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <MovieThumbnail movie={movie} />
            </Grid>
            <Grid item xs={12} sm={9}>
              <TableContainer component={Paper}>
                <Table className={classes.table}>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow key={row.label}>
                        <TableCell component="th" scope="row" className={classes.cell}>
                          {row.label}
                        </TableCell>
                        <TableCell className={classes.cell}>{_.get(movie, row.property, '')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default MovieDetails;
