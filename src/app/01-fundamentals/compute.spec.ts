import {compute} from './compute';

describe('compute',()=>{
  it('test name',()=>{
    const result=compute(-1);
    expect(result).toBe(0);
  })
})
