function validate(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password);
}

/*
^ Matches the beginning of a string
(?= Positive lookahead - matches a group after the main expression without including it in the result
  . Dot - Matches any character except line breaks
  * Quantifier - Match 0 or more of the preceding token
  [ Character Set - Match any character in the set
 {6, } Quantifier - Match 6 or more of the preceding token
 $ End - Matches the end of the string
*/
