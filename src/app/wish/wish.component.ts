import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'wiwn-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      toughtInput: this.formBuilder.array([]),
    });
  }

  conditionShowButtonMake = false
  conditionShowButtonCreate = true
  clickAddWish() {
    if( this.conditionShowButtonMake == false){
      this.conditionShowButtonMake = true
    } 
    if( this.conditionShowButtonCreate == true){
      this.conditionShowButtonCreate = false
    } 
    const tought = this.formGroup.controls.toughtInput as FormArray;
    tought.push(this.formBuilder.group({
      title: '',
      description: '',
      timestamp: ""
    }));
  }

  clickRemoveAllWish() {
    const tought = this.formGroup.controls.toughtInput as FormArray;
    for(let i = 0; i < tought.length; i++){
      tought.removeAt(i)
    }
   
  }
 
  
  ngOnInit(): void {

  }


}
