import { add } from './helpers';

describe('Helpers', () => {
  it('check if add 1 + 2 equals 3', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
