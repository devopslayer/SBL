import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SBL';
  currentYear = new Date().getFullYear();

  name: any;
  amount: any;
  provider: any;
  yearEstablished: any;

  sheet = [
    {
      "year": 2020,
      "month": 12,
      "profitOrLoss": 25000,
      "assetsValue": 1234
    },
    {
      "year": 2020,
      "month": 11,
      "profitOrLoss": 1150,
      "assetsValue": 5789
    },
    {
      "year": 2020,
      "month": 10,
      "profitOrLoss": 2500,
      "assetsValue": 22345
    },
    {
      "year": 2020,
      "month": 9,
      "profitOrLoss": -1870,
      "assetsValue": 223452
    }
  ];

  balanceSheet = JSON.parse(JSON.stringify(this.sheet))[0];
  preAssessment: Number = 20;

  constructor(private service : AppServiceService) {
    
  }

  onSubmit() {
    // console.log((event.target as HTMLInputElement).value);
    console.log("Button Working!");
    console.log(this.name, this.amount, this.provider, this.yearEstablished);
    // this.service.getSheet().subscribe((response) => {
    //   console.log("Response from api", response)
    // }, (error) => {
    //   console.log("Error from api", error)
    // })
    this.preAssessment = (this.amount > this.balanceSheet.assetsValue)? 60 : 100;
    console.log(this.balanceSheet);
    alert("Name: " + this.name + "\nYear Established: " + this.balanceSheet.year + "\nSummary of Profit or Loss by the year: " + this.balanceSheet.profitOrLoss + "\nPre-Assessment Value: " + this.preAssessment)
  }

  bname(event: any) {
    this.name = event.target.value;
    // this.amount = event.target.value;
  }

  lamount(event: any) {
    this.amount = event.target.value;
  }

  aprovider(event: any) {
    this.provider = event.target.value;
  }

  eyear(event: any) {
    this.yearEstablished = event.target.value;
  }

  ngOnInit() {
    // this.onSubmit();
  }
}
