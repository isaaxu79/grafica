import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  constructor() { }

  
  LineChart= [];
  ngOnInit() {
    this.LineChart = new Chart('lineChart',{
      type:'line',
      data: {
        labels:['Jan','Feb','Mar','April','june','july', 'Aug', 'sep','oct','nov','dec'],
        datasets:[{
          label:'number',
          data:[9,3,4,3,8,8,5,3,2,4,9,3],
          fill:false,
          lineTension:0.2,
          borderColor:"red",
          borderWidth: 1
        }]
      },
      options:{
        title: {
          text:"Line Chart",
          display:true
        },
        scales:{
          yAxes:[{
            ticks:{
              beginAtZero:true
            }
          }]
        }
      }
    });
  }
}
