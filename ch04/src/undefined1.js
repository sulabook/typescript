function getName(o) {
    return o ? o.name : 'unknown name';
}
var n = getName(undefined);
console.log(n);
console.log(getName({ name: 'Jack' }));
