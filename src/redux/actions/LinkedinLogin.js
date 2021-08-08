import axios from "axios";
import { toast } from "react-toastify";
import { config } from "../../common";

export const linkedinLogin = (data, history) => {
  return (dispatch) => {
    dispatch({ type: "LINKEDIN_LOGIN_FETCH_PENDING" });

    var formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    formData.append("is_linkedin", 1);
    axios
      .post(`${config.apiUrl}/New_is_Registration`, formData, {
        headers: {
          key: "69d5eb2052ac7712cf5e4b40famz3152",
        },
      })
      .then((res) => {
        // console.log(res);
        localStorage.setItem("linkedin_id", res.data.Result.linkedin_id);
        localStorage.setItem("f_name", res.data.Result.f_name);
        localStorage.setItem("l_name", res.data.Result.l_name);
        localStorage.setItem("accessToken", res.data.Result.access_token);
        localStorage.setItem("generate_token", res.data.Result.generate_token);
        dispatch({
          type: "LINKEDIN_LOGIN_FETCH_SUCCESS",
        });
        toast.success(res.data.ResponseMessage);
        history.push("/linkedinlogin");
      })
      .catch((error) => {
        dispatch({
          type: "LINKEDIN_LOGIN_FETCH_FAILURE",
          message: error.message,
        });
        // toast.error(error.res.ResponseMessage);
        toast.error("something went wrong");
      });
  };
};

export const getSingleData = () => {
  const getToken = localStorage.getItem("accessToken");
  const code = localStorage.getItem("code");
  const redirecturl = localStorage.getItem("redirecturl");
  return (dispatch) => {
    dispatch({ type: "GET_SINGLE_DATA_PENDING" });

    axios
      .get(`${config.apiUrl}/getLinkedInData`, {
        headers: {
          key: "69d5eb2052ac7712cf5e4b40famz3152",
          accessToken: `${getToken}`,
          code: `${code}`,
          redirecturl: `${redirecturl}`,
        },
      })
      .then((res) => {
        // console.log(res);
        dispatch({
          type: "GET_SINGLE_DATA_SUCCESS",
          singleData: res.data.Result,
        });
      })
      .catch((error) => {
        dispatch({
          type: "GET_SINGLE_DATA_FAILURE",
          message: error.message,
        });
      });
  };
};
