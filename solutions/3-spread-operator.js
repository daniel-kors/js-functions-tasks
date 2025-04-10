// BEGIN
const convert = (...foo) => {
    if (foo.length === 0) return [];

    return foo.map(([year, month, day]) => {
        const date = new Date(year, month, day);
        return date.toDateString();
    });
};

export default convert;
// END