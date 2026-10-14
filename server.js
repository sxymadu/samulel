import express from "express";

const app = express();

let alunos = [
    {id: 1, mome: "samuel", idade: 23},
    {id: 2, nome: "gabi", idade: 19},
    {id: 3, nome: "maria", idade: 17}
]; 

console.log(alunos);

app.get("/alunos", (req, res)=>{
    res.send(alunos);
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
}); 
