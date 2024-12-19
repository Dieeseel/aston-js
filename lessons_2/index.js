const getLength = (value) => {
    if (value !== null && value !== undefined) {
      if (typeof value === 'number' || typeof value === 'bigint') {
        console.log(value.toString().length)
      } else if (typeof value === 'object' && !Array.isArray(value)) {
        if (value instanceof Map || value instanceof Set) {
          console.log(value.size)
        } else if (value.hasOwnProperty(length)) {
          console.log(value.length)
        } else {
            console.log(Object.keys(value).length)
          }
      } else {
        console.log(value.length)
      }
    } else {
      console.log(0)
    }
}