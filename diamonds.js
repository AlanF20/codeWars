const diamond = (n) =>{
    if(n % 2 == 0 || n < 0) return null;
    let asterisk = '*';
    let diamond = '';
    for(let i =0; i<n;i++){
        if(i ==0) diamond += asterisk;
        if((n/2) >= i){
            diamond += asterisk += asterisk;
        } else{
            diamond -= asterisk 
        }

    }
    return diamond;
}

console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(2));
console.log(diamond(-3));