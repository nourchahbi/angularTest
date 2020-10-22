import {greet} from './greet';

describe('greet',()=>{
  it('greet test 01',()=>{
    const result = greet('nour');
    expect(result).toBe('Welcome nour');
  })
})
