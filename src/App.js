import React, { useEffect, useContext, useCallback } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Home, PrivacyPolicy, TermsOfUse, LandingPage } from "./views";
import { ApplyButton, LinkedinLogin, BankDetails } from "./components";
import Link from "./Link";
import Popup from "./Popup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import "react-tabs/style/react-tabs.css";
import { AccountSetup } from "./containers";
import "react-datepicker/dist/react-datepicker.css";
import { LinkedInPopUp } from "react-linkedin-login-oauth2";
import Context from "./Context";
import { useDispatch } from "react-redux";

// done
const App = () => {
  // const { linkSuccess, isItemAccess, dispatch } = useContext(Context);

  // const getInfo = useCallback(async () => {
  //   const response = await fetch("/api/info", { method: "POST" });
  //   if (!response.ok) {
  //     dispatch({ type: "SET_STATE", state: { backend: false } });
  //     return { paymentInitiation: false };
  //   }
  //   const data = await response.json();
  //   const paymentInitiation = data.products.includes("payment_initiation");
  //   dispatch({
  //     type: "SET_STATE",
  //     state: {
  //       products: data.products,
  //     },
  //   });
  //   return { paymentInitiation };
  // }, [dispatch]);

  // const generateToken = useCallback(
  //   async (paymentInitiation) => {
  //     const path = paymentInitiation
  //       ? "/api/create_link_token_for_payment"
  //       : "/api/create_link_token";
  //     const response = await fetch(path, {
  //       method: "POST",
  //     });
  //     if (!response.ok) {
  //       dispatch({ type: "SET_STATE", state: { linkToken: null } });
  //       return;
  //     }
  //     const data = await response.json();
  //     if (data) {
  //       if (data.error != null) {
  //         dispatch({
  //           type: "SET_STATE",
  //           state: {
  //             linkToken: null,
  //             linkTokenError: data.error,
  //           },
  //         });
  //         return;
  //       }
  //       dispatch({ type: "SET_STATE", state: { linkToken: data.link_token } });
  //     }
  //     localStorage.setItem("link_token", data.link_token); //to use later for Oauth
  //   },
  //   [dispatch]
  // );

  // useEffect(() => {
  //   const init = async () => {
  //     const { paymentInitiation } = await getInfo(); // used to determine which path to take when generating token
  //     // do not generate a new token for OAuth redirect; instead
  //     // setLinkToken from localStorage
  //     if (window.location.href.includes("?oauth_state_id=")) {
  //       dispatch({
  //         type: "SET_STATE",
  //         state: {
  //           linkToken: localStorage.getItem("link_token"),
  //         },
  //       });
  //       return;
  //     }
  //     generateToken(paymentInitiation);
  //   };
  //   init();
  // }, [dispatch, generateToken, getInfo]);

  return (
    <div>
      <Provider store={store}>
        {/* <Router basename="/credislice/">
          <Redirect to="/"></Redirect> */}
        <Router basename="/credislice/">
          <Switch>
            {/* <Route path="/" component={Home} exact={true} /> */}

            {/* <Route exact path="/linkedin">
              <LinkedInPopUp />
            </Route> */}
            {/* <Route exact path="/">
              <ApplyButton />
            </Route>
            <Route path="/linkedinlogin" exact>
              <LinkedinLogin />
            </Route>
            <Route path="/accountsetup" component={AccountSetup} exact={true} /> */}
            {/* <Route path="/bank" component={BankDetails} exact={true} /> */}
            {/* <Route path="/bank" component={Popup} exact={true} /> */}
            {/* <Route path="/privacypolicy" exact>
              <PrivacyPolicy />
            </Route>
            <Route path="/termsofuse" exact>
              <TermsOfUse />
            </Route> */}
            <Route path="/" component={LandingPage} exact={true} />
          </Switch>
        </Router>
        <ToastContainer position="top-center" autoClose={3000} />
      </Provider>
    </div>
  );
};

export default App;
