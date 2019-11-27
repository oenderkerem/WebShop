import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-customer-comment",
  templateUrl: "./customer-comment.component.html",
  styleUrls: ["./customer-comment.component.css"]
})
export class CustomerCommentComponent implements OnInit {
  constructor() {}

  @Input() shortcutSite: string;
  @Input() linkToSite: string;
  @Input() comment: string;

  ngOnInit() {}
}
