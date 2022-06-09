const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials.map((tutorials)=>{
//     let space =tutorials.split(' ')
//     let capspace =space.map((mine)=>mine.charAt(0).toUpperCase() + mine.substr(1))
//     const answer = capspace.join(" ");
    
//     return answer
//   })
// }
const titleCased = () => {
  return tutorials.map((tutorial) =>
    tutorial
      .split(" ")
      .map((subString) => subString[0].toUpperCase() + subString.slice(1))
      .join(" ")
  );
};
//  spilt() separate a string into array of substring