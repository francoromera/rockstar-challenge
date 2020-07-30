import React, { useState, useCallback, useMemo } from 'react';
import { makeStyles, Paper, InputBase, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import _ from 'lodash';
import StarSelector from './StarSelector';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    flexDirection: 'row',
    display: 'flex',
  },
  input: {
    flex: 1,
  },
}));

const SearchInput = ({
  initialValue = '',
  stars,
  onStars,
  onSearch,
}) => {
  const classes = useStyles();
  const [value, setValue] = useState(initialValue);

  const debouncedSearch = useMemo(() => _.debounce(onSearch, 500), [onSearch]);

  const handleChange = useCallback((e) => {
    const v = e.target.value;
    debouncedSearch(v);
    setValue(v);
  }, [debouncedSearch, setValue]);

  const handleStarChange = useCallback((v) => {
    onStars(v);
  }, [onStars]);

  return (
    <Paper className={classes.root}>
      <InputBase
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        className={classes.input}
        placeholder="Search Movie"
        value={value}
        onChange={handleChange}
      />
      {onStars && (
        <StarSelector value={stars} onChange={handleStarChange} />
      )}
    </Paper>
  );
};

export default SearchInput;
