const express = require("express")
const app = express();
const mainRouter = require("./routes/index");
const cors = require("cors")


app.use(cors({
    origin : "http://localhost:5173"
}));
app.use(express.json())
app.use('/api/v1', mainRouter);

app.listen(3000, ()=>{
    console.log("listening on 3000")
})