function speak(name) {
  return "Hello " + name;
}

Function.prototype.wrap = function(func) {
  // function bound to wrap, i.e. speak
  let original = this;
  return function(name1, name2) {
    return func(original, name1, name2);
  };
};

speak = speak.wrap(function(original, yourName, myName) {
  greeting = original(yourName);
  return greeting + ", my name is " + myName;
});

var greeting = speak("Mary", "Kate");

// Number one solution codewars

// extend the Function object to include a wrap instance method
Function.prototype.wrap = function(callback) {
  return callback.bind(this, this);
};
