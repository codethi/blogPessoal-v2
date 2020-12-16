import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  @Input() msg: string
  @Input() type = 'success'

  constructor(
    public modal: BsModalRef
  ) { }

  ngOnInit() {
  }

  close(){
    this.modal.hide()
  }

}
