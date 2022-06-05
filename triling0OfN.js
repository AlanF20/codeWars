function zeros (n) {
    let fac = 1;
    for(let i = 1; i <= n; i++){
        fac = fac * i;
    }
    const array = [...fac.toString()];
    const arrayReversed = array.reverse();
    let zeros = 0;
    console.log(arrayReversed);
    for(let i = 0; i < arrayReversed.length; i++){
        if(arrayReversed[i] == 0){
            zeros++;
        }else{
            break;
        }
    }
    return zeros;
  }

console.log(zeros(5));
console.log(zeros(6));
console.log(zeros(12));
console.log(zeros(30));