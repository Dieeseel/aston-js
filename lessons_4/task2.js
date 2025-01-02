// Привязать контекст объекта:
// const obj = { item: 'some value' }
// к функции logger так, чтобы при вызове функции ${this.item} 
// имело значение - 'some value'(Привязать через bind, call, apply)

const obj = { item: 'some value' }

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

logger.apply(obj)
logger.call(obj)

const loggerObj = logger.bind(obj)
loggerObj()