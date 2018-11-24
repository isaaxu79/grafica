import { Component, OnInit } from '@angular/core';
import { EspService } from '../service/esp.services';


@Component({
  selector: 'app-root',
  templateUrl: './grafica/grafica.component.html',
  styleUrls: ['./grafica/grafica.component.css']
})
export class AppComponent implements OnInit {
  constructor(private esp: EspService){}

  title = 'graficas';
  LineChart=[];
  ngOnInit() {
    this.esp.tabla();
  }
}
