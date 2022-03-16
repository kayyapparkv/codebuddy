// level {1/2/3}
// level 3

// 1 question
const user = {
    name: "Elie",
    job: "Instructor",
    workDetails: {
        type: "Part Time",
        hours: "40 hours"
    },
    educationQualifications: [
        {
            name: "Full Stack",
            type: "Certification"
        },
        {
            name: "Javascript",
            type: "Certification"
        }
    ]
}

function upperCase(user) {
    if (typeof user !== 'object' || !Object.keys(user).length) {
        return;
    }
    Object.keys(user).forEach(key => {
        if (typeof user[key] === 'string') {
            user[key] = user[key].toUpperCase();
        } else {
            upperCase(user[key]);
        }
    })
}

// 2nd question

function keyValue(a) {
    const mainObject = {};
    const commaArray = a.split(',');
    commaArray.forEach(ary => {
        let temp = ary.split(':');
        if (temp[0] in mainObject) {
            mainObject[temp[0]] = Number(mainObject[temp[0]]) + Number(temp[1]);
        } else {
            mainObject[temp[0]] = Number(temp[1]);
        }
    });
    return mainObject;
}

// 3rd question

exp = "{[(}})]}"

function evaluate(exp) {
    if (exp.length % 2 !== 0) {
        console.log('not valid');
    }
    expArray = exp.split('');
    const mainArray = [];
    const lefties = ['{', '[', '('];
    const righties = ['}', ']', ')']
    let flag = true;
    for (const str of expArray) {
        if (lefties.includes(str)) {
            mainArray.push(righties[lefties.indexOf(str)]);
        }
        if (righties.includes(str)) {
            const elem = mainArray.pop();
            if (elem !== str) {
                flag = false;
                console.log('not valid');
                break;
            }
        }
    }
    if (flag) {
        console.log('valid');
    }
}
