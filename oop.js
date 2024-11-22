//inheritance 

class animal{
    constructor(name){
        this.name = name 
    }

    voice(){
        console.log(`kire ${this.name}`);
        
    }
}

class dog extends animal{
    constructor(name,color){
        super(name)
        this.color = color
    }
    voice(){
        
        super.voice()
        console.log("valo asos");
        console.log(`${this.color}`);
        
        
    }
}

const kutta = new dog("golden","black")
kutta.voice()



//encapsulation

class triangle{
    constructor(width,height){
        this.width = width
        this.height = height
    }

    set width(newWidth){
        if(newWidth>0){
            this._width = newWidth
        }
        else{
            console.error("width must be positive number");
            
        }
    }

    set height(newHeight){
        if(newHeight>0){
            this._height = newHeight
        }
        else{
            console.error("height must be a positive number");
            
        }
        
    }

    get width(){
        return this._width
    }

    get height(){
        return this._height
    }

    get areas(){
        return .5 * this._width *this._height
    }

}

const area = new triangle(3,4)

area.width = 5 // can update
area.height = 6

console.log(area.width);
console.log(area.height);
console.log(area.areas);

