let data : string | number;

data=43;
data='hello';

interface Icar{
    color:string;
    model:string;
    topspeed?:number;

}
const car1 : Icar={
    color: 'Black',
    model: 'bmw'
};

const car2 : Icar={
    color:'Red',
    model:'BMW',
    topspeed:100
};

car1.color;

const multiply=(x:number,y:number) : number=>{
    return x*y;
}

const answer=(x:number,y:number):string=>{
    return (x*y).toString();
}
