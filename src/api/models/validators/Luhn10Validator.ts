import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'Luhn10Validator', async: false })
export class Luhn10Validator implements ValidatorConstraintInterface{

  public validate(cardNumber: string): boolean {
       let digit: number = 0;
      let sum: number = 0;
      let length: number = cardNumber.length;
      let odd: boolean = false;

      for (let i: number = (length - 1); i >= 0; i--)
      {
          digit = parseInt(cardNumber[i], 10) | 0;

          if (odd === true)
          {
              digit = digit * 2 | 0;
          }
          if (digit > 9)
          {
              digit = digit - 9;
          }
          odd = !odd;
          sum += digit;
      }
      let res: number = sum % 10;
      if (res === 0)
      {
          return true;
      }
      return false;
  }

  public defaultMessage(): string{
    return 'Card number is not valid.'
  }

}