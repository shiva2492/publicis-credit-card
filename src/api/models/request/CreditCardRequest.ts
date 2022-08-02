import { IsNotEmpty, Validate } from 'class-validator';
import { Luhn10Validator } from '../validators/Luhn10Validator';

export class CreditCardRequest {

  @IsNotEmpty({message: 'Name is Empty'})
  public name: string;

  @IsNotEmpty({ message: 'Card Number is Empty' })
  @Validate(Luhn10Validator, {message: 'Card Number is Invalid'})
  public number: string;

  @IsNotEmpty({message: 'Card Limit is Empty'})
  public limit: number;
}