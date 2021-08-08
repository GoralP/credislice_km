const initialState = {
  signup: { loading: false, error: false, message: null },
};

const signUpReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP_PENDING":
      return {
        ...state,
        signup: { loading: true, error: false, message: null },
      };
    case "SIGN_UP_SUCCESS":
      return {
        ...state,
        signup: { loading: false, error: false, message: action.message },
      };
    case "SIGN_UP_FAILURE":
      return {
        ...state,
        signup: { loading: false, error: true, message: action.message },
      };

    default:
      return { ...state };
  }
};

export default signUpReducers;
