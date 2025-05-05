const express = require('express');
const app =  express();
const PORT = 4000 
app.use(express.json());

function greet(req, res){

    res.send("Good Morning")
}

function sumOf2(req, res){
   let num1 = req.body.n1 
   let num2 = req.body.n2

   let sum = +num1 + +num2;
   console.log(num1, num2, sum)
   res.send(sum)
}

app.get("/greet", greet)
app.post("/sum", sumOf2)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






