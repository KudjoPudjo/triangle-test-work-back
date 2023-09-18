const express = require("express");
const app = express();

const cors = require("cors")




app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000"],
        optionsSuccessStatus: 200
    })
);
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static("./build"))


app.post("/send-data", (req,res)=>{
    let {radius,height,segments} = req.body
    if(radius && height && segments){
        let arr = []
        for (let i = 0;i<segments;i++){
            arr.push({
                A:{x:0,y:height,z:0},
                P:{x:radius*Math.cos((2*Math.PI) * i/segments),y:0,z:radius * Math.sin((2*Math.PI)*i/segments)},
                P1:{x:radius*Math.cos((2*Math.PI) * (i+1)/segments),y:0,z:radius * Math.sin((2*Math.PI)*(i+1)/segments)}
            })
        }
        res.json(arr)
    }else{
        res.json([])
    }
})

module.exports = app