import express from "express";
import {
  getEmployee,
  getEmployees,
  getRandomEmployee,
  addEmployee,
} from "#db/employees";

const app = express();
export default app;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

import employeesRouter from "#api/employees";
app.use("/employees", employeesRouter);

app.use((err, req, res, next) => {
  res.status(500).send("Sorry! Something went wrong : (");
});
