const group = require('./../src/group')

test('should return an empty object when getting an empty list as parameter', () => {

    //when
    let outcome = group.groupByDateAndStripe([]);

    //then
    expect(outcome).toEqual({});
});


test('should return sorted object with 2 keys when getting an array of 4 lists', () => {
    //given
    let input = [["2018-12-01", "AM", "ID123", 5000],
        ["2018-12-02", "AM", "ID545", 7000],
        ["2018-12-01", "AM", "ID545", 7000],
        ["2018-12-01", "PM", "ID545", 3000]];
    let expected = {"2018-12-01":{"AM":12000, "PM":3000}, "2018-12-02":{"AM":7000}};

    //when
    let outcome = group.groupByDateAndStripe( input );

    //then
    expect( outcome ).toEqual( expected );
});
