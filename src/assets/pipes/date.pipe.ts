import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class DatePipe implements PipeTransform {

  transform(value: string, inputFormat: string): any {
    let datetimeStr = value;

    if (inputFormat === 'YYYY-MM-DD 00:00:00.0') datetimeStr = datetimeStr.replace(' ', 'T');

    const date = new Date(datetimeStr);

    const localeString = date.toLocaleDateString('en-GB', { timeZone: 'UTC' })

    if (localeString === 'Invalid Date') return value
    return localeString;
  }

}
