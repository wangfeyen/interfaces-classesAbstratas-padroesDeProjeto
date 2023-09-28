interface Pessoa{
    nome:string;
    idade:number;
}
class Cliente implements Pessoa{
    nome: string;
    idade: number;
}
const cliente1 :Cliente ={
    nome:"Yen",
    idade:27
}
console.log(cliente1)