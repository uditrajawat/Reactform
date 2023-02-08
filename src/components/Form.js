import React, { useState } from "react";
import styles from "./style.module.css";

const Form = () => {
  const [selectedOption, setSelectedOption] = useState("Student");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  //   const handleClick=(event)=>{

  //   }
  return (
    <div>
      <div>
        <form className={styles.form}>
          <p>Let us know how we can improve fcc</p>
          <div>
            *Name:
            <input type="text" placeholder="Enter Your Name"></input>
          </div>
          <br></br>
          <div>
            *Email: <input type="email" placeholder="Enter Your Email"></input>
          </div>
          <br></br>
          <div>
            *Age:<input placeholder="Age" type="number"></input>
          </div>
          <br></br>
          <div>
            Which Option Best describes your current role?:
            <select value={selectedOption} onChange={handleChange}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <br></br>
          <div></div>
          *How Likely is that you would recommend freeCodeCamp to a friend?
          <div>
            <input
              type="radio"
              value="Definitely"
              checked={selectedOption === "Definitely"}
              onChange={handleOptionChange}
            ></input>
            Definitely
            <div>
              <input
                type="radio"
                value="Maybe"
                checked={selectedOption === "Maybe"}
                onChange={handleOptionChange}
              ></input>
              Maybe
            </div>
            <div>
              <input
                type="radio"
                value="Not Sure"
                checked={selectedOption === "Not Sure"}
                onChange={handleOptionChange}
              ></input>
              Not Sure
            </div>
          </div>
          <br></br>
          <div>
            What do you Like Most in FCC:
            <select>
              <option>Select an Option</option>
            </select>
          </div>
          <br></br>
          Things that should be improved in the future (Check all that apply):
          <div>
            <input
              type="checkbox"
              value="Front-end Projects"
              checked={selectedOption === "Front-end Projects"}
              onChange={handleOptionChange}
            ></input>
            Front-end Projects
          </div>
          <div>
            <input
              type="checkbox"
              value="Back-end Projects"
              checked={selectedOption === "Back-end Projects"}
              onChange={handleOptionChange}
            ></input>
            Back-end Projects
          </div>
          <div>
            <input
              type="checkbox"
              value="Data Visualization"
              checked={selectedOption === "Data Visualization"}
              onChange={handleOptionChange}
            ></input>
            Data Visualization
          </div>
          <br></br>
          <div>
            <button type="submit" className={styles.button}>
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
