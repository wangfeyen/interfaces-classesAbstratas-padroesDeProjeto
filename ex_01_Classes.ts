class Animal{
    nome:string;
    idade:number;
    constructor(nome:string,idade:number){
        this.nome=nome;
        this.idade=idade;
    }
}
class Cachorro extends Animal{
    raca:string;
    constructor(nome:string,idade:number,raca:string){
        super(nome,idade);
        this.raca=raca;
    }
}
const cachorro1=new Cachorro("Josh",12,"pitbull");
