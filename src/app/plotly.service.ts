import { Injectable } from '@angular/core';
declare let Plotly: any;
@Injectable({
  providedIn: 'root'
})
export class PlotlyService {
constructor() { }
plotLine(title: string, plotDiv: string, x:number[], y:number[]){           
    let trace = {
      x: x,    
      y: y,   
      mode: 'markers',
      marker: {
        color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
        opacity: [1, 0.8, 0.6, 0.4],
        size: [40, 60, 80, 100]
      }
    };

    var data=[trace];
                  
    let layouts = {
      title:title,
      showlegend: true,
      responsive: true,
      useResizeHandler: true,
      autosize: true,
      width: '100%',
      height: '100%'

    };
    Plotly.newPlot(plotDiv,data, layouts);   
  }  
    
    plotPie(title: string, plotDiv: string, x: number[]) {
      let trace2 = {
        values: x,
       labels: ['Category A', 'Category B', 'Category C'],
        type: 'pie'
      };
      var data2=[trace2];
      var layout = {
        height: 400,
        width: 500
      };
    
      Plotly.newPlot(plotDiv, data2, layout);
    }
    

}