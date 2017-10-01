/**
 * The base form question model.
 * 
 * Possible question types:
 *  text, dropdown, radio
 * 
 */

export class QuestionGroup<T> {
  questionGroupType: string;
  questions: Array<QuestionBase<T>>;
}

export class QuestionBase<T> {
  
  key: string; // form control name
  label: string; // field label
  required: boolean; // only required validation currently
  order: number; // form field order
  type: string; // form field type
  options?: T; // options, e.g. dropdown contents, radio button values

  constructor(obj?: any) {
    this.key        = obj && obj.key        || null;
    this.label      = obj && obj.label      || null;
    this.required   = obj && obj.required   || null;
    this.order      = obj && obj.order      || null;
    this.options    = obj && obj.options    || null;
  }
}