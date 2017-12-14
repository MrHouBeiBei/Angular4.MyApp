export class Test{
    id: number = 6;
    age: number;
    sex: string;
    constructor(a:string){
        this.sex = a;   
        this.age = this.count();
    }
    
    count(): number{
        return 1+1;
    };

    add(){
        return this.count();
        // this.age = this.count();
    }
}