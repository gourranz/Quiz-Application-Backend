require("dotenv").config();

require('./config/db.connection')

const {PORT}= process.env

const express = require("express")

const app = express();
const cors = require("cors")
const morgan = require("morgan")

const AuthRouter = require('./routes/AuthRouter')
const quizRouter = require('./routes/quiz')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors()); 
app.use(morgan("dev"));

app.use('/auth', AuthRouter)
app.use('/quiz', quizRouter)


app.get ("/", (req, res) => {
    res.send("Hello World!")
})


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))