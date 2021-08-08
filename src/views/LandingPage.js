import React from "react";
import { AiOutlineBank, AiOutlineDollarCircle } from "react-icons/ai";
// import { GoCreditCard } from "react-icon/go";
import { GoCreditCard } from "react-icons/go";
import Slider from "react-slick";
import mobile from "../images/mobile.png";
import { ImMagicWand } from "react-icons/im";
import { GiCommercialAirplane, GiCutDiamond } from "react-icons/gi";
import { GrDiamond } from "react-icons/gr";
import { ScrollButton } from "../components";

const LandingPage = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <div className="container-fluid border">
      <section className="que-your-mind-bg">
        <div className="container">
          <div className="que-your-mind">Questions on your mind?</div>
          <div className="row que-list-block">
            <div className="col-sm-3">
              <div className="que-list">
                <div className="">
                  <AiOutlineBank className="que-list-icon" />
                </div>
                <div className="que-list-inner">Which bank?</div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="que-list">
                <div className="">
                  <GoCreditCard className="que-list-icon" />
                </div>
                <div className="que-list-inner">Credit card?</div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="que-list">
                <div className="">
                  <AiOutlineDollarCircle className="que-list-icon" />
                </div>
                <div className="que-list-inner">What is Fico?</div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="que-list">
                <div className="">
                  <AiOutlineDollarCircle className="que-list-icon" />
                </div>
                <div className="que-list-inner">Emergency cash?</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="study-durection-section">
        <div className="container-fluid">
          <div className="que-your-mind">
            Credislice with you at every step during the full study duration
          </div>
          <div className="study-duration-screenshot">
            <Slider {...settings}>
              <div>
                <img src={mobile} alt="" />
              </div>
              <div>
                <img src={mobile} alt="" />
              </div>
              <div>
                <img src={mobile} alt="" />
              </div>
              <div>
                <img src={mobile} alt="" />
              </div>
              <div>
                <img src={mobile} alt="" />
              </div>
              <div>
                <img src={mobile} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="sc-bg">
        <div className="container-fluid">
          <div className="row mr-0">
            <div className="col-sm-3 screen-shot-details-block">
              <div className="screenshot-detail">
                <div>
                  <ImMagicWand className="screenshot-icon" />
                </div>
                <div className="open-bank-account">
                  <div className="bank-account-title">Open Bank Account</div>
                  <div className="open-bank-details">
                    Open a bank account even before you land on the campus
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3  screen-shot-details-block">
              <div className="screenshot-detail">
                <div>
                  <GiCommercialAirplane className="screenshot-icon" />
                </div>
                <div className="open-bank-account">
                  <div className="bank-account-title">Get a Buddy</div>
                  <div className="open-bank-details">
                    A buddy to answer all your financial questions through the
                    duration of course
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 screen-shot-details-block">
              <div className="screenshot-detail">
                <div>
                  <GiCutDiamond className="screenshot-icon" />
                </div>
                <div className="open-bank-account">
                  <div className="bank-account-title">Build FICO</div>
                  <div className="open-bank-details">
                    FICO is the financial backbone in the US and is years long
                    process. Get guidance on building it
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3  screen-shot-details-block">
              <div className="screenshot-detail">
                <div>
                  <ImMagicWand className="screenshot-icon" />
                </div>
                <div className="open-bank-account">
                  <div className="bank-account-title">Financial Management</div>
                  <div className="open-bank-details">
                    Manage all your loans and finances through a single app
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="join-section">
        <div className="container">
          <div className="row thousand-join">
            <div className="col-sm-8">
              <div className="join-service mb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                tenetur dicta commodi, totam atque fugit ut magnam laboriosam
                dignissimos dolorum minus quia sed distinctio in mollitia
                laborum sint delectus accusamus! Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Harum tenetur dicta commodi, totam
                atque fugit ut magnam.
              </div>
              <div className="join-service">
                Credislice Services Join the thousand others today
              </div>
              <div className="service-form">
                <form>
                  <input
                    type="email"
                    className="service-email"
                    placeholder="Email"
                  />
                  <button className="service-email mt-3">
                    Join the waitlist
                  </button>
                </form>
              </div>
            </div>
            <div className="col-sm-4">
              <img src={mobile} alt="" className="join-image" />
            </div>
          </div>
        </div>
        <div>
          <ScrollButton />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
