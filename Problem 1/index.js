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

app.use((req, res, next) => {
    res.setTimeout(500, () => {
        res.status(503).json({ error: 'Request timed out' });
    });
    next();
});
async function fetchNumbers(type) {
    const url = `https://test-server.com/api/${type}`;
    const timeout = 500;

    try {
        const response = await axios.get(url, { timeout });

        const numbers = response.data.numbers || [];
        return numbers;
    } catch (error) {
        // Log the specific error message
        console.error(`Failed to fetch numbers for type "${type}":`, error.message);

        return [];
    }
}
app.get('/numbers/:numberId', async (req, res) => {
    const { numberId } = req.params;
    const validIds = ['p', 'f', 'e', 'r'];

    if (!validIds.includes(numberId)) {
        return res.status(400).json({ error: 'Invalid number ID' });
    }

    const windowPrevState = windowManager.getWindow();

    const newNumbers = await fetchNumbers(numberId);

    windowManager.addNumbers(newNumbers);

    const avg = windowManager.getAverage();

    res.json({
        numbers: newNumbers,
        windowPrevState,
        windowCurrState: windowManager.getWindow(),
        avg,
    });
});

         
    








const app=express();
const port=9876;
app.listen(port,()=>{
    console.log(`App listening on ${port}`)
})