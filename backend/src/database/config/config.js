import '~/bootstrap/env';

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
  },
};
