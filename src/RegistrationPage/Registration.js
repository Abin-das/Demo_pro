import React from "react";
import Navbar from "../RegistrationPage/Navbar";
import Banner from "../RegistrationPage/banner";
import Reg from "../RegistrationPage/reg";
import Select from "../RegistrationPage/Select";
import { useState } from "react";
import SecondPage from "../Seconpage/SecondPage";
import ConfirmationPage from "../ThirdPage/confirmationPage";

const Registration = () => {
  const [text, setText] = useState();
  const [isToggled, setIsToggled] = useState(0);
  const [hospitalname, setHospitalName] = useState();
  const [addre, setAddre] = useState();
  const hai = (hospital) => {
    setHospitalName(hospital);
  };
  const ttext = (sellText) => {
    setText(sellText);
  };
  const address = (add) => {
    setAddre(add);
  };

  return (
    <div>
      <Navbar />
      <Banner />
      {isToggled === 1 && <Reg name="./TICK.png " names="./Ellipse 2.png" />}
      {isToggled === 2 && <Reg names="./TICK.png " name="./TICK.png " />}
      {isToggled === 0 && (
        <Reg name="./Ellipse 2.png" names="./Ellipse 2.png" />
      )}

      {(isToggled === 0 && <Select slectted={ttext} />) ||
        (isToggled === 1 && <SecondPage onSelection={hai} onsel={address} />) ||
        (isToggled === 2 && (
          <ConfirmationPage name={hospitalname} namee={addre} />
        ))}

      <div className="Center">
        {isToggled !== 2 && (
          <button
            disabled={!text}
            onClick={() => setIsToggled(isToggled + 1)}
            className={(!text && "next1") || (text && "next")}
          >
            <h3 className="white">Next</h3>
          </button>
        )}
        {isToggled === 2 && (
          <button onClick={() => setIsToggled(isToggled)} className="next">
            <h3 className="white">Confirm</h3>
          </button>
        )}
      </div>
    </div>
  );
};

export default Registration;
