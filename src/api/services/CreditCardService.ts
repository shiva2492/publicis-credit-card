import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { CreditCard } from '../models/CreditCard';
import { CreditCardRequest } from '../models/request/CreditCardRequest';
import { CreditCardRepository } from '../repositories/CreditCardRepository';

@Service()
export class CreditCardService {

    constructor(
        @OrmRepository() private creditCardRepository: CreditCardRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public findAll(): Promise<CreditCard[]> {
            this.log.info('List all the credit card records');
            return this.creditCardRepository.getAll();
    }


    public async create(creditCardRequest: CreditCardRequest): Promise<CreditCard> {
        this.log.info('Create a new credit card record');
        const creditCard = await this.creditCardRepository.add(creditCardRequest);
        return creditCard;
    }

}
