import React, { useState } from "react";
import {
  FaRegSmile,
  FaPassport,
  FaPercentage,
  FaHeartbeat,
  FaCheck,
  FaTwitter,
} from "react-icons/fa";
import { RiHealthBookFill } from "react-icons/ri";
import moneyTransfer from "../images/money_transfer.png";
import { Button } from "reactstrap";
import { FiArrowRight } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { SignUp, CashBefore } from "../components";

import { Link } from "react-router-dom";
import { GiSkills } from "react-icons/gi";

const Home = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [modalCash, setModalCash] = useState(false);
  const toggleCash = () => setModalCash(!modalCash);

  return (
    <div className="container-fluid">
      <section className="header-block ">
        <div className="container">
          <div className="logo">CrediSlice</div>
          <div className="skills-can-get">
            Skills can get you a job, but what if it can also drive your
            interest rates
          </div>
          <div className="we-a-group">
            We are bringing Personal Loan and Student Loan Refinance using your
            most valuable assets - YOUR SKILLS
          </div>
        </div>
      </section>
      <section className="funds container">
        <div className="row">
          <div className="col-sm-6">
            <div className="careers-skills">Funds = f(Career Skills)</div>
            <div className="up-to">
              Up to $5000 depending upon your need and aligned professional
              skills
            </div>
            <div className="pt-10 we-are-list">
              <span className=" icon-outline">
                <FaPassport className="icon"></FaPassport>
              </span>
              <span className="skill-list">
                Designed exclusively for immigrants/internationals
              </span>
            </div>
            <div className="pt-10 we-are-list">
              <span className=" icon-outline">
                <FaRegSmile className="icon"></FaRegSmile>
              </span>
              <span className="skill-list">No Co-signer and No Collateral</span>
            </div>
            <div className="pt-10 we-are-list">
              <span className=" icon-outline">
                <GiSkills className="icon" />
              </span>
              <span className="skill-list">
                More skills you have, less you pay
              </span>
            </div>
            <div className="pt-10 we-are-list">
              <span className=" icon-outline">
                <RiHealthBookFill className="icon" />
              </span>
              <span className="skill-list">
                $$ Aligned with your need and Credit Health
              </span>
            </div>
            <div className="pt-10 we-are-list">
              <span className=" icon-outline">
                <FaHeartbeat className="icon" />
              </span>
              <span className="skill-list">Heart beat fast application</span>
            </div>
          </div>
          <div className="col-sm-6 ">
            {/* <img src={moneyTransfer} alt="" className="money-transfer" /> */}
            <div className="simple-product">Two Simpler Products</div>
            <div className="always-know text-center">
              Always know what you'll pay
            </div>
            <div className="container pt-20">
              <div className="row">
                <div className="col-sm-6 signup-box">
                  <div className="shadow product-box">
                    <div className="student-loan">Student Loan Refinance</div>
                    <div className="no-visa ">No visa milestone required</div>
                    <div className="loan-list">
                      <div className="mt-1 we-are-list">
                        <FaCheck className="text-success" />
                        <span className="loan-list-check">No Co-signer</span>
                      </div>
                      <div className="mt-1 we-are-list">
                        <FaCheck className="text-success " />
                        <span className="loan-list-check">
                          No visa constraints
                        </span>
                      </div>
                      <div className="mt-1 we-are-list">
                        <FaCheck className="text-success" />
                        <span className="loan-list-check">
                          Career skills FICO score
                        </span>
                      </div>
                      <div>
                        <Button
                          type="submit"
                          className="sign-up-button"
                          onClick={() => {
                            toggle();
                          }}
                        >
                          Sign Up
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 cash-block signup-box">
                  <div className="shadow product-box">
                    <div className="student-loan">
                      Cash before Internship/Job
                    </div>
                    <div className="no-visa ">
                      Personal loan before the full time job
                    </div>
                    <div className="cash-loan-list ">
                      <div className="mt-1 we-are-list">
                        <FaCheck className="text-success " />
                        <span className="loan-list-check">$ For new lease</span>
                      </div>
                      <div className="mt-1 we-are-list">
                        <FaCheck className="text-success " />
                        <span className="loan-list-check">
                          $ For car purchase
                        </span>
                      </div>
                      <div className="mt-1 we-are-list">
                        <FaCheck className="text-success " />
                        <span className="loan-list-check">
                          $ For living expenses
                        </span>
                      </div>
                      <div>
                        <Button
                          className="sign-up-button"
                          onClick={() => {
                            toggleCash();
                          }}
                        >
                          Sign Up
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="ptb-10">
        <div className="simple-product pt-10">Two Simpler Products</div>
        <div className="always-know text-center">
          Always know what you'll pay
        </div>
        <div className="container pt-20">
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-3">
              <div className="shadow product-box">
                <div className="student-loan">Student Loan Refinance</div>
                <div className="no-visa ">No visa milestone required</div>
                <div className="loan-list">
                  <div className="mt-1 we-are-list">
                    <FaCheck className="text-success" />
                    <span className="loan-list-check">No Co-signer</span>
                  </div>
                  <div className="mt-1 we-are-list">
                    <FaCheck className="text-success " />
                    <span className="loan-list-check">No visa constraints</span>
                  </div>
                  <div className="mt-1 we-are-list">
                    <FaCheck className="text-success" />
                    <span className="loan-list-check">
                      Career skills FICO score
                    </span>
                  </div>
                  <div>
                    <Button
                      type="submit"
                      className="sign-up-button"
                      onClick={() => {
                        toggle();
                      }}
                    >
                      Sign Up
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 cash-block">
              <div className="shadow product-box">
                <div className="student-loan">Cash before Internship/Job</div>
                <div className="no-visa ">
                  Personal loan before the full time job
                </div>
                <div className="cash-loan-list ">
                  <div className="mt-1 we-are-list">
                    <FaCheck className="text-success " />
                    <span className="loan-list-check">$ For new lease</span>
                  </div>
                  <div className="mt-1 we-are-list">
                    <FaCheck className="text-success " />
                    <span className="loan-list-check">$ For car purchase</span>
                  </div>
                  <div className="mt-1 we-are-list">
                    <FaCheck className="text-success " />
                    <span className="loan-list-check">
                      $ For living expenses
                    </span>
                  </div>
                  <div>
                    <Button
                      className="sign-up-button"
                      onClick={() => {
                        toggleCash();
                      }}
                    >
                      Sign Up
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
      </section> */}
      <section className="who-we-are-block">
        <div className="who-we-are">Who we are.</div>

        <div className=" container mt-4">
          <div className="we-are-list">
            <span className="immigrant-graduates">
              <FiArrowRight className="mr-1" />
            </span>
            <span className="immigrant-graduates">
              Immigrants who went through similar pain, borrowed from family,
              spent time finding Co-signer.
            </span>
          </div>
          <div className="mt-4 we-are-list">
            <span className="immigrant-graduates">
              <FiArrowRight className="mr-1" />
            </span>
            <span className="immigrant-graduates">
              But the immigrants who have 20+ years of combined experience in
              the fintech space and want to help
            </span>
          </div>
        </div>
      </section>
      <section className="footer-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="footer-content">© 2021 Credislice Inc.</div>
              <div className="footer-content">
                <Link to="/termsofuse" className="text-white">
                  Terms of Service
                </Link>
                <span className="ml-2">
                  <Link to="/privacypolicy" className="text-white">
                    Privacy Policy
                  </Link>
                </span>
              </div>
            </div>
            <div className="col-sm-6 ">
              <div className="social-icon">
                <FaTwitter />
                <SiLinkedin className="ml-4" />
                <ImFacebook2 className="ml-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {modal && <SignUp modal={modal} setModal={setModal} toggle={toggle} />}
      {modalCash && (
        <CashBefore
          modalCash={modalCash}
          setModalCash={setModalCash}
          toggleCash={toggleCash}
        />
      )}
    </div>
  );
};

export default Home;
