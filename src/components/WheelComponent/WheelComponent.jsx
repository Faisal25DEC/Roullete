import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import randomColor from "randomcolor";
import Spin from "../../assets/play.png";
import "./WheelComponent.css";

const data = [{ option: "a" }, { option: "b" }, { option: "c" }];
const backgroundColors = ["#f29500", "#6b04cc", "#bd0829"];
const hue = ["blue", "orange", "red", "purple", "black", "pink"];
const WheelComponent = () => {
  const [wheelBg, setWheelBg] = useState(backgroundColors);
  const [wheelData, setWheelData] = useState(data);
  const [spinStop, setSpinStop] = useState(null);
  const [input, setInput] = useState(null);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleWheelButtonClick = () => {
    if (!input) {
      alert("please fill the input");
      return;
    }
    const ridx = Math.floor(Math.random() * hue.length);
    const color = randomColor({ hue: hue[ridx], luminosity: "dark" });
    setWheelBg((prev) => [...prev, color]);
    setWheelData((prev) => [...prev, { option: input }]);
  };

  return (
    <div className="wheel">
      <div>
        <button className="latest-entry">
          {wheelData[wheelBg.length - 1].option}
        </button>
        <div className="input-section">
          <input
            className="data-input"
            placeholder=" entries separated by commas"
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            onClick={handleWheelButtonClick}
            className="data-input-button"
          >
            Add
          </button>
        </div>
        <div className="entries-container">
          {wheelData.map((entry) => {
            return <p>• {entry.option}</p>;
          })}
        </div>
      </div>
      <div className="wheel-container">
        <div className="wheel-wrapper">
          <Wheel
            innerBorderColor="white"
            radiusLineColor="white"
            outerBorderColor="white"
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={wheelData}
            textColors={["white"]}
            backgroundColors={wheelBg}
            onStopSpinning={() => {
              setMustSpin(false);

              setSpinStop(true);
            }}
          />
          <div onClick={handleSpinClick} className="spin-button">
            <img src={Spin} alt="spin" />
          </div>
        </div>

        {spinStop && (
          <div className="modal">
            <h1>Congrats you have won!!</h1>
            <button className="modal-button">
              {wheelData[prizeNumber].option}
            </button>
            <button
              className="modal-button"
              onClick={() => {
                setSpinStop(null);
              }}
            >
              Great!!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default WheelComponent;
