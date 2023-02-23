import React from "react";
import "../ThirdPage/thirdPage.css";
const confirmationPage = (props) => {
  return (
    <div>
      <h2 className="Head">Schedule an appointment</h2>
      <div className="newgrid">
        <h4 className="number">01.</h4>

        <div className="mmleft">
          <h4 className="hospiname">{props.name}</h4>
          <h5 className="address">{props.namee}</h5>
        </div>

        <div>
          <h4 className="vaccinebooth">Select vaccination booth</h4>
          <div className="box">05</div>
        </div>
        <div>
          <h4 className="selectiontime">Select Time Slot</h4>
          <div className="box">10:30 am - 11:00am</div>
        </div>
      </div>
      <div>
        <h4 className="covid">Covishield</h4>
      </div>
      <div className="line"></div>
      <div className="margine">
        <h4 className="name">Febin Abhraham</h4>
        <h5 className="date">Date of Birth</h5>
        <h6 className="DOB">09/12/1998</h6>
      </div>
    </div>
  );
};

export default confirmationPage;
