function validParentheses(parens) {
    let open=0;
    for(let i = 0; i < parens.length; i++){
        if(parens[i] == '(') open++;
        if(parens[i] == ')') open--;
        if(open < 0) return false;
    }
    return open == 0;
  }

console.log(validParentheses('()'));
console.log(validParentheses(")(()))"));
console.log(validParentheses("(" ));
console.log(validParentheses("(())((()())())"));
console.log(validParentheses(")()()()("))