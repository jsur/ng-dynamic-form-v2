import { Injectable }       from '@angular/core';
import { QuestionBase, QuestionGroup }     from '../models/question-base';

@Injectable()
export class QuestionService {

 getQuestions(): QuestionGroup<Object> {

    // Here we would make http req to Openl

  let group: QuestionGroup<any> = {

    /*questionGroupType: 'secondSetOfQuestions',
    questions: [
      {
        type: 'text',
        key: 'bloodPressure',
        label: 'Blood pressure',
        required: true,
        order: 0
      },      
    ]*/

    questionGroupType: 'personalInfo',
    questions: [
      
      {
        type: 'text',
        key: 'firstName',
        label: 'First name',
        required: true,
        order: 0
      },
  
      {
        type: 'dropdown',
        key: 'favoritefood',
        label: 'Favorite food',
        required: false,
        order: 1,
        options: [
          { key: 'pizza', value: 'Pizza' },
          { key: 'sushi', value: 'Sushi' },
          { key: 'icecream', value: 'Ice Cream' }
        ]
      },
  
      {
        type: 'text',
        key: 'lastName',
        label: 'Last name',
        required: false,
        order: 2
      },
  
      {
        type: 'radio',
        key: 'gender',
        label: 'Gender',
        required: false,
        order: 3,
        options: [
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' }
        ]
      },
  
     ]
  }

   group.questions.sort((a, b) => a.order - b.order);
   return group;
 }

}