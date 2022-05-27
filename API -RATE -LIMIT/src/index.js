const express = require("express");
const domdata = require("./routes");
const rateLimit = require("express-rate-limit");
const app = express();

app.use(
  rateLimit({
    windowMs: 1 * 60 * 1000, // 1 min duration in milliseconds
    max: 5,
    message: "You exceeded 5 requests in 1 min limit!",
    headers: true,
  })
);

app.use("/get", domdata);

app.listen(5000, () => {
  console.log("running at port 5000");
});
