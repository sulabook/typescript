function getName(o) {
    return o != undefined ? o.name : 'unknown name';
}
var n = getName(undefined);
console.log(n);
console.log(getName({ name: 'Jack' }));
