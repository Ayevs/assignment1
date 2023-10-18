import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getEducation")
      .then((response) => response.text())
      .then((data) => setEducationData(data))
      .catch((error) => console.error("there was an error fetching the education data"))
  }, []);

  return (
    <div className="App">
      <p>{educationData}</p>
    </div>
  );
}

export default App;
