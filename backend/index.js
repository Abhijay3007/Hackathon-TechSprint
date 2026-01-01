import express from "express";
import cors from "cors";
import { db } from "./firebase.js";
import { classifyComplaint } from "./gemini.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/complaint", async (req, res) => {
  const ai = await classifyComplaint(req.body.description);

  await db.collection("complaints").add({
    ...req.body,
    ...ai,
    status: "pending",
    createdAt: new Date()
  });

  res.send({ success: true });
});

app.listen(5000, () => console.log("Backend running"));
