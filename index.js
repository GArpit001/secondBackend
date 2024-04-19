import express from 'express'


const app = express()


app.get("/" , (req,res)=>{
    res.send("Hello World!")
})



app.listen(1110 , ()=>{
    console.log("Your Server has been Started port no. 1110  ")
})


