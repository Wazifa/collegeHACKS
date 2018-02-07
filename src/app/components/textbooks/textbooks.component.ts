import { Component, OnInit, Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BookDataService} from '../../book-data.service';

@Component({
  selector: 'app-textbooks',
  templateUrl: './textbooks.component.html',
  styleUrls: ['./textbooks.component.css'],
  providers: [BookDataService]
})

export class TextbooksComponent implements OnInit {

  items: Observable<any[]>;
  data : any;

  constructor(private modalService : NgbModal, private bd : BookDataService) 
  {
    this.items= bd.retrieveData();
  }

  ngOnInit() {
    this.bd.deleteOldEntries();
  }

  display( item: any, modal)
  {
   this.data = item;
   this.modalService.open(modal);
  }

}
