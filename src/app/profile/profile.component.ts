import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public quotes;
  name = "";

  constructor(private _quoteservice: QuotesService) {
   }

  ngOnInit() {
    this.quotes = this._quoteservice.getQuotes();
  }
}