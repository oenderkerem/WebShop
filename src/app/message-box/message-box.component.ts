import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "app-message-box",
  templateUrl: "./message-box.component.html",
  styleUrls: ["./message-box.component.css"],
})
export class MessageBoxComponent implements OnInit {
  @Output() leftHandler = new EventEmitter();
  @Output() rightHandler = new EventEmitter();
  @Output() closeHandler = new EventEmitter();
  @Input() message: string;
  @Input() leftButtonText: string;
  @Input() rightButtonText: string;
  @Input() title: string;

  constructor() {}

  ngOnInit() {}

  onLeftButtonClick() {
    this.leftHandler.emit();
  }

  onRightButtonClick() {
    this.rightHandler.emit();
  }

  onCloseButtonClicked() {
    this.closeHandler.emit();
  }
}
