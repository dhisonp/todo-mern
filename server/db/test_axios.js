const axios = require("axios").default;
// axios.default.baseURL = "http://localhost:8080";
const url = "http://localhost:8080/record/add";


axios
  .post(url, {
    taskName: "Axios testing!",
  })
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  });