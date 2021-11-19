module.exports = [
  {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    entities: [
      'dist/modules/**/**/**/*.entity{.ts,.js}',
      'dist/modules/**/**/*.entity{.ts,.js}',
    ],
    migrations: ['dist/typeorm/migrations/**{.ts,.js}'],
    cli: {
      migrationsDir: 'src/typeorm/migrations',
    },
    synchronize: false,
    extra: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
    schema: process.env.POSTGRES_SCHEMA,
  },
];
