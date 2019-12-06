import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { link } from "fs";

const defaultLoopDirection = true;
const loopDirectionToLeft = true;
const loopDirectionToRight = false;

type Recommendation = {
  active: boolean;
  comment: string;
  site: string;
  url: string;
};

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("fade", [
      transition("void => *", [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  recommendations: Recommendation[];
  recommendationIndex: number = 0;
  recommendationClass: string = "visible";
  recommendationToShow: Recommendation = {
    active: true,
    comment: "",
    site: "",
    url: ""
  };

  constructor(private http: HttpClient) {
    this.http
      .get("assets/userComments.json")
      .subscribe(data => this.onRecommendationsLoaded(data));
  }

  ngOnInit() {}

  onRecommendationsLoaded = function(data: Object) {
    this.recommendations = data as Recommendation[];
    this.initializeRecommendation();
    this.startRecommendationLoop(loopDirectionToLeft);
  };

  initializeRecommendation = () => {
    this.showCommentAt(0);
  };

  startRecommendationLoop = function(loopDirection: boolean) {
    if (this.recommendations.length > 1) {
      this.recommendationsIntervalId = setInterval(() => {
        this.onRecommendationLoopTick(loopDirection);
      }, 5000);
    }
  };

  onRecommendationLoopTick = function(loopDirection: boolean) {
    if (this.recommendations) {
      this.recommendationClass = "";
      setTimeout(() => {
        let summand = loopDirection ? 1 : -1;
        let index = this.recommendationIndex + summand;
        this.showCommentAt(index);
        this.recommendationClass = "visible";
      }, 1000);
    }
  };

  onRecommendationPointClick = function(index: number) {
    this.stopInterval();
    this.showCommentAt(index);
    this.startRecommendationLoop(defaultLoopDirection);
  };

  showCommentAt = function(index: number) {
    let position = index;
    if (this.recommendations) {
      if (index < 0) {
        position = this.recommendations.length - 1;
      } else if (index >= this.recommendations.length) {
        position = 0;
      }
      this.recommendations[this.recommendationIndex].active = false;
      this.recommendations[position].active = true;
      this.recommendationToShow = this.recommendations[position];
      this.recommendationIndex = position;
    }
  };

  stopInterval = function() {
    if (this.recommendationsIntervalId) {
      clearInterval(this.recommendationsIntervalId);
    }
  };

  onRecommendationClick = function(recommendation: Recommendation) {};

  onRecommendationArrowClick = function(direction: boolean) {
    this.stopInterval();
    let index = this.recommendationIndex;
    if (direction) {
      index = index + 1;
    } else {
      index = index - 1;
    }
    this.showCommentAt(index);
    this.startRecommendationLoop(direction);
  };
}
