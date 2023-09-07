import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Day } from 'src/app/DTO/ITimeStore';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent {
  timeForm!: FormGroup;
  formValues: any;
  days!: Day[]

  constructor(private fb: FormBuilder, private translate: TranslateService) {}
  ngOnInit(): void {
    this.translate.get('days').subscribe((data: any) => {
      this.days = [
        { name: data.Saturday, isShown: true, alternative: [] },
        { name: data.Sunday, isShown: true, alternative: [] },
        { name: data.Monday, isShown: false, alternative: [] },
        { name: data.Tuesday, isShown: true, alternative: [] },
        { name: data.Wednesday, isShown: true, alternative: [] },
        { name: data.Thursday, isShown: true, alternative: [] },
        { name: data.Friday, isShown: true, alternative: [] },
      ];
    });
  }


  toggleBtn(isShown: any, name: any) {
    this.days.forEach((day) => {
      if (day.name == name) {
        day.isShown = !day.isShown;
      }
    });
  }

  addTime(name: any, start: any, end: any) {
    if (start.value != '' && end.value != '') {
      this.days.forEach((day) => {
        if (day.name == name) {
          let obj: any = { start: start.value, end: end.value };
          day.alternative.push(obj);
          start.value='';
          end.value='';
        }
      });
    }
  }
  remove(i:any,name:any){
    this.days.forEach((day)=>{
      if(day.name == name){
        day.alternative.splice(i,1)
      }
    })
  }
}
