import { CreditCard } from '../../../src/api/models/CreditCard';
import { CreditCardService } from '../../../src/api/services/CreditCardService';
import { LogMock } from '../lib/LogMock';
import { RepositoryMock } from '../lib/RepositoryMock';

describe('CreditCardService', () => {

    test('Find should return a list of credit cards', async (done) => {
        const log = new LogMock();
        const repo = new RepositoryMock();
        const cc = new CreditCard();
        cc.id = '1';
        cc.name = 'John';
        cc.limit = 10.01;
        cc.number = '371449635398431';
        repo.list = [cc];
        const creditCardService = new CreditCardService(repo as any, log);
        const list = await creditCardService.findAll();
        expect(list[0].name).toBe(cc.name);
        done();
    });

    test('should throw error if data is not valid', async (done) => {
        const log = new LogMock();
        const repo = new RepositoryMock();
        const cc = new CreditCard();
        try {
            const creditCardService = new CreditCardService(repo as any, log);
             const list = await creditCardService.create(cc);
        } catch (err) {
            console.log(err)
            expect(err.message).toBe("UNKNOWN ERROR");
        }
        done();
    });


    test.only('should throw error if credit card number is not validated by luhn 10 algo', async (done) => {
        const log = new LogMock();
        const repo = new RepositoryMock();
        const cc = new CreditCard();
        cc.id = '1';
        cc.name = 'John';
        cc.limit = 10.01;
        cc.number = '371449635398431';
        repo.list = [cc];
        try {
            const creditCardService = new CreditCardService(repo as any, log);
            const list = await creditCardService.create(cc);
        } catch (err) {
            console.log(err)
            expect(err.message).toBe("UNKNOWN ERROR");
        }
        done();
    });

});
