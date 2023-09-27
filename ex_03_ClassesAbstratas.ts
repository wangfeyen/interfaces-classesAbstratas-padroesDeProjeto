abstract class FigurasGeometricas{
    constructor(nome:string){}
    abstract area():number;
}
class Quadrado extends FigurasGeometricas{
    constructor(nome:string,private base:number,private altura:number){
        super(nome);
    };
    area():number {
        return this.base*this.altura
    }
}
const qdd1= new Quadrado("quadrado",10,5);
console.log(qdd1.area)