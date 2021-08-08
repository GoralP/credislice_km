const initialState = {
  loading: false,
  data: null,
  error: false,
  message: null,
};

const linkedLoginNextReducers = (state = initialState, action) => {
  switch (action.type) {
    case "LINKEDIN_LOGIN_NEXT_FETCH_PENDING":
      return {
        ...state,
        loading: true,
        data: null,
        error: false,
        message: null,
      };
    case "LINKEDIN_LOGIN_NEXT_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
        message: null,
      };
    case "LINKEDIN_LOGIN_NEXT_FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        data: null,
        error: true,
        message: action.message,
      };

    default:
      return { ...state };
  }
};

export default linkedLoginNextReducers;
