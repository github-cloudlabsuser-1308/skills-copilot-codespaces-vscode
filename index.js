const data = [
    [{ name: 'John' }, { name: 'Jane' }],
    [{ name: 'Bob' }]
];

const names = data.flat().map(item => item.name);
console.log(names); // ['John', 'Jane', 'Bob']