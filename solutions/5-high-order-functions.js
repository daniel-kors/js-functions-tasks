import _ from 'lodash';

// BEGIN
const takeOldest = (users, base = 1) => {
    const sortedUsers = [...users].sort((a, b) => {
        return Date.parse(a.birthday) - Date.parse(b.birthday);
    });

    return sortedUsers.slice(0, base);
};

export default takeOldest;
// END