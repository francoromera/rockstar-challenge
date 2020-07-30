const initialState = {
  query: '',
  stars: null,
  loading: false,
  error: false,
  results: [],
  page: 0,
  total_pages: 0,
  total_results: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SEARCH_MOVIES_RESET':
      return {
        ...initialState,
        stars: state.stars,
      };
    case 'FETCH_SEARCH_MOVIES_REQUEST':
      return {
        ...initialState,
        stars: state.stars,
        query: action.payload,
        loading: true,
      };
    case 'FETCH_SEARCH_MOVIES_SUCCESS':
      return {
        query: state.query,
        stars: state.stars,
        loading: false,
        error: false,
        ...action.payload,
      };
    case 'FETCH_SEARCH_MOVIES_FAILURE':
      return {
        ...initialState,
        query: state.query,
        stars: state.stars,
        error: true,
      };
    case 'SET_STARS_FILTER':
      return {
        ...state,
        stars: action.payload,
      };
    default:
      return state;
  }
};
