import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class MapService {
  alert : String;
  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();
  constructor() { 
    this.alert = "";
  }
  
  changeMessage(message: string) {
    this.messageSource = new BehaviorSubject<string>(message);
  }

  newMessage(message : String)
  {
    this.alert = message;
  }

  getNewMessage()
  {
    return alert;
  }
}