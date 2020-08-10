const express = require("express");

const Goal = require("../models/Goal");

exports.getGoals = (req, res, next) => {
  Goal.find((err, docs) => {
    if (err) {
      return console.log(err);
    }
    return res.json({ goals: docs });
  });
};

exports.postGoal = (req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;
  const goal = new Goal({
    title: title,
    text: text,
  });
  goal.save();
  res.json({ status: "Goal Saved..." });
};

exports.deleteGoalById = (req, res, next) => {
  const goalId = req.params.id;
  return Goal.findOneAndRemove({ _id: goalId }).then((err) => {
    if (!err) {
      return res.json({ status: `Deleted: ${goalId}` });
    }
    console.log(err);
    return res.json({ status: "Failed to delete..." });
  });
};
