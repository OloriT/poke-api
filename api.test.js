const axios = require('axios');
const { expect } = require('chai');

describe('API Test', () => {
  it('should return status code 200', async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    expect(response.status).to.equal(200);
  });
});
