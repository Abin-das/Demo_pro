import React from "react";
import "./reg.css";

const registration = (props) => {
  return (
    <div>
      <div className="bg">
        <h2 className="reg">Registration</h2>,
      </div>
      <div className="Stepper">
        <div className="Iden">
          <img className="tickimg" src="./TICK.png"></img>
          <span className="ticktxt"> Identification</span>
        </div>
        <div className="Iden">
          <img className="tickimg" src={`${props.name}`}></img>{" "}
          <span className="ticktxt"> Vaccine Center</span>
        </div>
        <div className="Iden">
          <img className="tickimg" src={`${props.names}`}></img>{" "}
          <span className="ticktxt"> Appointment</span>
        </div>
      </div>
    </div>
  );
};

export default registration;
