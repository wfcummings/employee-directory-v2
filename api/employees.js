import express from "express";
const router = express.Router();
export default router;

import { getEmployees, getEmployee, getRandomEmployee } from "#db/employees";
