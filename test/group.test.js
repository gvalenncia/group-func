const group = require('../src/group')

test('should return an empty object when getting empty list as parameter', () => {
    let outcome = group.groupListByDate([]);
    expect(outcome).toEqual({});
});

test('should return an empty object when getting empty list as parameter', () => {
    let outcome = group.groupListByDate(
        [["2018-12-01", "AM", "ID123", 5000],
            ["2018-12-01", "AM", "ID545", 7000],
            ["2018-12-02", "AM", "ID545", 7000],
            ["2018-12-01", "PM", "ID545", 3000]]);
    expect(outcome).toEqual({});
});

