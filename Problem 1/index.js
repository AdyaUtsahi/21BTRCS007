const express=require('express');
const axios=require('axios');

const windowSize=10;
class Manager{
    constructor(size){
        this.size=size;
        this.window=[];
    }
    updateWindow(n) {
        const updatedWindow = [...this.window];
        n.forEach(num => {
            if (!updatedWindow.includes(num)) {
                if (updatedWindow.length >= this.size) {
                    updatedWindow.shift();
                }
                updatedWindow.push(num);
            }
        });
        this.window = updatedWindow;
    }
    
    getMean(){
        if (this.window.length === 0) return 0;
        let total = 0;
        this.window.forEach(number => {
            total += number;
        });
        return (total / this.window.length).toFixed(2);
    }
    getWindow() {
        return this.window;
    }
}
const manager = new Manager(windowSize);
         
    








const app=express();
const port=9876;
app.listen(port,()=>{
    console.log(`App listening on ${port}`)
})