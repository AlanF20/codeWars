
// function that works but ill try another 
function solution(number){
    let acc = 0 ;
    for(let i = 0; i < number; i++){
      if( i % 3 == 0 || i % 5 == 0){
        acc += i;
     }
  }
  return acc;
}
console.log(solution(10));