import {Factory, times, Seeder} from 'typeorm-seeding';
import { Connection } from 'typeorm/connection/Connection';

import { CreditCard } from '../../api/models/CreditCard';

export class CreateCreditCards implements Seeder {

    public async fetchCreditCards(): Promise<CreditCard[]> {

        const response = [{
            "id": "unique-id-1",
            "name": "Shiva",
            "number": "123456789123455",
            "limit": 12312312321.123213
        }];
        return response;
    }

    public async run(factory: Factory, connection: Connection): Promise<void> {
        const em = connection.createEntityManager();
        const creditCards: any[] = await this.fetchCreditCards();
        await times(creditCards.length, async (n) => {
            const creditCard = new CreditCard();

            creditCard.id = creditCards[n].id;
            creditCard.name = creditCards[n].name;
            creditCard.number = creditCards[n].number;
            creditCard.limit = creditCards[n].limit;
            return await em.save(creditCard);
        });
    }

}
