import {getCurrencies} from './getCurrencies';

describe('Currencies',()=>{
  it('currency test',()=>{
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');

  })
})
