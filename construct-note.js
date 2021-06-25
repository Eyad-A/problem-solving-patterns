// add whatever parameters you deem necessary
function constructNote(msg, letters) {
  
  // Frequency counters 
  const msgFreq = {};
  const lettersFreq = {};

  // Build the frequency counter of msg 
  for (let char of msg) {
    msgFreq[char] = ++msgFreq[char] || 1;
  };

  // Build the frequency counter of letter 
  for (let char of letters) {
    lettersFreq[char] = ++lettersFreq[char] || 1;
  };
  
  // Compare msg frequency with letters frequency 
  for (let char in msgFreq) {
    if (!lettersFreq[char]) {
      return false;
    }
    if (msgFreq[char] > lettersFreq[char]) {
      return false;
    }    
  }  
  return true;
}


// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true