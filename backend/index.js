const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
// const rateLimit = require("express-rate-limit");
// const helmet = require("helmet");

const app = express();

//Routes
const userRoute = require("./auth/auth");
const connectToDb = require("./db/sqldb");

dotenv.config();

connectToDb();

app.use(express.json());

app.use(cors({
  origin: "http://localhost:3000",
  credentials:true
}));

// requiresAuth()
app.use("/api/users/", userRoute);

// //Rate Limit
// const limiter = rateLimit({
// 	windowMs: 15 * 60 * 1000, // 15 minutes
// 	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
// 	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// })

// // Apply the rate limiting middleware to all requests
// app.use(limiter);

// // Security middleware
// app.use(helmet());


app.listen(8081, () => {
    console.log("listening");
})