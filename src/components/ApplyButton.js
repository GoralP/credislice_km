import React, { useState, useEffect } from "react";
import { Button, Form } from "reactstrap";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";
import _ from "lodash";
import { LinkedIn } from "react-linkedin-login-oauth2";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { linkedinLogin } from "../redux/actions";
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png'

const fetch = require("node-fetch");

const LINKEDIN_ACCESS_TOKEN = `https://www.linkedin.com/oauth/v2/accessToken`;
const LINKEDIN_CLIENT_ID = "77x9wh8qmcz1vz";
const LINKEDIN_CLIENT_SECRET = "8RU0TtJTgdyQahXb";
const LINKEDIN_RIDERECT_URI = `${window.location.origin}/credislice/linkedin`; //http://appmania.co.in/credislice/linkedin
const LINKEDIN_NAME_URL = "https://api.linkedin.com/v2/me";
const LINKEDIN_EMAIL_URL =
  "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))";

const fetchJSON = (...args) => fetch(...args).then((r) => r.json());

const ApplyButton = () => {
  const [state, setState] = useState("");

  const dispatch = useDispatch();

  const returnData = async (code) => {
    console.log('code',code)
    
    console.log(LINKEDIN_RIDERECT_URI)
    const body = new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: LINKEDIN_RIDERECT_URI,
      client_id: LINKEDIN_CLIENT_ID,
      client_secret: LINKEDIN_CLIENT_SECRET,
    });
    const { access_token } = await fetchJSON(LINKEDIN_ACCESS_TOKEN, {
      method: "POST",
      body,
    });
    console.log("access_token", access_token);
    return access_token;
  };

  const history = useHistory();
  const handleSuccess = async (data) => {
    // data.accessToken = await returnData(data.code);
    localStorage.setItem("code",data.code);
    localStorage.setItem("redirecturl",LINKEDIN_RIDERECT_URI);

    data.redirecturl = LINKEDIN_RIDERECT_URI;
    console.log("data", data);

    dispatch(linkedinLogin(data, history));
  };
  const handleFailure = async() => {
    alert("Something went wrong..Please try again.");
  }

  return (
    <div className="container-fluid text-center">
      <LinkedIn
          clientId={LINKEDIN_CLIENT_ID}
          redirectUri={LINKEDIN_RIDERECT_URI}
          scope="r_liteprofile r_emailaddress"
          state="34232423"
          onFailure={handleFailure}
          onSuccess={handleSuccess}
          supportIE
          redirectPath='/credislice/linkedin'
        >
          <Button className="apply-btn">
            <SiLinkedin className="mr-3" />
            Login with Linkdin
          </Button>
      </LinkedIn>
    </div>
  );
};

export default ApplyButton;
