import React, { useState, useEffect } from "react";
import { FormGroup, Button, Form } from "reactstrap";
import working from "../images/working.png";
import vector from "../images/vector.png";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import email from "../images/email.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSingleData, linkedinLoginNext } from "../redux/actions";

const LinkedinLogin = () => {
  const getLinkedinId = localStorage.getItem("linkedin_id");
  const firstName = localStorage.getItem("f_name");
  const lastName = localStorage.getItem("l_name");
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, singleData } = useSelector((state) => ({
    loading: state.linkedReducers.getSingleLoginData.loading,
    singleData: state.linkedReducers.getSingleLoginData.singleData,
  }));

  useEffect(() => {
    dispatch(getSingleData());
  }, [dispatch]);
  // console.log(singleData);
  const [formData, updateFormData] = useState("");

  var dataobj = {};
  for (let key in singleData) {
    dataobj[key] = singleData[key];
  }
  const handleChange = (e) => {
    updateFormData({
      ...dataobj,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(linkedinLoginNext(formData,history));
    console.log(formData);
  };

  return (
    <div className="container-fluid">
      <div className="main-block ">
        <div className="form-layout">
          <div className="row">
            <div className="col-sm-7">
              <img src={working} alt="" className="login-image" />
            </div>

            <div className="col-sm-5">
              <div className="login-block">
                <div className="linked-in">
                  <img src={vector} alt="" className="mr-2 vector-logo" />
                  Credislice
                </div>
                <div className="login-title-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>

                <Form onSubmit={handleSubmit}>
                  <div className="login-form-box">
                    {loading ? (
                      <div>Loading....</div>
                    ) : (
                        <>
                          <FormGroup>
                            <input
                              type="hidden"
                              name="linkedin_id"
                              className="displaynone"
                              defaultValue={singleData !== null && singleData.linkedin_id}
                              onChange={handleChange}
                            />
                          </FormGroup>

                          <div className="form-grp-section">
                            <FormGroup className="form-grp ">
                              <div className="row">
                                <div className="col-1  ">
                                  <img
                                    src={user}
                                    alt=""
                                    className="user-icon"
                                  />
                                </div>
                                <div className="col-10 formgroup-content ">
                                  <label className="label-name">
                                    First Name
                                  </label>
                                  <br></br>
                                  <input
                                    type="text"
                                    name="f_name"
                                    defaultValue={singleData !== null && singleData.f_name}
                                    className="login-input "
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </FormGroup>
                          </div>
                          <div className="form-grp-section">
                            <FormGroup className="form-grp ">
                              <div className="row">
                                <div className="col-1">
                                  <img
                                    src={user}
                                    alt=""
                                    className="user-icon"
                                  />
                                </div>
                                <div className="col-10 formgroup-content">
                                  <label className="label-name">
                                    Last Name
                                  </label>
                                  <br></br>
                                  <input
                                    type="text"
                                    name="l_name"
                                    defaultValue={singleData !== null && singleData.l_name}
                                    className="login-input"
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </FormGroup>
                          </div>
                        </>
                      )
                    }

                    {/* <FormGroup>
                      <input
                        type="text"
                        name="linkedin_id"
                        defaultValue={singleData.linkedin_id}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <div className="form-grp-section">
                      <FormGroup className="form-grp ">
                        <div className="row">
                          <div className="col-1  ">
                            <img src={user} alt="" className="user-icon" />
                          </div>
                          <div className="col-10 formgroup-content ">
                            <label className="label-name">First Name</label>
                            <br></br>
                            <input
                              type="text"
                              name="f_name"
                              defaultValue={firstName}
                              className="login-input "
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </FormGroup>
                    </div>
                    <div className="form-grp-section">
                      <FormGroup className="form-grp ">
                        <div className="row">
                          <div className="col-1">
                            <img src={user} alt="" className="user-icon" />
                          </div>
                          <div className="col-10 formgroup-content">
                            <label className="label-name">Last Name</label>
                            <br></br>
                            <input
                              type="text"
                              name="l_name"
                              defaultValue={lastName}
                              className="login-input"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </FormGroup>
                    </div> */}
                    <div>
                      <FormGroup className="form-grp ">
                        <div className="row">
                          <div className="col-1 formgroup-icon">
                            <img src={email} alt="" className="user-icon" />
                          </div>
                          <div className="col-10 formgroup-content">
                            <label className="label-name">Email Address</label>
                            <br></br>
                            <input
                              type="email"
                              name="email"
                              className="login-input"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </FormGroup>
                    </div>
                  </div>
                  {/* <Link to="/accountsetup"> */}
                  <Button className="sign-in-btn">Next</Button>
                  {/* </Link> */}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedinLogin;
