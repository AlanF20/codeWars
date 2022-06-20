const toWeirdCase = (str) =>{
    const split = [...str].map((letra, indice)=>{
       return indice % 2 == 0 ? letra.toUpperCase() :
                                letra.toLowerCase() ;
    });
    const string = split.join('');
    return string;
};

// TODO: hacer que las primera letras de las palabras seguidas de un espacio sean tomadas como el indice 0
console.log(toWeirdCase( "String" ));// => returns "StRiNg"
console.log(toWeirdCase( "Weird string case" ));// => returns "WeIrD StRiNg CaSe"
console.log(toWeirdCase('This is a test'))