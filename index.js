const app = require("./app");

const port = process.env.PORT?process.env.PORT:9000



app.listen(port,()=>{
    console.log("Сервер запущен");
})


