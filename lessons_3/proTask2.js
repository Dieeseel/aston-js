// Написать функцию глубокого сравнения двух объектов

const deepEqual = (obj1, obj2) => {
  let obj1Keys = Object.keys(obj1)
  let obj2Keys = Object.keys(obj2)
  
  if (obj1Keys.length !== obj2Keys.length) {
    return false
  }
  
  for (key of obj1Keys) {
    let obj1Value = obj1[key]
    let obj2Value = obj2[key]
    
    if ((typeof obj1Value === 'object' && obj1Value !== null) 
        && (typeof obj2Value === 'object' && obj2Value !== null)) {
      if (!deepEqual(obj1Value, obj2Value)) return false
    }
    
    if (typeof obj1Value !== 'object' && typeof obj2Value !== 'object' 
      && obj1Value !== obj2Value) {

      return false
    }
    
  }

  return true
}