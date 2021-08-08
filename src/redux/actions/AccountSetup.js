import axios from "axios";
import { toast } from "react-toastify";
import { config } from "../../common";

export const accountSetup = (data, history) => {
  var formData = new FormData();
  var skill_jobs = [];

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  var fieldvalues = localStorage.getItem("jobfields");
  // console.log("fieldvalues", fieldvalues);
  fieldvalues = JSON.parse(fieldvalues);
  var skill_job_comp = "";
  var skill_job_date = "";
  for (let m = 0; m < fieldvalues.length; m++) {
    const fval = fieldvalues[m];
    skill_job_comp += fval.job_company + "#@@#";
    skill_job_date += fval.job_date + "#@@#";
  }
  formData.append("skill_job_comp", skill_job_comp);
  formData.append("skill_job_date", skill_job_date);
  formData.append("user_id", 4);

  return (dispatch) => {
    dispatch({ type: "ACCOUNT_SETUP_FETCH_PENDING" });

    axios
      .post(`${config.apiUrl}/accountSetup`, formData, {
        headers: {
          key: "69d5eb2052ac7712cf5e4b40famz3152",
        },
      })
      .then((res) => {
        dispatch({
          type: "ACCOUNT_SETUP_FETCH_SUCCESS",
        });
        toast.success(res.data.ResponseMessage);
        // history.push("/");
      })
      .catch((error) => {
        dispatch({
          type: "ACCOUNT_SETUP_FETCH_FAILURE",
          message: error.message,
        });
        
        toast.error(error.res.data.ResponseMessage);
      });
  };
};
