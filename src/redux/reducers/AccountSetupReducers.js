const initialState = {
  accountSetupCreate: { loading: false, error: false, message: null },
};

const accountSetupReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ACCOUNT_SETUP_FETCH_PENDING":
      return {
        ...state,
        accountSetupCreate: { loading: true, error: false, message: null },
      };
    case "ACCOUNT_SETUP_FETCH_SUCCESS":
      return {
        ...state,
        accountSetupCreate: {
          loading: false,
          error: false,
          message: action.message,
        },
      };
    case "ACCOUNT_SETUP_FETCH_FAILURE":
      return {
        ...state,
        accountSetupCreate: {
          loading: false,
          error: true,
          message: action.message,
        },
      };
    default:
      return { ...state };
  }
};

export default accountSetupReducers;
