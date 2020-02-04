import { Component, OnInit, Input } from "@angular/core";
import { Notification } from "src/app/models/models";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"]
})
export class NotificationComponent implements OnInit {
  @Input() notification: Notification;

  constructor() {}

  ngOnInit() {}
}
