import { Body, Get, JsonController, OnUndefined, Param, Post, Put, QueryParam, HttpCode
} from 'routing-controllers';

import { PolicyNotFoundError } from '../errors/PolicyNotFoundError';
import { CreditCard } from '../models/CreditCard';
import { CreditCardRequest } from '../models/request/CreditCardRequest';
import { CreditCardService } from '../services/CreditCardService';

@JsonController('/credit-card')
export class CreditCardController {

    constructor(
        private creditCardService: CreditCardService
    ) { }

    @Get('/')
    @HttpCode(200)
    public find(): Promise<CreditCard[] | undefined> {
        return this.creditCardService.findAll();
    }

    @Post('/')
    @HttpCode(201)
    public async create(
        @Body() body: CreditCardRequest
        ): Promise<any> {
        return this.creditCardService.create(body);
    }

}
