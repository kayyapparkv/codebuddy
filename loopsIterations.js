// level {1/2/3}
// level 3

const value = {
    liked: [
        { id: 1, name: "John Doe", age: 20 },
        { id: 2, name: "Jane Doe", age: 30 },
        { id: 3, name: "John Smith", age: 40 }
    ],
    disliked: [
        { id: 4, name: "Jason Doe", age: 20 },
        { id: 5, name: "Josh Doe", age: 30 },
        { id: 6, name: "Karen Smith", age: 40 }
    ],
    loved: [
        { id: 7, name: "Jasmine Doe", age: 20 },
        { id: 8, name: "Bob Doe", age: 30 },
        { id: 9, name: "Tom Smith", age: 40 }
    ]
}

const mainValue = [];

Object.keys(value).forEach(key => {
    value[key].forEach(record => {
        record.reaction = key;
        mainValue.push(record)
    })
});