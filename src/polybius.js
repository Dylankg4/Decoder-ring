const polybiusModule = (function () {
  //Object with letters for values.
  const cipher = {
   11: 'a',
   21: 'b',
   31: 'c',
   41: 'd',
   51: 'e',
   12: 'f',
   22: 'g',
   32: 'h',
   42: 'i/j',
   52: 'k',
   13: 'l',
   23: 'm',
   33: 'n',
   43: 'o',
   53: 'p',
   14: 'q',
   24: 'r',
   34: 's',
   44: 't',
   54: 'u',
   15: 'v',
   25: 'w',
   35: 'x',
   45: 'y',
   55: 'z'
 }

 //turn the object into an array with each value and key turning into a string.
  let cipArr = Object.entries(cipher)
  cipArr.push([42, 'i'])
  cipArr.push([42, 'j'])
  
 function polybius(input, encode = true) {
   //Empty strings to put other strings into.
   let answer = ''
   let key = ''
   //Get rid of spaces in input
   const newInp = input.replace(' ', '')
   const num = newInp.length
   //check if input is even and return false if not.
    if (!encode && num % 2 !== 0) {
     return false
   }
    for(let i=0; i<input.length; i++){
      //If encode is not true check what type input variable is and push it in or
      //push individual string then loop through again pushing in the next.
      //Finally match the key variable with the cipher and return a string.
     if(!encode){
       if(input[i] === ' '){
        answer += input[i]
       }else if(key.length > 0){
           key += input[i]
           answer += cipher[parseInt(key)]
           key = ''
         } else{
           key += input[i]
         }
         //If encoding is true push input into key and check if it is not a letter.
       } else{
         key = input[i]
       if (key === ' ') {
         answer += key
         continue
       }
       //filter through the object that had been turned into an array.
       //match the key with something in the array and add it to the answer.
       const encoded = cipArr.filter(subArr => subArr.includes(key))[0]
       answer += encoded[0]
     }
        }
   return answer
 }

 return {
   polybius,
 };
})();

module.exports = { polybius: polybiusModule.polybius };

