class Vehicle{
  constructor(color, numberOfWheels, engineSize){
    this.color = color;
    this.numberOfWheels = numberOfWheels;
    this.engineSize = engineSize
  }

  start(){
    console.log('engine start')
  }

  accelerator(km){
    if(km >= 10){
      console.log('engine is accelerating at a high speed');
    }else{
      console.log('accelerating is low');
      
    }
  }

  break(){
    console.log('engine is on break')
  }
}

class Car extends Vehicle{
  constructor(color, numberOfWheels, engineSize, numbersOfDoors, transmissionType,){
    super(color, numberOfWheels, engineSize)
    this.numbersOfDoors = numbersOfDoors;
    this.transmissionType = transmissionType;
  }

  openTrunk(){
    console.log('car trunk is open')
  }

  closeTrunk(){
    comsole.log('car trunk is closed')
  }
}

class Truck extends Vehicle{
  constructor(color, numberOfWheels, engineSize, cargoCapacity, typeOfCargoBed){
    super(color, numberOfWheels, engineSize)
    this.cargoCapacity = cargoCapacity;
    this.typeOfCargoBed = typeOfCargoBed
  }

  lowerCargoBed(){
    console.log('cargo bed is lowered')
  }

  raiseCargoBed(){
    console.log('cargo bed is raised')
  }
}

class motorCycle extends Vehicle{
  constructor(color, numberOfWheels, engineSize, engineType, saddleBags,){
    super(color, numberOfWheels,engineSize)
    this.engineType = engineType;
    this.saddleBags = saddleBags;
  }

  revEngine(){
    console.log('engine is reviving')
  }
}

const car1 = new Car('blue', 4, '32kg', 4, 'automatic',)

const car2 = new Car('Green', 10, '50kg', 14, 'manual',)
console.log(car1)
car1.start()
car1.openTrunk()
car1.accelerator(9)

const cars = [car1, car2];
console.log(cars);
