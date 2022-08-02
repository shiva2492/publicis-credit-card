import * as nock from 'nock';
import request from 'supertest';
import { runSeeder } from 'typeorm-seeding';
import { CreateCreditCards } from '../utils/createCreditCard';
import { CreditCard } from '../../../src/api/models/CreditCard';
import { closeDatabase } from '../../utils/database';
import { BootstrapSettings } from '../utils/bootstrap';
import { prepareServer } from '../utils/server';

describe('/api/credit-card', () => {

    let creditCard: CreditCard;
    let settings: BootstrapSettings;

    // -------------------------------------------------------------------------
    // Setup up
    // -------------------------------------------------------------------------

    beforeAll(async () => {
        settings = await prepareServer({ migrate: true });
        creditCard = await runSeeder<CreditCard>(CreateCreditCards); // Password = name
    });

    afterAll(async () => {
        nock.cleanAll();
        await closeDatabase(settings.connection);
    });

    // -------------------------------------------------------------------------
    // Tests
    // -------------------------------------------------------------------------

    test('GET: / should return a list of users', async (done) => {
        const response = await request(settings.app)
            .get('/api/credit-card')
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body.length).toBe(1);
        done();
    });

    test('POST / should add a credit card', async (done) => {
        await request(settings.app)
            .post(`/api/credit-card`)
            .send({
                name: 'test',
                limit: 1,
                number: '371449635398431'
            })
            .expect('Content-Type', /json/)
            .expect(201);

        done();
    });

});
