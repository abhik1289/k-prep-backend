const express = require("express");
// import { required } from 'nodemon/lib/config';
const dotenv = require("dotenv")  // this is dotenv
dotenv.config();
const app = express();

const PORT = process.env.PORT;
var cors = require('cors')






require("../db/connection");
const authRouter = require("../routers/auth.router");
const noteRoutes = require("../routers/note.router");



const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};

// app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.get("/", (req, res) => res.send("Express on Vercel by Abhik"));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/notes", noteRoutes);



app.listen(PORT, () => {
    console.log("Serving running successfully", PORT)
})
