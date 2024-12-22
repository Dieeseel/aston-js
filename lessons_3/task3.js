// Создать функцию makeCounter всеми описанными и возможными способами;

function makeCounter(counter) {
    return counter
  }
  
  const makeCounter1 = function(counter) {
    return counter
  }
  
  const makeCounter2 = counter => counter
  
  const makeCounter3 = new Function()
  
  const makeCounter4 = function makeCounter(counter) {
    return counter
  }
  
  (function (counter) {
    return counter
   })()