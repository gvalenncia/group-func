const group = require('./../src/group')

test('should return an empty object when getting empty list as parameter', () => {
    let outcome = group.groupBy([])
    expect(outcome).toEqual({});
});