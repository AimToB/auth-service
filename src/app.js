import express from "express";

const app = express();

// middleware to parse json
app.use(express.json());

// test route
app.get("/", (req,res) => {
    res.json({msg: "Auth service is running!"});
});

export default app;