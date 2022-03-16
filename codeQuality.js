// level {1/2/3}
// level 3

const getUser = async (users) => {
    if (!users || !users.length) {
        return;
    }
    return array = users.map((user, index) => ({
        user,
        id: index
    }));
}