import { FormControl } from '@angular/forms';

export function restrictedWords(words: string[]) {
  return (control: FormControl): {[key: string]: any} => {
    const invalidWords = words
    .map(word => control.value.includes(word)? word : null)
    .filter(word => word != null)

    return invalidWords.length ? { 'restrictedWords': invalidWords.join(', ') } : null;
  }
}