import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  formData: PaymentDetail = new PaymentDetail();
  readonly baseURL = 'http://localhost:58575/api/PaymentDetails';
  list : PaymentDetail[];

  constructor(private http: HttpClient) { }

  //Post Method 
  postPaymentDetail(){
    return this.http.post(this.baseURL,this.formData);
  }

  //Update Method
  putPaymentDetail(){
    return this.http.put('${this.baseURL}/${this.formData.paymentDetailId}',this.formData);
  }

  //Delete method
  deletePaymentDetail(id : number){
    return this.http.delete('${this.baseURL}/${id}');
  }

  //RefreshList method
  refreshList(){
   this.http.get(this.baseURL).toPromise()
   .then(res=> this.list= res as PaymentDetail[]);
  }

}
