import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'; //syntax -preferred

const app = express();

//configuration of cors and cookieParser
// app.use(cors()) //most basic and isme ho v jata h-- but there's way more in it to learn.

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))
app.use(express.static("public"))
app.use(cookieParser())

// export default app;
export { app }; //both default and this method is same thing