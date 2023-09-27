import { Injectable } from '@angular/core';
import { Car } from '../interfaces/car';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars: Car[] = [];
  private carSubject$: Subject<Car[]> = new BehaviorSubject<Car[]>(this.cars);
  cars$: Observable<Car[]> = this.carSubject$.asObservable();

  constructor() {
  this.cars = [
    {id: 1, model: "Citroën C3", qty: 2.268, qtyChange: "-27%"},
    {id: 2, model: "Peugeot 208", qty: 2.107, qtyChange: "-24%"},
    {id: 3, model: "Kia Ceed/Xceed", qty: 1.750, qtyChange: "-1%"},
    {id: 4, model: "Ford Kuga", qty: 1.619, qtyChange: "-53%"},
    {id: 5, model: "Toyota Yaris", qty: 1.515, qtyChange: "-45%"},
    {id: 6, model: "VW T-Roc", qty: 1.435, qtyChange: "-7%"},
    {id: 7, model: "Mercedes-Benz C-klasse", qty: 1.361, qtyChange: "-9%"},
    {id: 8, model: "Hyundai i10", qty: 1.300    , qtyChange: "-26%"},
    {id: 9, model: "Nissan Qashqai", qty: 1.246, qtyChange: "42%"},
    {id: 10, model: "Toyota Yaris Cross", qty: 1.114, qtyChange: "100%"}
    ];
  }


  getcars() : Observable<Car[]>{
    return this.cars$;
  }

   addCar(car: Car) : void{
    this.cars.push(car);
   }

   updateCars(cars: Car[]): void {
    this.cars = cars;
  }

   removeCar(id: number) : void{
    this.cars = this.cars.filter(x => x.id !== id);
   }


}
