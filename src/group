const R = require('ramda');

module.exports.groupByDateAndStripe = function (input) {

    if(input && input.length>0){
        let sInput = R.sortWith([R.ascend(R.prop(0)), R.ascend(R.prop(1))], input);

        const groupDates = (acc, element) => acc.concat({key: element[1], value: element[3]});
        const fnKeyDate = (list) => list[0];
        let dates = R.reduceBy(groupDates, [], fnKeyDate, sInput);

        dates = R.map(stripes => {
            const groupStripes = (acc, stripe) => acc.concat(stripe.value);
            const fnKeyStripe = (stripe) => stripe.key;
            return R.reduceBy(groupStripes, [], fnKeyStripe, stripes);
        } ,dates);

        return R.map(stripes => R.map(key => R.sum(key), stripes), dates);
    } else {
        return {};
    }
}
