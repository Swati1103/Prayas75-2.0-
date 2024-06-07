require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

//let's tackle cors
const corsOptions = {
    origin: "http://127.0.0.1:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

//Mount the Router: To use the router in your main express app, you can mount it at a specific URL prefix
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);


const PORT = 6000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`);
    });
});