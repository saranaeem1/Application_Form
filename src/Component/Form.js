import React, { useState } from "react";
import "./Forms.css";
const Form = () => {
  const [formData, setFormData] = useState({
    text1: "",
    text2: "",
    email: "",
    password: "",
    checkbox: {
      webDevelopment: false,
      dataScience: false,
      cyberSecurity: false,
      graphicDesigning: false,
    },
    radio: "",
    dropdown: "",
    date: "",
    number: "",
    color: "#000000",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? { ...prevData[name], [value]: checked } : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>APPLICATION FORM </h1>
      <label>
        First Name:
        <input
          type="text"
          name="text1"
          value={formData.text1}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Last Name:
        <input
          type="text"
          name="text2"
          value={formData.text2}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Age:
        <input
          type="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Education:
        <select
          name="dropdown"
          value={formData.dropdown}
          onChange={handleChange}
        >
          <option value="">Select Education</option>
          <option value="option1">Matric</option>
          <option value="option2">Intermediate</option>
          <option value="option3">Bachelors</option>
          <option value="option4">Masters</option>
        </select>
      </label>
      <br />

      <label>
        Date of Birth:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Interest:
        <br />
        <label>
          Web development
          <input
            type="checkbox"
            name="checkbox"
            value="webDevelopment"
            checked={formData.checkbox.webDevelopment}
            onChange={handleChange}
          />
        </label>
        <label>
          Data Science
          <input
            type="checkbox"
            name="checkbox"
            value="dataScience"
            checked={formData.checkbox.dataScience}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Graphic Designing
          <input
            type="checkbox"
            name="checkbox"
            value="graphicDesigning"
            checked={formData.checkbox.mobileAppDevelopment}
            onChange={handleChange}
          />
        </label>
        <label>
          Cyber Security
          <input
            type="checkbox"
            name="checkbox"
            value="cyberSecurity"
            checked={formData.checkbox.cyberSecurity}
            onChange={handleChange}
          />
        </label>
      </label>
      <br />

      <label>
        Gender:
        <label className="genderLaber">
          Female
          <input
            type="radio"
            name="radio"
            value="option1"
            checked={formData.radio === "option1"}
            onChange={handleChange}
          />
        </label>
        <label>
          Male
          <input
            type="radio"
            name="radio"
            value="option2"
            checked={formData.radio === "option2"}
            onChange={handleChange}
          />
        </label>
      </label>
      <br />

      <label>
        Color Picker:
        <input
          type="color"
          name="color"
          value={formData.color}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
