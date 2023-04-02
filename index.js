import express from "express";
import bodyParser from "body-parser"; //enable incoming post request body
import usersRoutes from "./routes/users.js";

const app = express(); // We will initial the express application. The whole application relies on the variable 'app'.
const PORT = 8000; // backend port

app.use(bodyParser.json()); // telling the app that we will be using json data in the app.

app.use("/users", usersRoutes);

app.get("/", (req, res) => res.send("Thesis Rest Server test using Node")); // Create route to send request to.

app.listen(PORT, () =>
  console.log(`restful server running on port: http://localhost:${PORT}`)
); // listen to incoming request
