import { Component } from '@angular/core';


@Component({
  selector: 'app-resource-adding',
  templateUrl: './resource-adding.component.html',
  styleUrls: ['./resource-adding.component.scss'],
})
export class ResourceAddingComponent {
  isShownTimeCounter: boolean = false;
  isShowReservationCounter: boolean = false;
  imgUrl: any = '../../../assets/Image-100.png';
  constructor(){}

  ngOnInit(): void {

  }
  showTimeCounter(ser: any) {
    if (ser.id == 'flexRadioDefault2') {
      this.isShownTimeCounter = true;
    } else if (ser.id == 'flexRadioDefault1') {
      this.isShownTimeCounter = false;
    }
  }
  showReservationCounter(ser: any) {
    if (ser.id == 'flexRadioDefault4') {
      this.isShowReservationCounter = true;
    } else if (ser.id == 'flexRadioDefault3') {
      this.isShowReservationCounter = false;
    }
  }

  imgUpload(e: any) {
    let reader = new FileReader();
    if (e.target.files && e.target.files.length > 0) {
      let file = e.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgUrl = reader.result;

      };
    }
  }
}
