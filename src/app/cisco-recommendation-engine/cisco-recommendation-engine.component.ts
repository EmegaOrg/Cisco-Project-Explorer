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
    return  this.questionary.getQuestions(dataSet);
}
 

steps = ["Refresh Selector", "Model Selector", "Pricing", "Consult Sales"];

formLables = ["First Name",
    "Last Name",
    "Job Title",
    "Country",
    "Company Name",
    "Business Email",
    "Business Phone",
    "Cisco Partner CCO ID (if you have one)",
    "Preferred Distributor or Partner (if any)",
    "You can freely leave a message here."];

   
}
