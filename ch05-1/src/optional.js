function getAge(o) {
    return o ? o.age : 0;
}
console.log(getAge(undefined));
console.log(getAge(null));
console.log(getAge({ age: 32 }));
