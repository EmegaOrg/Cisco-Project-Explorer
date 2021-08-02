import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QUESTIONARY_MOCK } from '../mocks/questionaryMock';

@Injectable({
  providedIn: 'root'
})
export class QuestionaryService {

  constructor() { }

  getQuestions(questionSetId: number){
    let questionValue :any = [];
     of(QUESTIONARY_MOCK.result).subscribe(
      data=>{
        const questionSet:any = data.find(x=> x.questionSetId == questionSetId );
        questionValue = questionSet.questionSetValue;
      } 
    );
    return questionValue; 
  }
}
