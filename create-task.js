const Mergent = require("mergent");

// set the Mergent API key
const mergent = new Mergent("...");

// create a task that will run in 5 minutes
// the URL should be set to the URL of your task handler
mergent.tasks
  .create({
    request: {
      url: "...",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hello: "world" }),
    },
    delay: { minutes: 5 },
  })
  .then((task) => console.log(task))
  .catch((error) => console.error(error));
