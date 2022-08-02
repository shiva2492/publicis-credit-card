import { EntityRepository, Repository, getRepository } from 'typeorm';
import uuid from 'uuid';
import { CreditCard } from '../models/CreditCard';

@EntityRepository(CreditCard)
export class CreditCardRepository extends Repository<CreditCard> {

    constructor() {
        super();
    }

    public async add(creditCard): Promise<CreditCard> {
        const creditCardRepository = getRepository(CreditCard);
        creditCard.id = uuid.v1();
        return creditCardRepository.save(creditCard);
    }

    public async getAll(): Promise<CreditCard[]> {
        const creditCardRepository = getRepository(CreditCard);
        let creditCards = await creditCardRepository.find();
        return creditCards;
    }

}
