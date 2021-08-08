import axios from "axios";
import { toast } from "react-toastify";
import { config } from "../../common";

export const linkedinLoginNext = (data, history) => {
  return (dispatch) => {
    dispatch({ type: "LINKEDIN_LOGIN_NEXT_FETCH_PENDING" });

    var formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    formData.append("is_linkedin", 1);
    // formData.append("f_name", "Goral");
    // formData.append("l_name", "Patel");
    formData.append("is_manual_email", 0);
    axios
      .post(`${config.apiUrl}/NewRegistration`, formData, {
        headers: {
          key: "69d5eb2052ac7712cf5e4b40famz3152",
        },
      })
      .then((res) => {
        localStorage.setItem("user_id", res.data.Result.id);

        dispatch({
          type: "LINKEDIN_LOGIN_NEXT_FETCH_SUCCESS",
        });
        toast.success(res.data.ResponseMessage);
        history.push("/accountsetup");
      })
      .catch((error) => {
        dispatch({
          type: "LINKEDIN_LOGIN_NEXT_FETCH_FAILURE",
          message: error.message,
        });
        // toast.error(error.res.ResponseMessage);
        toast.error("something went wrong");
      });
  };
};
