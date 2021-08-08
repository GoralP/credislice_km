import axios from "axios";
import { toast } from "react-toastify";

export const signUp = (data, toggle) => {
  var formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  formData.append("type", "Student Loan Refinance");
  return (dispatch) => {
    dispatch({ type: "SIGN_UP_PENDING" });
    axios
      .post("https://kmphitech.com/credisliceApi/api/signUp", formData)
      .then((res) => {
        dispatch({
          type: "SIGN_UP_SUCCESS",
        });
        toast.success(res.data.ResponseMessage);
        toggle();
      })
      .catch((error) => {
        dispatch({ type: "SIGN_UP_FAILURE", message: error.message });
        toast.error("Something went wrong");
      });
  };
};

export const signUpCash = (data, toggleCash) => {
  var formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  formData.append("type", "Cash before Internship/Job");
  return (dispatch) => {
    dispatch({ type: "SIGN_UP_PENDING" });
    axios
      .post("https://kmphitech.com/credisliceApi/api/signUp", formData)
      .then((res) => {
        dispatch({
          type: "SIGN_UP_SUCCESS",
        });
        toast.success(res.data.ResponseMessage);
        toggleCash();
      })
      .catch((error) => {
        dispatch({ type: "SIGN_UP_FAILURE", message: error.message });
        toast.error("Something went wrong");
      });
  };
};
