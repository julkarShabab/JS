const car = {
    car_name : "mercedes-BENZ",
    model : "AMG",
    year : 2020,
    drive(){
        console.log(`drivin a ${this.car_name} ${this.model} is a dream`);
        
    }


}

car.drive()
console.log(car.year);
car.country= "Germany"// to add/update
console.log(car);

//this is with class
class mobile {
    constructor(name,model,year){
        this.name = name
        this.model = model
        this.year = year
    }
    message(){
        console.log(`i've been using ${this.name} ${this.model} since ${this.year}`);
        
    }

}
const mobile1 = new mobile("realma",9,2022)// here weve created the object of it
mobile1.message()

//mobile.message()// can't use this directly
console.log(mobile1);



class mathutil{
    static pi = 3.1416 //static

    static getDiameter(radius){
        return radius *2
    }
}

console.log(mathutil.pi);
console.log(mathutil.getDiameter(10));

