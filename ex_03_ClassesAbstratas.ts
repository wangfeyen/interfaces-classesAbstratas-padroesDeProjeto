abstract class FigurasGeometricas{
    constructor(public nome:string){}
    abstract area():string;
}
class Quadrado extends FigurasGeometricas{
    constructor(nome:string,private base:number,private altura:number){
        super(nome);
    };
    area():string {
        const calculoarea=this.base*this.altura;
        return `A área do ${this.nome} é ${calculoarea}`
    }
}

const qdd1= new Quadrado("quadrado",10,5);
console.log(qdd1.area())

class Circulo extends FigurasGeometricas{
    constructor(nome:string,private raio:number){
        super(nome)
    }
    area(): string {
        const calculoarea = 3.14*(this.raio)**2;
        return `A área do ${this.nome} é ${calculoarea}`
    }
}
const cculo1=new Circulo("circulo",5);
console.log(cculo1.area())