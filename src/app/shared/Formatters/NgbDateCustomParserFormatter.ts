
import {Injectable } from '@angular/core';
import {NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class NgbDateCustomParserFormatter extends NgbDateParserFormatter{
    parse(value: string): NgbDateStruct {
        if (value) {
          const dateParts = value.trim().split('-');
          if (dateParts.length === 1 && this.isNumeric(dateParts[0])) {
            return {day: parseInt(dateParts[0]), month: null, year: null};
          } else if (dateParts.length === 2 && this.isNumeric(dateParts[0]) && this.isNumeric(dateParts[1])) {
            return {day: parseInt(dateParts[0]), month: parseInt(dateParts[1]), year: null};
          } else if (dateParts.length === 3 && this.isNumeric(dateParts[0]) && this.isNumeric(dateParts[1]) && this.isNumeric(dateParts[2])) {
            return {day: parseInt(dateParts[0]), month: parseInt(dateParts[1]), year: parseInt(dateParts[2])};
          }
        }
        return null;
      }
    
      format(date: NgbDateStruct): string {
        return date ?
            `${this.isNumeric(date.day) ? this.padNumber(date.day) : ''}-${this.isNumeric(date.month) ? this.padNumber(date.month) : ''}-${date.year}` :
            '';
      }

    isNumeric(n:any) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    padNumber(n: number){
        return new String(n).padStart(2, '0');
    }

}