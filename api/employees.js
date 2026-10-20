import express from "express";
const router = express.Router();
export default router;

import { getEmployees, getEmployee, getRandomEmployee } from "#db/employees";

router.get("/employees", (req, res) => {
  const employees = getEmployees();
  res.send(employees);
});

// Note: this middleware has to come first! Otherwise, Express will treat
// "random" as the argument to the `id` parameter of /employees/:id.
router.get("/employees/random", (req, res) => {
  const employee = getRandomEmployee();
  res.send(employee);
});

router.get("/employees/:id", (req, res) => {
  const { id } = req.params;

  // req.params are always strings, so we need to convert `id` into a number
  // before we can use it to find the employee
  const employee = getEmployee(+id);

  if (!employee) {
    return res.status(404).send(`Employee #${id} not found.`);
  }

  res.send(employee);
});
