interface INameable {
  name: string
}

function getName(o: INameable) {
  return o ? o.name : 'unknown name'
}

let n = getName(undefined)
console.log(n)
console.log(getName({name: 'Jack'}))
