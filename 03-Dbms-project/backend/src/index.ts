import express from "express";
const app = express();
import mainrouter from "./routes/index"

app.use(express.json());
app.use('/api/v1', mainrouter);

app.listen(3000, ()=>{
    console.log("Listening on 3000");
    
})