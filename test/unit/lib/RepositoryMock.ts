import { throws } from 'assert';

export class RepositoryMock<T> {

    public one: T;
    public list: T[];

    public getAllMock = jest.fn();
    public saveMock = jest.fn();

    public getAll(): Promise<T[]> {
        this.getAllMock();
        return Promise.resolve(this.list);
    }

    public add(value: T, ...args: any[]): Promise<T> {
        this.saveMock(value, args);
        if (!value) {
            throw new Error('Validation Issue');
        }
        return Promise.resolve(value);
    }

}
