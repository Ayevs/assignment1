import "./App.css";
import { useState, useEffect } from "react";
import { Card } from "primereact/card";

function App() {
  const [educationData, setEducationData] = useState([]);
  const [experianceData, setExperianceData] = useState([]);
  const [overViewData, setOverViewData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/getEducation")
      .then((response) => response.json())
      .then((data) => setEducationData(data))
      .catch((error) =>
        console.error("there was an error fetching the education data")
      );

    fetch("http://localhost:8000/getExperiance")
      .then((response) => response.json())
      .then((data) => setExperianceData(data))
      .catch((error) =>
        console.error("there was an error fetching the experiance data")
      );

    fetch("http://localhost:8000/getOverview")
      .then((response) => response.json())
      .then((data) => setOverViewData(data))
      .catch((error) =>
        console.error("there was an error fetching the overview data")
      );

    fetch("http://localhost:8000/getSkills")
      .then((response) => response.json())
      .then((data) => setSkillsData(data))
      .catch((error) =>
        console.error("there was an error fetching the skills data")
      );
  }, []);

  return (
    <div class="fadeindown animation-duration-1000">
      <h1 className="Title">Alexandr Petrov</h1>
      <div className="App">
        <div className="card">
          <h1 className="card-title">Education</h1>
          <p>
            {educationData.map((edu) => (
              <li>{edu.school}</li>
            ))}
          </p>
        </div>

        <div className="card">
          <h1 className="card-title">Experiance</h1>
          <p>
            {experianceData.map((exp) => (
              <li>
                {exp.lab}
                {exp.atHome}
              </li>
            ))}
          </p>
        </div>

        <div className="card">
          <h1 className="card-title">Overview</h1>
          <p>
            {overViewData.map((ovr) => (
              <p>{ovr.desc}</p>
            ))}
          </p>
        </div>

        <div className="card">
          <h1 className="card-title">Skills</h1>
          <p>
            {skillsData.map((skills) => (
              <li>{skills.skill}</li>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
