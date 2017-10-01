import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase, QuestionGroup } from '../../models/question-base';
import { QuestionControlService } from '../../services/question-control.service';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  questionGroup: QuestionGroup<any>;
  questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  currentQuestionGroup: string;

  constructor(
    private qcs: QuestionControlService,
    private qs: QuestionService
  ) { }

  ngOnInit(): void {
    this.questionGroup = this.qs.getQuestions();
    this.currentQuestionGroup = this.questionGroup.questionGroupType;
    this.questions = this.questionGroup.questions;

    this.form = this.qcs.toFormGroup(this.questions, this.currentQuestionGroup);
    
  }

  onSubmit(): void {
    localStorage.setItem(this.currentQuestionGroup, JSON.stringify(this.form.value)); // Store form state in localstorage in case user does something weird

    this.payLoad = JSON.stringify(this.form.value);
  }

}
