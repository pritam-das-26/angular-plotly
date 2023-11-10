import { Injectable } from '@angular/core';
declare let Plotly: any;
@Injectable({
  providedIn: 'root'
})
export class PlotlyService {
constructor() {}
plotLine(title: string, plotDiv: string, x:number[], y: number[]){           
  var trace1 = {
    x:x,
    y:y,
    mode: 'markers',
    marker: {
      size: [40, 60, 80, 100]
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Marker Size',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('plot', data, layout);
    
}

}