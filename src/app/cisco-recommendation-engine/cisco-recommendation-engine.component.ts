import { Component, OnInit } from '@angular/core';
import { QuestionaryService } from 'src/app/services/questionary.service';

@Component({
  selector: 'app-cisco-recommendation-engine',
  templateUrl: './cisco-recommendation-engine.component.html',
  styleUrls: ['./cisco-recommendation-engine.component.css']
})
export class CiscoRecommendationEngineComponent implements OnInit {
    modelSelectorQuestions :any = [];
    wifiSelectorQuestions :any = [];

  constructor(private questionary: QuestionaryService) { }

  ngOnInit(): void {
    this.wifiSelectorQuestions = this.loadQuestions(1);
    this.modelSelectorQuestions = this.loadQuestions(2);
  }

  loadQuestions(dataSet: number): void {
      console.log(this.wifiSelectorQuestions,"WIFI",this.modelSelectorQuestions,"Model")
    return  this.questionary.getQuestions(dataSet);
}
 

    steps = ["Wi Fi Selector", "Model Selector", "Pricing", "Consult Sales"];

   
}
