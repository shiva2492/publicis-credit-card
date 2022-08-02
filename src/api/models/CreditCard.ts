import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryColumn } from 'typeorm';


@Entity()
export class CreditCard {

    @PrimaryColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({
        name: 'number',
    })
    public number: string;

    @IsNotEmpty()
    @Column({
        name: 'limit',
    })
    public limit: number;

    @IsNotEmpty()
    @Column({
        name: 'name',
    })
    public name: string;
}
