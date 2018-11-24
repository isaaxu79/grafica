import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';

@Injectable()
    export class EspService{
        constructor(public afDB: AngularFireDatabase){
        }
        LineChart=[];
        public liGraf(){

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

        public tabla(){
          var lista = [];
          var dbRef=this.afDB.database.ref().child('Grafica/');
          dbRef.on('value',function(snapshot){
              lista =[];
              var datos = ['dato1', 'dato2', 'dato3'];
              lista.push(snapshot.val().dato1);
              lista.push(snapshot.val().dato2);
              lista.push(snapshot.val().dato3);
              this.LineChart = new Chart('lineChart',{
                type:'line',
                data: {
                  labels:datos,
                  datasets:[{
                    label:'number',
                    data:lista,
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
          });
  
      }
    }
   