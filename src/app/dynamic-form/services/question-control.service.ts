import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from '../models/question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<any>[], currentQuestionGroup: string): FormGroup {
    let group: any = {};

    questions.forEach(question => {

      let questionCurrentValue = '';

      if (localStorage.getItem(currentQuestionGroup)) {
        let localValues = JSON.parse(localStorage.getItem(currentQuestionGroup));
        questionCurrentValue = localValues[question.key];
      }
      
      group[question.key] = 
        question.required ? new FormControl(questionCurrentValue || '', Validators.required)
                          : new FormControl(questionCurrentValue || '');
    });

    return new FormGroup(group);
  }
}