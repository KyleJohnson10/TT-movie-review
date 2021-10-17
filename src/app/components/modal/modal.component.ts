import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalActive = false
  @Input() overlay = false
  @Output() toggleModal = new EventEmitter()

  constructor() {
  }

  ngOnInit() {
    console.log(this.modalActive);
  }

  toggleModalClick() {
    this.modalActive = !this.modalActive
    this.toggleModal.emit()
  }
}
