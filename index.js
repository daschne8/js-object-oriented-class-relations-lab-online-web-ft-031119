let trip = {drivers:[], passengers:[]}
driverId = 0
class Driver{
  constructer(name){
    this.name = name
    this.id = ++driverId
    trip.drivers.push(this)
  }
}
passengerId = 0
class Passenger{
  constructer(name){
    this.name = name
    this.id = ++passengerId
    trip.passengers.push(this)
  }
}
