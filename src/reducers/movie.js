const initialState = {
  id: '',
  loading: false,
  error: false,
  result: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GET_MOVIE_REQUEST':
      return {
        ...initialState,
        id: action.payload,
        loading: true,
      };
    case 'FETCH_GET_MOVIE_SUCCESS':
      return {
        id: state.id,
        loading: false,
        error: false,
        result: action.payload,
      };
    case 'FETCH_GET_MOVIE_FAILURE':
      return {
        ...initialState,
        id: state.id,
        error: true,
      };
    default:
      return state;
  }
};
