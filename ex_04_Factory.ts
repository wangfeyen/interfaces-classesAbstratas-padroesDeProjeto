interface Formas{
    area():number;
    perimetro():number; 
}
class Retangulo implements Formas{
    base:number;
    altura:number;
    constructor(base:number,altura:number){
        this.base=base;
        this.altura=altura;
    }
    area():number{
        return this.base*this.altura
    }
    perimetro(): number {
        return 2*this.base + 2*this.altura;
    }
    imprimirDados(){
        console.log(` A área é: ${this.area()}`)
        console.log(` O perímetro é: ${this.perimetro()}`)
    }
}
class Circuloo implements Formas{
    raio:number;
    constructor(raio:number){
        this.raio=raio;
    }
    area(): number {
        return 3.14*this.raio**2;
    }
    perimetro(): number {
        return 2*3.14*this.raio;
    }
    imprimirDados(){
        console.log(` A área é: ${this.area()}`)
        console.log(` O perímetro é: ${this.perimetro()}`)
    }
}
function ShapeFactory(tipo:string,raio:number,base:number,altura:number):Circuloo|Retangulo{
   if(tipo==="circulo"){
    return new Circuloo(raio);
   }else{
    return new Retangulo(base,altura);
   }
}
const circulo1=ShapeFactory("circulo",5,0,0);
console.log(circulo1.imprimirDados())
const retangulo = ShapeFactory("retangulo",0,5,6);
console.log(retangulo.imprimirDados())