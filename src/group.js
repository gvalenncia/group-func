const R = require('ramda');

module.exports.groupListByDate = function (input) {
    if(input && input.length>0) {
        let sInput = R.sortWith([R.ascend(R.prop(0)), R.ascend(R.prop(1))], input);
        let gsInput = R.groupWith((a, b) => a[0] === b[0], sInput);

        const groupDates = (acc, array) => acc.concat({stripe: array[0][1], value: array[0][3]});
        const fnKey = (array) => array[0][0];
        let rgsSinput = R.reduceBy(groupDates, [], fnKey, gsInput);

        console.log(rgsSinput);

        return {};
    } else {
        return {};
    }
}