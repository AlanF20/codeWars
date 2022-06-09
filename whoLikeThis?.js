const likes = (names) =>{
    let likes;
    if(names.length == 0) return likes = 'no one likes this';
    if(names.length == 1) return likes = `${names[0]} like this`;
    if(names.length == 2) return likes = `${names[0]} and ${names[1]} like this`
    if(names.length == 3) return likes = `${names[0]}, ${names[1]} and ${names[2]} like this`
    if(names.length >= 4) return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
}

console.log(likes([]))
console.log(likes(['Alan']));
console.log(likes(['Alan', 'Jaqueline']));
console.log(likes(['Alan', 'Jaqueline', 'Felipe']));
console.log(likes(['Alan', 'Jaqueline', 'Felipe', 'Andy']));
console.log(likes(['Alan', 'Jaqueline', 'Felipe', 'Andy', 'XD']));