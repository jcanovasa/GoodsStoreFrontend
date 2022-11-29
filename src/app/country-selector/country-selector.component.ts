import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})
export class CountrySelectorComponent implements OnInit {

  myData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.http.get('https://trial.mobiscroll.com/content/countries.json').subscribe((resp: any) => {
          const countries = [];
          for (let i = 0; i < resp.length; ++i) {
              const country = resp[i];
              countries.push({ text: country.text, value: country.value });
          }
          this.myData = countries;
      });
  }
}
