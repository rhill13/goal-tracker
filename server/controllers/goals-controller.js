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
