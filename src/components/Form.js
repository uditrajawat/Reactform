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
          <p>Let us know how we can improve Free Code Camp</p>
          <div className={styles.row}>
            <div className={styles.column1}>
              <label>`Name:</label>
            </div>
            <div className={styles.column2}>
              <input
                type="text"
                placeholder="Enter Your Name"
                className={styles.inputbox}
              ></input>
            </div>
          </div>
          <br></br>
          <div className={styles.row}>
            <div className={styles.column1}>
              <label>`Email:</label>
            </div>
            <div className={styles.column2}>
              <input
                type="email"
                placeholder="Enter Your Email"
                className={styles.inputbox}
              ></input>
            </div>
          </div>
          <br></br>
          <div className={styles.row}>
            <div className={styles.column1}>
              <label>'Age:</label>
            </div>
            <div className={styles.column2}>
              <input
                type="number"
                placeholder="Age"
                className={styles.inputbox}
              ></input>
            </div>
          </div>
          <br></br>
          <div className={styles.row}>
            <div className={styles.column1}>
              Which Option Best describes your current role?
            </div>
            <div className={styles.column2}>
              <select
                value={selectedOption}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
          </div>
          <br></br>
          <div className={styles.row}>
            <div className={styles.column1}>
              `How Likely is that you would recommend freeCodeCamp to a friend?
            </div>
            <div className={styles.column2}>
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
            </div>
          </div>
          <br></br>
          <div className={styles.row}>
            <div className={styles.column1}>What do you Like Most in FCC:</div>
            <div className={styles.column2}>
              <select className={styles.select}>
                <option>Select an Option</option>
              </select>
            </div>
          </div>
          <br></br>
          <div className={styles.row}>
            <div className={styles.column1}>
              Things that should be improved in the future (Check all that
              apply):
            </div>
            <div className={styles.column2}>
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
            </div>
          </div>

          <br></br>
        </form>
      </div>
    </div>
  );
};
export default Form;
