function bind (context, ...args) {
    const func = this
    
    return function(...newArgs) {
      return func.apply(context, [...args, ...newArgs])
    }
}