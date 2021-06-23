import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }
  public sendEmail(e: Event) {

    var data = {
      service_id: 'service_6vuf39n',
      template_id: 'template_5takruw',
      user_id: 'user_nWOgLN012xihrkG8HqheD',
      template_params: {
          'from_name': 'James',
          'to_name': 'test',
          'message':'bla'
      }
  };
    console.log(e);
    
    e.preventDefault();
    this._http.post("https://api.emailjs.com/api/v1.0/email/send", data, {headers}).subscribe(x=>{
      console.log(x);
    })
    
    
  }

}
export const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
