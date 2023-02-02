import { HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';


@Component({
  selector: 'app-medicine-home',
  templateUrl: './medicine-home.component.html',
  styleUrls: ['./medicine-home.component.scss']
})
export class MedicineHomeComponent implements OnInit {
  
  pincode!: string;
  isPincodeAvailable: boolean = false;
  pincodeDetails: any;

  @ViewChild('closebtn', { read: ElementRef }) closebtn!: ElementRef

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }
  getPackageDetailsByPincode() {
    if (this.pincode && this.pincode.length == 6) {
      const httpparams: HttpParams = new HttpParams()
        .set('pincode', this.pincode)
      this.http.getDetailsfromServer('pincodeDetails', httpparams).subscribe((response: any) => {
        if (response && response.length > 0) {
          this.isPincodeAvailable = true;
          this.pincodeDetails = response[0];
          // console.log( this.pincodeDetails);

          if (this.closebtn) {
            this.closebtn.nativeElement.click();

          }

        } else {
          this.isPincodeAvailable = false;
        }

      },
        error => {
          console.log(error);

        })

    }
  }

}
