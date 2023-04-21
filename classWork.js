// Classwork:
// Create a class that represents anything you like
// Create a class that extends the first class
// Create a class that extends the second class
// Make sure each class has at least one method and one piece of data unique to it
// Create an instance of the final class

class Vehicle {
    constructor(vehicleType){
        this.vehicleType = vehicleType;
    }    
    
    methodOfTransport(){
           if (this.vehicleType == 'plane') {console.log('your vehicle is an Air transport')}
         else if (this.vehicleType == 'boat') {console.log('your vehicle is a Sea transport')}
         else {console.log('your vehicle is a road transport')}
    }
}
   

class Car extends Vehicle{

constructor(vehicleType, brand){
    super(vehicleType);
    this.brand = brand;
}
showBrand(){console.log(`The brand of your car is ${this.brand}`)}
}


class Model extends Car {
    constructor(vehicleType, brand, mod) {
      super(vehicleType, brand);
      this.model = mod;
    }
    get showModel() {
      console.log(`The model of your ${this.brand} is ${this.model}`)
    }

    set showModel(newModel) {
      this.model = newModel;
    }
  }



car1= new Model('motor vehicle', 'BMW', '3 series');

car1.methodOfTransport();

car1.model='1 series';
car1.showModel;






