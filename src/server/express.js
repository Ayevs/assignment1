//this will be my server files that will run the server on port 3000
const express = require("express");
const cors = require("cors")
const PORT = 8000;

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}));

app.get('/getEducation', (req, res) =>{
    res.send("hello this is a test for my getedu route.")
})

app.get('/getExperiance')

app.get('/getOverview')

app.get('/getSkills')



app.listen(PORT, () => {
    console.log(`the server is running on http:localhost${PORT}`);
});