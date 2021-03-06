const path = require('path');

const compiler = require('./compiler');

describe('extend', () => {
  test('should generate correct code', async () => {
    const stats = await compiler('fixtures/extend.njk', {
      root: path.resolve(__dirname, 'fixtures'),
    });
    const output = stats.toJson().modules[0].source;

    expect(output).toMatchSnapshot();
  });
});
