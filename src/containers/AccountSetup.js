import React, { useState, useEffect, useCallback } from "react";
import vector from "../images/vector.png";
import PropTypes from "prop-types";
import { AppBar, Tabs, Tab, Box, Typography } from "@material-ui/core";
import loan_info from "../images/loan_info.png";
import skill_info from "../images/skill_info.png";
import personal_info from "../images/personal_info.png";
import { MdDelete } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { Form, FormGroup, Button } from "reactstrap";
import MonthPicker from "month-year-picker";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { accountSetup } from "../redux/actions";
import { PlaidLink } from "react-plaid-link";
import { axios } from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function activeTab(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const GENERATED_LINK_TOKEN =
  "link-sandbox-f6fa78ff-389b-4675-a9b2-82d829f87196";

const AccountSetup = () => {
  const [value, setValue] = useState(0);
  const [formData, updateFormData] = useState("");
  const [token, setToken] = useState("");

  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(null);

  const [fields, setFields] = useState([{ value: null }]);

  useEffect(() => {
    console.log("hello");
    // const createLinkToken = async () => {
    //   const requestOptions = {
    //     method: "POST",
    //     headers: {
    //       // "access-control-allow-origin": "*",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       client_id: "60a4bb04299d4f001010ba79",
    //       secret_key: "bce8cb2e2791d21d85c5282c07277e",
    //       client_name: "credislice",
    //       country_codes: ["US"],
    //       language: "en",
    //       products: ["auth"],
    //     }),
    //   };
    //   let response = await fetch(
    //     "https://sandbox.plaid.com/link/token/create",
    //     requestOptions
    //   );
    //   const { link_token } = await response.json();
    //   setToken(link_token);
    //   console.log("sdf", link_token);
    // };
    // createLinkToken();
  }, []);

  // console.log("xf", token);

  function handleChangeAdd(i, e) {
    const values = [...fields];

    values[i][e.target.name] = e.target.value;
    setFields(values);
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  }

  const [active, setActive] = useState("white");

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  const handleChangeForm = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const [checkedSsn, setCheckedSsn] = useState("enable");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("jobfields", JSON.stringify(fields));
    dispatch(accountSetup(formData));
    console.log(formData);
    console.log("chk", fields);
  };

  const handleNextSkill = () => {
    let nextValue = value;
    if (nextValue !== 1) {
      nextValue = nextValue + 1;
      setValue(nextValue);
    }
  };

  const handleNextPersonal = () => {
    let nextValue = value;

    if (nextValue !== 2) {
      nextValue = nextValue + 1;
      setValue(nextValue);
    }
  };

  let minOffset = 0,
    maxOffset = 100;
  let thisYear = new Date().getFullYear();

  let allYears = [];
  for (let x = 0; x <= maxOffset; x++) {
    allYears.push(thisYear - x);
  }

  const yearList = allYears.map((x) => {
    return (
      <>
        <option></option>
        <option key={x}>{x}</option>
      </>
    );
  });

  const onSuccess = useCallback(
    (public_token, data) => {
      // send public_token to server
      console.log("chk", public_token);

      const setToken = async () => {
        const token = localStorage.getItem("generate_token");

        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            key: "69d5eb2052ac7712cf5e4b40famz3152",
            token: `${token}`,
          },
          body: JSON.stringify({
            client_id: "60a4bb04299d4f001010ba79",
            secret_key: "bce8cb2e2791d21d85c5282c07277e",
            public_token: `${public_token}`,
          }),
        };
        const response = await fetch(
          "https://kmphitech.com/credisliceApi/api/PublicToAccessToken",
          requestOptions
        );

        if (!response.ok) {
          dispatch({
            type: "SET_STATE",
            state: {
              itemId: `no item_id retrieved`,
              accessToken: `no access_token retrieved`,
              isItemAccess: false,
            },
          });
          console.log(response);
          return;
        }
        const data = await response.json();

        dispatch({
          type: "SET_STATE",
          state: {
            itemId: data.item_id,
            accessToken: data.access_token,
            isItemAccess: true,
          },
        });
      };

      const getTransaction = async () => {
        const token = localStorage.getItem("generate_token");
        const access_token = localStorage.getItem("access_token");
        const user_id = localStorage.getItem("id");
        const requestTramsactions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            key: "69d5eb2052ac7712cf5e4b40famz3152",
            token: `${token}`,
          },
          body: JSON.stringify({
            access_token: `${access_token}`,
            user_id: `${user_id}`,
          }),
        };
        const response = await fetch(
          "http://kmphitech.com/credisliceApi/api/GetSaveTransaction",
          requestTramsactions
        );
        if (!response.ok) {
          dispatch({
            type: "SET_STATE",
            state: {
              itemId: `no item_id retrieved`,
              accessToken: `no access_token retrieved`,
              isItemAccess: false,
            },
          });
          console.log(response);
          return;
        }
        const data = await response.json();
        dispatch({
          type: "SET_STATE",
          state: {
            itemId: data.item_id,
            accessToken: data.access_token,
            isItemAccess: true,
          },
        });
      };

      setToken();
      getTransaction();
      dispatch({ type: "SET_STATE", state: { linkSuccess: true } });

      handleNextSkill();
    },
    [dispatch]
  );

  return (
    <div className="account-bg">
      <div className="container">
        <div className="account-container">
          <div className="account-setup-heading">
            <img src={vector} alt="" className="mr-3" />
            Credislice
          </div>
          <div className="account-setup-title">Finish Account Setup</div>

          <div>
            <AppBar
              position="static"
              className="appbar-border mt-4"
              elevation={0}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                <Tab
                  icon={<img src={loan_info} alt="" className="mr-2" />}
                  label="Loan Info"
                  {...activeTab(0)}
                />
                <Tab
                  icon={<img src={skill_info} alt="" className="mr-2" />}
                  label="Skills Info"
                  {...activeTab(1)}
                />
                <Tab
                  icon={<img src={personal_info} alt="" className="mr-2" />}
                  label="Personal Info"
                  {...activeTab(2)}
                />
              </Tabs>
            </AppBar>
            <Form onSubmit={handleSubmit}>
              <TabPanel
                value={value}
                index={0}
                className="container tabpanel-responsive"
              >
                <div className="account-form-box ">
                  <div className="form-field">
                    <FormGroup>
                      <label className="form-field-label label-name">
                        Enter Amount
                      </label>
                      <br></br>
                      <input
                        name="amount"
                        type="text"
                        className="login-input account-placehoder"
                        onChange={handleChangeForm}
                        required
                      />
                    </FormGroup>
                  </div>

                  <div className="form-field">
                    <FormGroup>
                      <label className="form-field-label label-name">
                        Purpose of Loan
                      </label>
                      <br></br>
                      <select
                        name="purpose"
                        className="login-input form-field-label"
                        onChange={handleChangeForm}
                      >
                        <option></option>
                        <option value="saab">Moving Expenses</option>
                        <option value="mercedes">Student Loan Refinance</option>
                        <option value="audi">Misc Living Expenses</option>
                        <option value="audi">Credit Card Payment</option>
                        <option value="audi">Others</option>
                      </select>
                    </FormGroup>
                  </div>

                  <div className="form-field">
                    <FormGroup>
                      <label className="form-field-title">
                        Job after Graduation:
                      </label>
                      <div className="row">
                        <div className="col-sm-6">
                          <label className="form-field-label label-name">
                            Enter Company
                          </label>

                          <br></br>
                          <input
                            name="job_comp_name "
                            type="text"
                            className="login-input account-placehoder"
                            onChange={handleChangeForm}
                            required
                          />
                        </div>
                        <div className="col-sm-6 responsive-date">
                          <label className="form-field-label label-name">
                            MM/YYYY
                          </label>
                          <br></br>
                          <input
                            name="job_date"
                            type="month"
                            className="datepicker-input account-placehoder"
                            onChange={handleChangeForm}
                            required
                          />
                          {/* <MonthPicker
                            name="job_date"
                            allowedYears={{
                              after: new Date().getFullYear() - 100,
                            }}
                            className="month-selector"
                            onChange={handleChangeForm}
                          /> */}
                        </div>
                      </div>
                    </FormGroup>
                  </div>
                  <div className="form-field">
                    <FormGroup>
                      <label className="form-field-label label-name">
                        Monthly Income
                      </label>
                      <br></br>
                      <input
                        name="income"
                        type="number"
                        className="login-input account-placehoder"
                        onChange={handleChangeForm}
                        required
                      />
                    </FormGroup>
                  </div>
                  <div className="form-field">
                    <FormGroup>
                      <label className="form-field-title">
                        Internship during recent school:
                      </label>
                      <div className="row">
                        <div className="col-sm-6">
                          <label className="form-field-label label-name">
                            Enter Company
                          </label>
                          <br></br>
                          <input
                            name="internship_comp_name"
                            type="text"
                            className="login-input account-placehoder"
                            onChange={handleChangeForm}
                            required
                          />
                        </div>
                        <div className="col-sm-6 responsive-date">
                          <label className="form-field-label label-name">
                            MM/YYYY
                          </label>
                          <br></br>
                          <input
                            name="internship_date"
                            type="month"
                            className="datepicker-input account-placehoder"
                            onChange={handleChangeForm}
                            required
                          />
                          {/* <MonthPicker
                            name="internship_date"
                            onChange={handleChangeForm}
                            allowedYears={{
                              after: new Date().getFullYear() - 100,
                            }}
                            className="month-selector"
                          /> */}
                        </div>
                      </div>
                    </FormGroup>
                  </div>

                  <div className="form-field">
                    <FormGroup>
                      <label className="form-field-title ">
                        Us School Attended/Attending
                      </label>
                      <br></br>
                      <input
                        name="school_attended"
                        type="text"
                        className="login-input account-placehoder"
                        onChange={handleChangeForm}
                        required
                      />
                    </FormGroup>
                  </div>

                  <div className="form-field">
                    <FormGroup>
                      <label className="form-field-title ">
                        Us Program Attended
                      </label>
                      <br></br>
                      <input
                        name="program_attended"
                        type="text"
                        className="login-input account-placehoder"
                        onChange={handleChangeForm}
                        required
                      />
                    </FormGroup>
                  </div>

                  <div className="last-form-field">
                    <FormGroup>
                      <label className="form-field-title ">
                        US Graduation Year
                      </label>
                      <br></br>
                      <label className="form-field-label label-name">
                        Year
                      </label>
                      <br></br>
                      <select
                        name="graduation_year"
                        className="login-input"
                        onChange={handleChangeForm}
                      >
                        {yearList}
                      </select>
                    </FormGroup>
                  </div>
                </div>
                <div className="text-center">
                  <PlaidLink
                    token={GENERATED_LINK_TOKEN}
                    env="sandbox"
                    onSuccess={onSuccess}
                    className="sign-in-btn"
                  >
                    Next
                  </PlaidLink>
                </div>
              </TabPanel>
              <TabPanel
                value={value}
                index={1}
                className="container tabpanel-responsive"
              >
                <div className="account-form-box ">
                  <div className="form-field">
                    <FormGroup>
                      <label className="form-field-title ">
                        Last 2 Jobs before Us Graduation
                      </label>

                      {fields.map((field, idx) => {
                        return (
                          <div key={`${field}-${idx}`}>
                            <div className="row mt-1">
                              <div className="col-sm-5">
                                <label className="form-field-label label-name">
                                  Enter Company
                                </label>
                                <br></br>
                                <input
                                  name="job_company"
                                  type="text"
                                  className="login-input account-placehoder"
                                  onChange={(e) => handleChangeAdd(idx, e)}
                                  required
                                />
                              </div>
                              <div className="col-sm-5">
                                <label className="form-field-label label-name">
                                  MM/YYYY
                                </label>
                                <br></br>
                                <input
                                  name="job_date"
                                  type="month"
                                  className="datepicker-input account-placehoder"
                                  onChange={(e) => handleChangeAdd(idx, e)}
                                  required
                                />
                              </div>
                              <div className="col-sm-2">
                                <lable></lable>
                                <br></br>
                                <span className=" mr-4 account-icon-outline">
                                  <FiPlus
                                    className="account-icon"
                                    onClick={() => handleAdd()}
                                  />
                                </span>

                                <span className="account-icon-outline">
                                  <MdDelete
                                    className="account-icon"
                                    onClick={() => handleRemove(idx)}
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </FormGroup>
                  </div>

                  <div className="form-field">
                    <div>
                      <FormGroup>
                        <label className="form-field-title ">
                          Top 3 Skills
                        </label>
                        <br></br>

                        <input
                          name="skill_1"
                          type="text"
                          className="skill-input account-placehoder"
                          onChange={handleChangeForm}
                          required
                        />

                        <Button
                          className="skill-btn"
                          name="skill_1_number"
                          value="1"
                          onClick={handleChangeForm}
                        >
                          1
                        </Button>

                        <Button
                          className="skill-btn"
                          name="skill_1_number"
                          value="2"
                          onClick={handleChangeForm}
                        >
                          2
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_1_number"
                          value="3"
                          onClick={handleChangeForm}
                        >
                          3
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_1_number"
                          value="4"
                          onClick={handleChangeForm}
                        >
                          4
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_1_number"
                          value="5"
                          onClick={handleChangeForm}
                        >
                          5
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_1_number"
                          value="6"
                          onClick={handleChangeForm}
                        >
                          6
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_1_number"
                          value="7"
                          onClick={handleChangeForm}
                        >
                          7
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_1_number"
                          value="8"
                          onClick={handleChangeForm}
                        >
                          8
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_1_number"
                          value="9"
                          onClick={handleChangeForm}
                        >
                          9
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_1_number"
                          value="10"
                          onClick={handleChangeForm}
                        >
                          10
                        </Button>
                      </FormGroup>
                    </div>
                    <br></br>
                    <div>
                      <FormGroup>
                        <input
                          name="skill_2"
                          type="text"
                          className="skill-input account-placehoder"
                          onChange={handleChangeForm}
                          required
                        />
                        <Button
                          className="skill-btn"
                          name="skill_2_number"
                          value="1"
                          onClick={handleChangeForm}
                        >
                          1
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_2_number"
                          value="2"
                          onClick={handleChangeForm}
                        >
                          2
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_2_number"
                          value="3"
                          onClick={handleChangeForm}
                        >
                          3
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_2_number"
                          value="4"
                          onClick={handleChangeForm}
                        >
                          4
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_2_number"
                          value="5"
                          onClick={handleChangeForm}
                        >
                          5
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_2_number"
                          value="6"
                          onClick={handleChangeForm}
                        >
                          6
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_2_number"
                          value="7"
                          onClick={handleChangeForm}
                        >
                          7
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_2_number"
                          value="8"
                          onClick={handleChangeForm}
                        >
                          8
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_2_number"
                          value="9"
                          onClick={handleChangeForm}
                        >
                          9
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_2_number"
                          value="10"
                          onClick={handleChangeForm}
                        >
                          10
                        </Button>

                        <br></br>
                      </FormGroup>
                    </div>
                    <br></br>
                    <div>
                      <FormGroup>
                        <input
                          name="skill_3"
                          type="text"
                          className="skill-input account-placehoder"
                          onChange={handleChangeForm}
                          required
                        />
                        <Button
                          className="skill-btn"
                          name="skill_3_number"
                          value="1"
                          onClick={handleChangeForm}
                        >
                          1
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_3_number"
                          value="2"
                          onClick={handleChangeForm}
                        >
                          2
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_3_number"
                          value="3"
                          onClick={handleChangeForm}
                        >
                          3
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_3_number"
                          value="4"
                          onClick={handleChangeForm}
                        >
                          4
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_3_number"
                          value="5"
                          onClick={handleChangeForm}
                        >
                          5
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_3_number"
                          value="6"
                          onClick={handleChangeForm}
                        >
                          6
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_3_number"
                          value="7"
                          onClick={handleChangeForm}
                        >
                          7
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_3_number"
                          value="8"
                          onClick={handleChangeForm}
                        >
                          8
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_3_number"
                          value="9"
                          onClick={handleChangeForm}
                        >
                          9
                        </Button>
                        <Button
                          className="skill-btn"
                          name="skill_3_number"
                          value="10"
                          onClick={handleChangeForm}
                        >
                          10
                        </Button>
                      </FormGroup>
                    </div>
                  </div>

                  <div className="last-form-field">
                    <FormGroup>
                      <label className="form-field-title">
                        Undergrad School:
                      </label>
                      <div className="row">
                        <div className="col-sm-6">
                          <label className="form-field-label label-name">
                            School Name
                          </label>
                          <br></br>
                          <input
                            name="school_name"
                            type="text"
                            className="login-input account-placehoder"
                            onChange={handleChangeForm}
                            required
                          />
                        </div>
                        <div className="col-sm-6 responsive-date">
                          <label className="form-field-label label-name">
                            Year
                          </label>
                          <br></br>
                          <select
                            name="school_year"
                            className="login-input"
                            onChange={handleChangeForm}
                          >
                            {yearList}
                          </select>
                        </div>
                      </div>
                    </FormGroup>
                  </div>
                </div>
                <div className="text-center">
                  <Button className="sign-in-btn" onClick={handleNextPersonal}>
                    Next
                  </Button>
                </div>
              </TabPanel>
              <TabPanel
                value={value}
                index={2}
                className="container tabpanel-responsive"
              >
                <div className="account-form-box ">
                  <div className="form-field">
                    <FormGroup>
                      <label className="form-field-label label-name">
                        Email Address
                      </label>
                      <br></br>
                      <input
                        name="email"
                        type="email"
                        className="login-input account-placehoder"
                        onChange={handleChangeForm}
                        required
                      />
                    </FormGroup>
                  </div>

                  <div className="form-field">
                    <FormGroup>
                      <label className="form-field-label label-name">
                        Phone Number
                      </label>
                      <br></br>
                      <input
                        name="phone"
                        type="number"
                        className="login-input account-placehoder"
                        onChange={handleChangeForm}
                        required
                      />
                    </FormGroup>
                  </div>

                  <div className="form-field">
                    <FormGroup>
                      <label className="form-field-label label-name">
                        Address Line 1
                      </label>
                      <br></br>
                      <input
                        name="address"
                        type="text"
                        className="login-input account-placehoder"
                        onChange={handleChangeForm}
                        required
                      />
                    </FormGroup>
                  </div>

                  <div className="form-field">
                    <FormGroup>
                      <label className="form-field-label label-name">
                        City
                      </label>
                      <br></br>
                      <input
                        name="city"
                        type="text"
                        className="login-input account-placehoder"
                        onChange={handleChangeForm}
                        required
                      />
                    </FormGroup>
                  </div>

                  <div className="form-field">
                    <FormGroup>
                      <label className="form-field-label label-name">
                        State
                      </label>
                      <br></br>
                      <input
                        name="state"
                        type="text"
                        className="login-input account-placehoder"
                        onChange={handleChangeForm}
                        required
                      />
                    </FormGroup>
                  </div>

                  <div className="form-field">
                    <FormGroup>
                      <label className="form-field-label label-name">Zip</label>
                      <br></br>
                      <input
                        name="zip"
                        type="number"
                        className="login-input account-placehoder"
                        onChange={handleChangeForm}
                        required
                      />
                    </FormGroup>
                  </div>

                  <div className="form-field">
                    <FormGroup>
                      <div className="row">
                        <div className="col-sm-6">
                          <label className="form-field-label label-name">
                            SSN
                          </label>
                          <br></br>
                          {checkedSsn && (
                            <input
                              name="ssn"
                              type="number"
                              className="login-input account-placehoder"
                              onChange={handleChangeForm}
                              required
                            />
                          )}
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="checkbox"
                            className="mr-2 larger"
                            name="is_ssn"
                            onClick={() => {
                              checkedSsn
                                ? setCheckedSsn(false)
                                : setCheckedSsn(true);
                            }}
                          />
                          <label className="form-field-label label-name">
                            Don't have SSN
                          </label>
                        </div>
                      </div>
                    </FormGroup>
                  </div>

                  <div className="form-field">
                    <FormGroup>
                      <label className="form-field-label label-name">
                        Date of Birth
                      </label>
                      <br></br>
                      <DatePicker
                        name="birth_date"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="date-selector"
                      />
                    </FormGroup>
                  </div>

                  <div className="form-field">
                    <FormGroup>
                      <label className="form-field-label label-name">
                        Visa Status
                      </label>
                      <br></br>
                      <select
                        name="visa_state"
                        className="login-input form-field-label"
                        onChange={handleChangeForm}
                      >
                        <option>OPT</option>
                        <option>STEM OPT</option>
                        <option>H1-B</option>
                        <option>H1-B</option>
                        <option>L1</option>
                        <option>O1</option>
                        <option>Green Card</option>
                        <option>Citizen</option>
                        <option>B1/B2</option>
                      </select>
                    </FormGroup>
                  </div>

                  <div className="form-field">
                    <FormGroup>
                      <label className="form-field-label label-name">
                        Valid Till(MM/YYYY)
                      </label>
                      <br></br>
                      <input
                        name="valid_till"
                        type="month"
                        className="datepicker-input account-placehoder"
                        onChange={handleChangeForm}
                        required
                      />
                      {/* <MonthPicker
                        name="valid_till"
                        allowedYears={{
                          after: new Date().getFullYear() - 100,
                        }}
                        className="month-selector"
                        onSelect={(d) => console.log(d)}
                      /> */}
                    </FormGroup>
                  </div>
                </div>
                <div className="text-center">
                  <Button className="sign-in-btn">Submit</Button>
                </div>
              </TabPanel>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;
