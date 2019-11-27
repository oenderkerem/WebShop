import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-social-media-icon-link",
  templateUrl: "./social-media-icon-link.component.html",
  styleUrls: ["./social-media-icon-link.component.css"]
})
export class SocialMediaIconLinkComponent implements OnInit {
  constructor() {}

  @Input() link: string;
  @Input() assetSource: string;

  imageSource: String = "../../src/assets/";

  ngOnInit() {
    //console.log(this.assetSource);
    this.imageSource += this.assetSource;
    console.log("link to file", this.imageSource);
  }
}
