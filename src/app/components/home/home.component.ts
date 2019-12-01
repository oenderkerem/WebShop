import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recommendation } from "../../models/Recommendation";

const loopDirectionLeft = true;
const loopDirectionRIght = false;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  recommendations: Recommendation[];

  shownRecommendationIndex: number = 0;

  constructor(private http: HttpClient) {
    this.http
      .get("assets/userComments.json")
      .subscribe(data => this.onRecommendationsLoaded(data));
  }

  ngOnInit() {}

  onRecommendationsLoaded = function(data: Object) {
    this.recommendations = data as Recommendation[];
    this.initializeRecommendations();
    this.startRecommendationLoop(loopDirectionLeft);
  };

  initializeRecommendations = function() {
    if (this.recommendations && this.recommendations.length > 0) {
      this.recommendations[0].className = "visible";
      for (let i = 1; i < this.recommendations.length; i++) {
        this.recommendations[i].className = "";
      }
    }
  };

  startRecommendationLoop = function(direction: boolean) {
    if (this.recommendations.length > 1) {
      this.recommendationsIntervalId = setInterval(() => {
        this.onRecommendationLoopTick(direction);
      }, 4000);
    }
  };

  onRecommendationLoopTick = function(direction: boolean) {
    let summand = direction ? 1 : -1;
    let tmpIndex = this.shownRecommendationIndex + summand;
    if (tmpIndex >= this.recommendations.length) {
      tmpIndex = 0;
    } else if (tmpIndex < 0) {
      tmpIndex = this.recommendations.length - 1;
    }
    this.recommendations[this.shownRecommendationIndex].className = "";
    this.recommendations[tmpIndex].className = "visible";
    this.shownRecommendationIndex = tmpIndex;
  };

  showCommentAt = function(index: number) {
    this.stopInterval();
    let currentIndex = this.shownRecommendationIndex;
    if (this.recommendations) {
      if (this.recommendations.length > currentIndex) {
        if (this.recommendations.length >= index) {
          this.recommendations[currentIndex].className = "";
          this.recommendations[index].className = "visible";
          this.shownRecommendationIndex = index;
          this.startRecommendationLoop(true);
        }
      }
    }
  };

  stopInterval = function() {
    if (this.recommendationsIntervalId) {
      clearInterval(this.recommendationsIntervalId);
    }
  };

  onRecommendationClick = function(recommendation: Recommendation) {};
}
