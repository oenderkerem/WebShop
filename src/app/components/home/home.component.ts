import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recommendation } from "../../models/Recommendation";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

const defaultLoopDirection = true;
const loopDirectionToLeft = true;
const loopDirectionToRight = false;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("fadeIn", [
      state(
        "show",
        style({
          opacity: 1
        })
      ),
      state(
        "hide",
        style({
          opacity: 0
        })
      ),
      transition("show => hide", [animate("1000ms")]),
      transition("hide => show", [animate("1000ms")])
    ])
  ]
})
export class HomeComponent implements OnInit {
  recommendations: Recommendation[];
  shownRecommendationIndex: number = 0;
  shownRecommendation: Recommendation = {
    className: "hidden",
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
      }, 4000);
    }
  };

  onRecommendationLoopTick = function(loopDirection: boolean) {
    if (this.recommendations) {
      let border = this.recommendations.length;
      let currentIndex = this.shownRecommendationIndex;
      let summand = loopDirection ? 1 : -1;
      let index = currentIndex + summand;
      if (index < 0 || index >= border) {
        index = index < 0 ? border - 1 : 0;
      }
      this.shownRecommendationIndex = index;
      this.shownRecommendation.className = "hidden";
      this.recommendations[currentIndex].className = "hidden";
      this.recommendations[index].className = "shown";
      this.shownRecommendation = this.recommendations[index];
    }
  };

  onRecommendationPointClick = function(index: number) {
    this.stopInterval();
    this.showCommentAt(index);
    this.startRecommendationLoop(defaultLoopDirection);
  };

  showCommentAt = function(index: number) {
    if (this.recommendations) {
      if (index >= 0 && index < this.recommendations.length) {
        this.recommendations[this.shownRecommendationIndex].className =
          "hidden";
        this.shownRecommendation = this.recommendations[index];
        this.recommendations[index].className = "shown";
        this.shownRecommendationIndex = index;
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
