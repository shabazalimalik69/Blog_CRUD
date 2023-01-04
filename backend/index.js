require("dotenv").config();
const express = require("express")
const cors = require("cors");
const ConnectDB = require('./config/db.js');
const blogRouter = require("./routes/blogRouter")


const app = express();

app.use(cors());
app.use(express.json());

app.use('/', blogRouter);

app.get("/",(req,res)=>{
    res.send("HomePage")
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, async() =>{
    await ConnectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});