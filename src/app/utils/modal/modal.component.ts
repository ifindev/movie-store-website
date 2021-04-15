import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  data: { modalTitle: string; modalBody: any } = {
    modalTitle: 'Modal Title',
    modalBody: 'Modal Body',
  };

  @Input() modalData: { modalTitle: string; modalBody: any };
  constructor() {}

  ngOnInit(): void {}
}
