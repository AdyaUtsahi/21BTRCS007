const express=require('express');
const axios=require('axios');

const app=express();
const port=9876;
app.listen(port,()=>{
    console.log(`App listening on ${port}`)
})