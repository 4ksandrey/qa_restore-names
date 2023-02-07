'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');

  it('should be declared', () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it(`should set firstName if it is undefined`, () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    const expected = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    expect(users)
      .toEqual(expected);
  });

  it(`should set firstName if it is omitted`, () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    const expected = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    expect(users)
      .toEqual(expected);
  });

  it(`shouldn't set firstName if it is existing`, () => {
    const users = [
      {
        firstName: 'Mike',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    restoreNames(users);

    const expected = [
      {
        firstName: 'Mike',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];

    expect(users).toEqual(expected);
  });

  it(`should work with an empty array`, () => {
    const users = [];

    restoreNames(users);

    const expected = [];

    expect(users).toEqual(expected);
  });

  it(`should work with 2 elements`, () => {
    const users = [
      {
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: undefined,
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    restoreNames(users);

    const expected = [
      {
        firstName: 'Jack',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        firstName: 'Mike',
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];

    expect(users).toEqual(expected);
  });
});
