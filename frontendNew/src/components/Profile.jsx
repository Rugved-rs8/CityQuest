import React, { useState } from "react";
import "../components/Profile.css";

import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Profile = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  const buttons = (
    <div className="my-5 flex justify-between ">
      {currentPage > 1 && (
        <Button
          variant="contained"
          className="mr-auto"
          size="medium"
          onClick={previousPage}
        >
          Previous
        </Button>
      )}
      {currentPage < 3 && (
        <Button
          variant="contained"
          className="ml-auto"
          size="medium"
          onClick={nextPage}
        >
          Next
        </Button>
      )}
      {currentPage === 3 && (
        <Button
          variant="contained"
          className="ml-auto"
          size="medium"
          type="submit"
          endIcon={<SendIcon />}
        >
          Submit
        </Button>
      )}
    </div>
  );

  return (
    <div className="background w-screen">
      <div className="container-fluid bg-gradient-to-r from-slate-900 to-slate-700 p-[3vw]">
        <div className="text-center w-inline text-3xl font-bold text-white py-2 rounded mt-[20vh] mb-5">
          <h3>- Society Profile -</h3>
        </div>
        <form onSubmit={handleSubmit}>
          {buttons}
          <div
            className="row"
            style={{ display: currentPage === 1 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="Societyname">Society Name</label>
            </div>
            <div className="col-75">
              <input
                className="inputTextNumSelectArea"
                type="text"
                id="Societyname"
                name="Societyname"
                placeholder="Society Name.."
                maxLength="20"
              />
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 1 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="ChairpersonName">Chairperson Name</label>
            </div>
            <div className="col-75">
              <input
                className="inputTextNumSelectArea"
                type="text"
                id="ChairpersonName"
                name="ChairpersonName"
                placeholder="Chairperson Name.."
              />
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 1 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="Address">Address</label>
            </div>
            <div className="col-75">
              <input
                className="inputTextNumSelectArea"
                type="text"
                id="Address"
                name="Address"
                placeholder="Address.."
                maxLength="20"
              />
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 1 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="PinCode">Pin Code</label>
            </div>
            <div className="col-75">
              <input
                className="inputTextNumSelectArea"
                type="Number"
                id="PinCode"
                name="PinCode"
                placeholder="Pin Code.."
              ></input>
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 1 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="Noofflats">Number of flats</label>
            </div>
            <div className="col-75">
              <input
                className="inputTextNumSelectArea"
                type="number"
                id="Noofflats"
                name="Noofflats"
                placeholder="Number of flats.."
              />
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 1 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="Age">Age</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                className="inputTextNumSelectArea"
                id="Age"
                name="Age"
                placeholder="Age.."
              />
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 1 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="lparcel">Land parcel (in acres)</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                className="inputTextNumSelectArea"
                id="lparcel"
                name="lparcel"
                placeholder="Land parcel (in acres).."
              />
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 1 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="4parking">Parking – 4 wheelers</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                className="inputTextNumSelectArea"
                id="4parking"
                name="4parking"
                placeholder="Number of Parking – 4 wheelers.."
              />
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 2 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="2parking">Parking – 2 wheelers</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                className="inputTextNumSelectArea"
                id="2parking"
                name="2parking"
                placeholder="Number of Parking – 2 wheelers.."
              />
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 2 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="Dustbins">Dustbins</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                className="inputTextNumSelectArea"
                id="Dustbins"
                name="Dustbins"
                placeholder="Number of Dustbins.."
              />
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 2 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="cctv">CCTVs</label>
            </div>
            <div className="col-75">
              <input
                type="number"
                className="inputTextNumSelectArea"
                id="cctv"
                name="cctv"
                placeholder="Number of CCTVs.."
              />
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 2 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="Gym">Gym</label>
            </div>
            <div className="col-75">
              <select className="inputTextNumSelectArea" id="Gym" name="Gym">
                <option value="notavailable">Not Available</option>
                <option value="Poor">Poor</option>
                <option value="Avergae">Average</option>
                <option value="Good">Good</option>
              </select>
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 2 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="clubHouse">Club House</label>
            </div>
            <div className="col-75">
              <select
                id="clubHouse"
                name="clubHouse"
                className="inputTextNumSelectArea"
              >
                <option value="notavailable">Not Available</option>
                <option value="Poor">Poor</option>
                <option value="Avergae">Average</option>
                <option value="Good">Good</option>
              </select>
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 2 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="Kidsplayarea">Kids Play Area</label>
            </div>
            <div className="col-75">
              <select
                className="inputTextNumSelectArea"
                id="Kidsplayarea"
                name="Kidsplayarea"
              >
                <option value="notavailable">Not Available</option>
                <option value="Poor">Poor</option>
                <option value="Avergae">Average</option>
                <option value="Good">Good</option>
              </select>
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 2 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="SwimmingPool">Swimming Pool </label>
            </div>
            <div className="col-75">
              <select
                className="inputTextNumSelectArea"
                id="SwimmingPool"
                name="SwimmingPool"
              >
                <option value="notavailable">Not Available</option>
                <option value="Poor">Poor</option>
                <option value="Avergae">Average</option>
                <option value="Good">Good</option>
              </select>
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 2 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="securitysystem">Security System</label>
            </div>
            <div className="col-75">
              <select
                className="inputTextNumSelectArea"
                id="securitysystem"
                name="securitysystem"
              >
                <option value="notavailable">Not Available</option>
                <option value="Poor">Poor</option>
                <option value="Avergae">Average</option>
                <option value="Good">Good</option>
              </select>
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 3 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="powerbackup">Power Backup</label>
            </div>
            <div className="col-75">
              <select
                className="inputTextNumSelectArea"
                id="powerbackup"
                name="powerbackup"
              >
                <option value="notavailable">Not Available</option>
                <option value="Poor">Poor</option>
                <option value="Avergae">Average</option>
                <option value="Good">Good</option>
              </select>
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 3 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="temple">Temple</label>
            </div>
            <div className="col-75">
              <select
                className="inputTextNumSelectArea"
                id="temple"
                name="temple"
              >
                <option value="notavailable">Not Available</option>
                <option value="Poor">Poor</option>
                <option value="Avergae">Average</option>
                <option value="Good">Good</option>
              </select>
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 3 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="seniorcitizensitouts">Senior Citizen Sit Outs</label>
            </div>
            <div className="col-75">
              <select
                className="inputTextNumSelectArea"
                id="seniorcitizensitouts"
                name="seniorcitizensitouts"
              >
                <option value="notavailable">Not Available</option>
                <option value="Poor">Poor</option>
                <option value="Avergae">Average</option>
                <option value="Good">Good</option>
              </select>
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 3 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="greenspaces">Green Spaces</label>
            </div>
            <div className="col-75">
              <select
                className="inputTextNumSelectArea"
                id="greenspaces"
                name="greenspaces"
              >
                <option value="notavailable">Not Available</option>
                <option value="Poor">Poor</option>
                <option value="Avergae">Average</option>
                <option value="Good">Good</option>
              </select>
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 3 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="wasteSegregation ">Waste Segregation</label>
            </div>
            <div className="col-75">
              <select
                className="inputTextNumSelectArea"
                id="wasteSegregation"
                name="wasteSegregation"
              >
                <option value="notavailable">Not Available</option>
                <option value="Poor">Poor</option>
                <option value="Avergae">Average</option>
                <option value="Good">Good</option>
              </select>
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 3 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="cleanliness">cleanliness</label>
            </div>
            <div className="col-75">
              <select
                className="inputTextNumSelectArea"
                id="cleanliness"
                name="cleanliness"
              >
                <option value="notavailable">Not Available</option>
                <option value="Poor">Poor</option>
                <option value="Avergae">Average</option>
                <option value="Good">Good</option>
              </select>
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 3 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="SmokeDetector">Smoke Detector</label>
            </div>
            <div className="col-75">
              <select
                className="inputTextNumSelectArea"
                id="SmokeDetector"
                name="SmokeDetector"
              >
                <option value="notavailable">Not Available</option>
                <option value="Poor">Poor</option>
                <option value="Avergae">Average</option>
                <option value="Good">Good</option>
              </select>
            </div>
          </div>
          <div
            className="row"
            style={{ display: currentPage === 3 ? "block" : "none" }}
          >
            <div className="col-25">
              <label for="FireDuct">Fire Duct</label>
            </div>
            <div className="col-75">
              <select
                className="inputTextNumSelectArea"
                id="FireDuct"
                name="FireDuct"
              >
                <option value="notavailable">Not Available</option>
                <option value="Poor">Poor</option>
                <option value="Avergae">Average</option>
                <option value="Good">Good</option>
              </select>
            </div>
          </div>
          <br />
          {buttons}
        </form>
      </div>
    </div>
  );
};

export default Profile;
