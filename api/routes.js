import express from "express";
import { Engine } from "../core/engine.js";
import { Scaler } from "../core/scaler.js";
import { Insights } from "../core/insights.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Scalar AI API is running" });
});

router.post("/process", (req, res) => {
  const { input } = req.body;

  const processed = Engine.process(input);
  const scaled = Scaler.amplify(processed);
  const insight = Insights.generate(scaled);

  res.json({
    processed,
    scaled,
    insight
  });
});

export default router;
