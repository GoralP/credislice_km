const initialState = {
  loading: false,
  data: null,
  error: false,
  message: null,
  getSingleLoginData: {
    loading: false,
    singleData: null,
    error: false,
    message: null,
  },
};

const linkedReducers = (state = initialState, action) => {
  switch (action.type) {
    case "LINKEDIN_LOGIN_FETCH_PENDING":
      return {
        ...state,
        loading: true,
        data: null,
        error: false,
        message: null,
      };
    case "LINKEDIN_LOGIN_FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.data,
        error: false,
        message: null,
      };
    case "LINKEDIN_LOGIN_FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        data: null,
        error: true,
        message: action.message,
      };

    case "GET_SINGLE_DATA_PENDING":
      return {
        ...state,
        getSingleLoginData: {
          loading: true,
          singleData: null,
          error: false,
          message: null,
        },
      };
    case "GET_SINGLE_DATA_SUCCESS":
      return {
        ...state,
        getSingleLoginData: {
          loading: false,
          singleData: action.singleData,
          error: false,
          message: null,
        },
      };
    case "GET_SINGLE_DATA_FAILURE":
      return {
        ...state,
        getSingleLoginData: {
          loading: false,
          singleData: null,
          error: true,
          message: action.message,
        },
      };

    default:
      return { ...state };
  }
};

export default linkedReducers;
