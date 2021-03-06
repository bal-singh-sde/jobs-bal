//packages
const express = require("express");
const { getJobs } = require("./services");
const cors = require('cors')


//internal code
const server = express();

server.use(cors())

let PORT = 3000;
if (process.env.PORT !== undefined){
  PORT = process.env.PORT
} 
// const PORT = process.env.PORT ? process.env.PORT : 3000;

server.listen(PORT, () => {
    console.log(`server is runnung on port: ${PORT}`);
})

const jobs = [
  { title: "Director of Ops", salary: "100000", comapany: "Amazon" },
  { title: "SDE", salary: "130000", comapany: "Audible" },
];

// Endpoint

server.get("/jobs", (req, res) => {
  const { tech } = req.query;

  //validation
  if (tech === undefined)
    return res.status(400).send({ error: "tech query parameter is required"})
  getJobs(tech).then((jobs) => res.send(jobs));
})
// getJobs("Java").then((javaJobs) => console.log(javaJobs[0]));