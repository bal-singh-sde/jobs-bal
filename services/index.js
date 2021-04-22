const axios = require("axios");
async function getJobs(tech) {
const URL =
  `https://jobs.github.com/positions.json?description=${tech}&location=new+york`;

  const res = await axios.get(URL)
  
return res.data
}

module.exports = {
    getJobs,
};

