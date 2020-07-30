const initialState = {
  loading: false,
  error: false,
  results: [],
  page: 0,
  total_pages: 0,
  total_results: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DISCOVER_MOVIES_REQUEST':
      return {
        ...initialState,
        loading: true,
      };
    case 'FETCH_DISCOVER_MOVIES_SUCCESS':
      return {
        loading: false,
        error: false,
        ...action.payload,
      };
    case 'FETCH_DISCOVER_MOVIES_FAILURE':
      return {
        ...initialState,
        error: true,
      };
    default:
      return state;
  }
};
