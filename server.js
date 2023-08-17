const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/api/tasks", async (req, res) => {
  try {
    await performTask(req);
    // task was successful, respond with 200
    res.status(200).send("");
  } catch (err) {
    // task failed, respond with 500 so Mergent will retry
    res.status(500).send({ error: err });
  }
});

async function performTask(req) {
  // This is where you'll perform your task.
  // For now, we'll just log it.
  console.log("Performing task: ", req.body);
}

app.listen(3000, () => console.log("🚀 on :3000"));
