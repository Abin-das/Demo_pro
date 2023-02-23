import React, { useEffect, useState } from "react";
import "../Seconpage/secondPage.css";
import Grid from "../../node_modules/@mui/material/Grid";
import axios from "axios";
import "react-js-dropdavn/dist/index.css";

const age = ["18+", "45+"];
const cost = ["Free", "Paid"];
const dose = ["First Dose"];
const cardStyle = "agebox";
const textfontzz = "textfontzz";

const SecondPage = (props) => {
  const [selectedButton, setSelectedButton] = useState("18+");
  const [costsz, setCostsz] = useState("Free");
  const [doses, setDoses] = useState("First Dose");
  const [dropdown, setDropdown] = useState([]);
  const [dropdown2, setDropdown2] = useState([]);
  const [selectedState, setSelectedState] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState();

  const [hospital, setHopsital] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState();
  const [elsehospital, setelseHopsital] = useState("");
  const [elsehospital1, setelseHopsital1] = useState("");

  useEffect(() => {
    axios
      .get("https://cdndemo-api.co-vin.in/api/v2/admin/location/states")
      .then((res) => {
        setDropdown(res.data.states);
      });
  }, [selectedState]);

  useEffect(() => {
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${
          selectedState ? selectedState : "1"
        }`
      )
      .then((res) => {
        setDropdown2(res.data.districts);
      });
  }, [selectedState]);

  const stateSelectionHandler = (event) => {
    setSelectedState(event.target.value);
  };
  useEffect(() => {
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${
          selectedDistrict ? selectedDistrict : "1"
        }&date=14-09-2021
        `
      )
      .then((res) => {
        setHopsital(res.data.centers);

        if (res.data.centers.length) {
          setelseHopsital("");
          setelseHopsital1("");
        } else {
          setelseHopsital("./no data.png");
          setelseHopsital1("No data Found");
        }
      });
  }, [selectedDistrict]);

  const districtSelectionHandler = (event) => {
    setSelectedDistrict(event.target.value);
  };

  return (
    <div>
      <h2 className="Heading">Choose Vaccine Center</h2>
      <Grid className="Grid ">
        <div className="colors">
          <h3> State</h3>
          <div>
            <select
              className="dropdown padding"
              id="lang"
              onChange={stateSelectionHandler}
            >
              {dropdown.map((item) => (
                <option key={item.state_id} value={item.state_id}>
                  {item.state_name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="colors ">
          <h3> District</h3>
          <div>
            <select
              className="dropdown padding"
              id="lang"
              onChange={districtSelectionHandler}
            >
              {dropdown2.map((item) => (
                <option key={item.district_id} value={item.district_id}>
                  {item.district_name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="colors">
          <h3> Pincode</h3>
          <div>
            <select className="dropdown padding" id="lang">
              <option>65846545</option>
            </select>
          </div>
        </div>
      </Grid>
      <div className="mainGrid">
        <Grid className="Grid2">
          {age.map((movie, index) => (
            <label
              key={index}
              className={
                cardStyle + `${selectedButton === movie ? " selected" : ""}`
              }
            >
              <input
                onChange={(e) => {
                  setSelectedButton(e.target.value);
                }}
                type="radio"
                name="buttons"
                value={movie}
                checked=""
              />
              {movie}
            </label>
          ))}
        </Grid>
        <Grid className="Grid2">
          {cost.map((costs, index1) => (
            <label
              key={index1}
              className={cardStyle + `${costsz === costs ? " selected" : ""}`}
            >
              <input
                onChange={(e) => {
                  setCostsz(e.target.value);
                }}
                type="radio"
                name="buttons"
                value={costs}
                checked=""
              />
              {costs}
            </label>
          ))}
        </Grid>
        <Grid className="Grid2">
          {dose.map((dosess, index2) => (
            <label
              key={index2}
              className={cardStyle + `${dosess === doses ? " selected" : ""}`}
            >
              <input
                onChange={(e) => {
                  setDoses(e.target.value);
                }}
                type="radio"
                name="buttons"
                value={dosess}
                checked=""
              />
              {dosess}
            </label>
          ))}
        </Grid>
      </div>
      <div className="mainhead">
        <div className="Containner Grid3">
          <h5 className="Font">NO</h5>
          <h5 className="Font">Name</h5>
          <h5 className="Font">Covaxin</h5>
          <h5 className="Font">CovShield</h5>
          <h5 className="Font">Action</h5>
        </div>
      </div>
      <div className="mainhead">
        <div className="Lastbox">
          <div>
            <Grid className="Grid3 Bottomline">
              <img className="else" src={elsehospital} />
              <h5 className="else">{elsehospital1}</h5>
              <div className="textfontz">
                {hospital.map((hospiname, index) => (
                  <div
                    key={index}
                    className={
                      selectedHospital === hospiname.name
                        ? "selectedd"
                        : "Grid3"
                    }
                    onClick={() => {
                      setSelectedHospital(hospiname.name);
                      props.onSelection(hospiname.name);
                      props.onsel(hospiname.address);
                    }}
                  >
                    <h5 className="Number">{index + 1}</h5>
                    <div>
                      <h5 className={textfontzz}>{hospiname.name}</h5>

                      <h5
                        className={
                          selectedHospital === hospiname.name
                            ? "smalltextfontzz1"
                            : "smalltextfontzz"
                        }
                      >
                        {hospiname.address}
                      </h5>
                    </div>

                    <h5
                      className={
                        selectedHospital === hospiname.name
                          ? "covaxin1"
                          : "covaxin"
                      }
                    >
                      16
                    </h5>
                    <h5
                      className={
                        selectedHospital === hospiname.name
                          ? "covshield1"
                          : "covshield"
                      }
                    >
                      36
                    </h5>
                    <h5 className="select">
                      {hospiname.name === selectedHospital
                        ? "Selected"
                        : "Select"}
                    </h5>
                  </div>
                ))}
              </div>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
