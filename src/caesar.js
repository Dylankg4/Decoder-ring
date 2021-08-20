
const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    //Empty string used for adding results later.
    let answer = "";
    //checking if shift if longer than an alphabet string and returning false if true.
    if(shift === 0 || shift > 25 || shift < -25)return false;
    
    //looping through
    for(let i = 0; i < input.length; i++){
      let num = input.toLowerCase().charCodeAt(i);
      //checks if num is greater or less than lower case alphabet character code.
      //if the character is lower or greater it will be added to answer.
         if(num > 122 || num < 97){
          answer += input.charAt(i);
          continue;
         }
      //If encode is true, add shift to num then check if it goes out of charcter code bounds
      if(encode){
      let shifted = num + shift;

      if(shifted > 122){
        shifted -= 26;
      } else if(shifted <= 96){
        shifted += 26;
      }
      //change the character code back to a string of characters and add it to the answer.
      let shiftedChar = String.fromCharCode(shifted);
      answer += shiftedChar; 
      
      //If encode is not true subtract num and shift and go through same process as true encode.
      } else{
        let shifted = num - shift;
        if(shifted > 122 ){
            shifted -= 26;
          } else {
          if(shifted < 97) {
            shifted += 26;
          }
        }
        
        let shiftedChar = String.fromCharCode(shifted);
        answer += shiftedChar;
        
      }         
    }
      return answer;
  }

  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
