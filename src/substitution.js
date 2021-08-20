
const substitutionModule = (function () {
  //Helper function to test if the alphabet given is exactly 26 characters
  //and if the alphabet given is not undefined
  function isValid(alpha) {
  return alpha && alpha.length == 26 &&
    (new Set(alpha)).size == 26
}
function substitution(input, alphabet, encode = true) {
  //alphabet with lower and uppercase so toLowerCase does not need to be used.
  const trueAlpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //calling helper function.
  if(!isValid(alphabet)) return false

  let answer = ''
  //in loop checking if encode is true or false.
  for(let i=0; i<input.length; i++){
    if(encode){
      //checking if idividual input characters are not included it the alphabet variable (not alphabet argument) and adding to the answer if they are not.
        if (!trueAlpha.includes(input[i])){
          answer += input[i]
          continue
        } else{
          let newAns = trueAlpha.indexOf(input[i].toLowerCase())
          answer += alphabet[newAns]
        }
    } else {
      //checking for spaces in input
      if (input[i] === ' '){
          answer += input[i]
          continue
        }  
        //creating a variable that finds lines up an input character with the alphabet arg and
        //adds the equivalent index character to the answer.
         const newAlph = alphabet.indexOf(input[i])
          answer += trueAlpha[newAlph]
  };
};
  return answer;
}
return {
  substitution,
};
})();

module.exports = { substitution: substitutionModule.substitution };
