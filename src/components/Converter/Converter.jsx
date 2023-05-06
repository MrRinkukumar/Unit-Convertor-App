import React, { useState } from "react";
import "./Converter.css";

const conversionData = [
  {
    type: "Length",
    options: [
      { from: "Meters", to: "Centimeters", factor: 100 },
      { from: "Centimeters", to: "Meters", factor: 0.01 },
      { from: "Meters", to: "Feet", factor: 3.28084 },
      { from: "Feet", to: "Meters", factor: 0.3048 },
      { from: "Meters", to: "Inches", factor: 39.3701 },
      { from: "Inches", to: "Meters", factor: 0.0254 },
    ],
  },
  {
    type: "Temperature",
    options: [
      { from: "Celsius", to: "Fahrenheit", convert: (c) => c * 1.8 + 32 },
      { from: "Fahrenheit", to: "Celsius", convert: (f) => (f - 32) / 1.8 },
    ],
  },
  {
    type: "Weight",
    options: [
      { from: "Kilograms", to: "Pounds", factor: 2.20462 },
      { from: "Pounds", to: "Kilograms", factor: 0.453592 },
    ],
  },
  {
    type: "Data Transfer Rate",
    options: [
      { from: "Megabits per second", to: "Kilobits per second", factor: 1000 },
      { from: "Kilobits per second", to: "Megabits per second", factor: 0.001 },
      { from: "Megabits per second", to: "Gigabits per second", factor: 0.001 },
      { from: "Gigabits per second", to: "Megabits per second", factor: 1000 },
    ],
  },
  {
    type: "Area",
    options: [
      { from: "Square Meters", to: "Square Feet", factor: 10.7639 },
      { from: "Square Feet", to: "Square Meters", factor: 0.092903 },
    ],
  },
  {
    type: "Volume",
    options: [
      { from: "Liters", to: "Gallons", factor: 0.264172 },
      { from: "Gallons", to: "Liters", factor: 3.78541 },
    ],
  },
  {
    type: "Energy",
    options: [
      { from: "Joules", to: "Calories", factor: 0.239006 },
      { from: "Calories", to: "Joules", factor: 4.184 },
    ],
  },
  {
    type: "Fuel Economy",
    options: [
      {
        from: "Miles per Gallon",
        to: "Kilometers per Liter",
        factor: 0.425144,
      },
      { from: "Kilometers per Liter", to: "Miles per Gallon", factor: 2.35215 },
    ],
  },
  {
    type: "Frequency",
    options: [
      { from: "Hertz", to: "Kilohertz", factor: 0.001 },
      { from: "Kilohertz", to: "Hertz", factor: 1000 },
      { from: "Hertz", to: "Megahertz", factor: 0.000001 },
      { from: "Megahertz", to: "Hertz", factor: 1000000 },
    ],
  },
  {
    type: "Plane Angle",
    options: [
      { from: "Degrees", to: "Radians", factor: Math.PI / 180 },
      { from: "Radians", to: "Degrees", factor: 180 / Math.PI },
    ],
  },
  {
    type: "Pressure",
    options: [
      { from: "Pascals", to: "PSI", factor: 0.000145038 },
      { from: "PSI", to: "Pascals", factor: 6894.76 },
    ],
  },
  {
    type: "Speed",
    options: [
      { from: "Meters per Second", to: "Kilometers per Hour", factor: 3.6 },
      {
        from: "Kilometers per Hour",
        to: "Meters per Second",
        factor: 0.277778,
      },
      { from: "Miles per Hour", to: "Kilometers per Hour", factor: 1.60934 },
      { from: "Kilometers per Hour", to: "Miles per Hour", factor: 0.621371 },
    ],
  },
  {
    type: "Time",
    options: [
      { from: "Seconds", to: "Minutes", factor: 0.0166667 },
      { from: "Minutes", to: "Seconds", factor: 60 },
      { from: "Hours", to: "Minutes", factor: 60 },
      { from: "Minutes", to: "Hours", factor: 0.0166667 },
      { from: "Days", to: "Hours", factor: 24 },
      { from: "Hours", to: "Days", factor: 0.0416667 },
      { from: "Weeks", to: "Days", factor: 7 },
      { from: "Days", to: "Weeks", factor: 0.142857 },
    ],
  },
];

const ConversionCalculator = () => {
  const [type, setType] = useState(conversionData[0].type);
  const [fromUnit, setFromUnit] = useState(conversionData[0].options[0].from);
  const [toUnit, setToUnit] = useState(conversionData[0].options[0].to);
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleTypeChange = (event) => {
    setType(event.target.value);
    setFromUnit(
      conversionData.find((d) => d.type === event.target.value).options[0].from
    );
    setToUnit(
      conversionData.find((d) => d.type === event.target.value).options[0].to
    );
  };

  const handleFromUnitChange = (event) => {
    setFromUnit(event.target.value);
  };

  const handleToUnitChange = (event) => {
    setToUnit(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleConvertClick = () => {
    const conversion = conversionData
      .find((d) => d.type === type)
      .options.find((o) => o.from === fromUnit && o.to === toUnit);
    const resultValue = value * conversion.factor;
    setResult(resultValue);
  };

  return (
    <div className="container">
      <div className="conversion-calculator">
        <h3>Unit Conversion Calculator</h3>
        <div className="form">
          <div className="form-group-type">
            <select
              className="conversion-type"
              id="type"
              value={type}
              onChange={handleTypeChange}
            >
              {conversionData.map((d) => (
                <option key={d.type} value={d.type}>
                  {d.type}
                </option>
              ))}
            </select>
          </div>
          <div className="units-group">
            <div className="units">
              <div className="form-group">
                <input
                  id="value"
                  type="number"
                  placeholder="0.00"
                  value={value}
                  onChange={handleValueChange}
                />
              </div>
              <div className="form-group">
                <select
                  id="fromUnit"
                  value={fromUnit}
                  onChange={handleFromUnitChange}
                >
                  {conversionData
                    .find((d) => d.type === type)
                    .options.map((o) => (
                      <option key={o.from + o.to} value={o.from}>
                        {o.from}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="equal">=</div>
            <div className="units">
              <div className="form-group">
                <div className="result">{result}</div>
              </div>
              <div className="form-group">
                <select
                  id="toUnit"
                  value={toUnit}
                  onChange={handleToUnitChange}
                >
                  {conversionData
                    .find((d) => d.type === type)
                    .options.map((o) => (
                      <option
                        className="to-option"
                        key={o.from + o.to}
                        value={o.to}
                      >
                        {o.to}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className="button-container">
            <button onClick={handleConvertClick}>Convert</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionCalculator;
