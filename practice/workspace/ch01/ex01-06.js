//NOTE - JSON 형태

const obj3 = {
    name: 'foo',
    major: 'computer science'
};

//NOTE - 객체의 직렬화 객체를 JSON 형태로 변환
const jsonObj = JSON.stringify(obj3);
console.log(typeof jsonObj , jsonObj);

//NOTE - 객체의 역직렬화 직렬화 된 JSON 형태의 객체를 다시 객체로 변환
const parseObj = JSON.parse(jsonObj);
console.log(typeof parseObj , parseObj);

