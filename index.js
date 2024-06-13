

const express = require('express'); 
  
const app = express(); 
const PORT = 3000; 
  
app.get('/', (req, res)=>{ 
    res.status(200); 
    res.send("Hello Docker World"); 
}); 
  
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 
