import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../CSS/CarSellForm.css";
import carImage from "../IMAGES/car.jpg";

const CarSellForm = () => {
  const [formData, setFormData] = useState({
    carMake: "",
    carModel: "",
    year: "",
    mileage: "",
    condition: "",
    features: [],
    transmission: "",
    priceRange: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <body>
      <div className="bg-container">
        <div>
          <img src={carImage} alt="Car" className="img-fluid img-container" />
        </div>

        <div className="vertical-divider"></div>

        <div className="form-container">
          <form
            className="container border border-secondary float"
            style={{
              maxWidth: "500px",
              color: "black",
            }}
            onSubmit={handleSubmit}
          >
            <label className="form-label">Car Make:</label>
            <input
              type="text"
              name="carMake"
              className="form-control"
              value={formData.carMake}
              onChange={handleChange}
            />
            <br />

            <label className="form-label">Car Model:</label>
            <input
              className="form-control"
              type="text"
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
            />
            <br />

            <label className="form-label">Year:</label>
            <input
              className="form-control"
              type="date"
              name="year"
              value={formData.year}
              onChange={handleChange}
            />
            <br />

            <label className="form-label">Mileage:</label>
            <input
              className="form-control"
              type="number"
              name="mileage"
              value={formData.mileage}
              onChange={handleChange}
            />
            <br />

            <label className="form-label me-3">Condition:</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="condition"
                value="Excellent"
                checked={formData.condition === "Excellent"}
                onChange={handleChange}
              />
              <label className="form-check-label">Excellent</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="condition"
                value="Fair"
                checked={formData.condition === "Fair"}
                onChange={handleChange}
              />
              <label className="form-check-label">Fair</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="condition"
                value="Poor"
                checked={formData.condition === "Poor"}
                onChange={handleChange}
              />
              <label className="form-check-label">Poor</label>
            </div>
            <div className="mb-3">
              <label className="form-check-label me-3">Features:</label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="features"
                  value="Air Conditioning"
                  checked={formData.features.includes("Air Conditioning")}
                  onChange={handleChange}
                />
                <label className="form-check-label">Air Conditioning</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="features"
                  value="Power Steering"
                  checked={formData.features.includes("Power Steering")}
                  onChange={handleChange}
                />
                <label className="form-check-label">Power Steering</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="features"
                  value="Power Windows"
                  checked={formData.features.includes("Power Windows")}
                  onChange={handleChange}
                />
                <label className="form-check-label">Power Windows</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="features"
                  value="ABS"
                  checked={formData.features.includes("ABS")}
                  onChange={handleChange}
                />
                <label className="form-check-label">ABS</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="features"
                  value="Navigation System"
                  checked={formData.features.includes("Navigation System")}
                  onChange={handleChange}
                />
                <label className="form-check-label">Navigation System</label>
              </div>
            </div>

            <label>
              Transmission:
              <select
                className="form-select"
                name="transmission"
                value={formData.transmission}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </label>
            <br />
            <br />
            <label className="form-label">
              Price Range:
              <input
                className="form-range"
                type="range"
                name="priceRange"
                value={formData.priceRange}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="form-label">
              Contact Number:
              <input
                className="form-control"
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </label>
            <br />

            <button className="btn btn-secondary" type="submit">
              Submit
            </button>
            
          </form>
        </div>
      </div>
    </body>
  );
};

export default CarSellForm;
