import { Component, OnInit } from '@angular/core';
import { PlotlyService } from '../plotly.service';
@Component({
  selector: 'app-plotly-component',
  templateUrl: './plotly-component.component.html',
  styleUrls: ['./plotly-component.component.css']
})
export class PlotlyComponentComponent implements OnInit {
constructor(private plot:PlotlyService) { }
ngOnInit(): void {
let values1: [1, 2, 3, 4];
let values2: [10, 11, 12, 13];
    this.plot.plotLine("Pie Chart Plot","piechart",values1,values2);
  }
}