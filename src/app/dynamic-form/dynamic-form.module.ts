import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { QuestionControlService } from './services/question-control.service';
import { QuestionService } from './services/question.service';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';

// Own feature module if lazy loading is needed in the future

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    QuestionControlService,
    QuestionService
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
