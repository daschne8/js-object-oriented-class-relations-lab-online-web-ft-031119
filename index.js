let store = {drivers:[], passengers:[], trips:[]}
let driverId = 0
class Driver{
  constructor(name){
    this.name = name
    this.id = ++driverId
    trip.drivers.push(this)
  }
}
let passengerId = 0
class Passenger{
  constructor(name){
    this.name = name
    this.id = ++passengerId
    trip.passengers.push(this)
  }
}
