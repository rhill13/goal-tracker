const express = require("express");

const goalsController = require("../controllers/goals-controller");

const router = express.Router();

// GET /goals
router.get("/goals", goalsController.getGoals);

// POST /new-goal
router.post("/new-goal", goalsController.postGoal);

// DELETE /delete-goal/:id
router.delete("/delete-goal/:id", goalsController.deleteGoalById);

module.exports = router;
