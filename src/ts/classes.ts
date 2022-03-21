class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log('driving');
  }

  public stop(): void {
    console.log('stoping');
  }

  protected beep(): void {
    console.log('Beep  Beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log('driving driving');
  }

  startDrivingProcess(): void {
    this.drive();
    this.beep();
  }
}

const car = new Car(4, 'red');

const vehicle = new Vehicle('black');

// car.startDrivingProcess();
// vehicle.drive();
console.log(vehicle.color);
console.log(car.color);
