import { Portfolio } from '../src/portfolio';

describe('Portfolio', function() {
  let params = {};
  let portfolio = new Portfolio(params);

  beforeEach(function() {

  });

  afterEach(function() {

  });


  it('should create a new portfolio object and provide a name', function() {
    expect(portfolio.name).toEqual('Primary');
  });


});
