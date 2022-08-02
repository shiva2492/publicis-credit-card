module.exports = {

        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        entities: ["src/api/models/*{.ts,.js}"],
        synchronize: true,
        logging: true,
        seeds: ["src/database/seeds/*{.ts,.js}"]
}
