import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {
  dataSource : any;
  displayedColumns: string[] = ['id', 'model', 'qty', 'qty change','actions'];
  carForm!: FormGroup;


  constructor(private carService: CarService){
    this.dataSource = new MatTableDataSource(carService.cars)
  }  

  ngOnInit(): void {
    this.carForm = new FormGroup({
      id: new FormControl('',Validators.required),
      model: new FormControl('',Validators.required),
      qty: new FormControl('',[Validators.required,Validators.pattern(/^\d+$/)]),
      qtyChange: new FormControl('',Validators.required)
    });
}
onAddSubmit(){
  if(this.carForm.valid){
    this.carService.addCar(this.carForm.value);
    this.dataSource = new MatTableDataSource(this.carService.cars)
    console.log(this.carForm.value)    
  }
}

onRemoveSubmit(){
  this.carService.removeCar();
  this.dataSource = new MatTableDataSource(this.carService.cars)
  console.log(this.dataSource);
}
}
