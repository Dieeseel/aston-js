// Скопировать объект counter всеми возможными способами;

const counter = { counter: 1}

const copyCounter = { ...counter }
const copyCounter1 = Object.assign({}, counter)
const copyCounter2 = Object.create(counter)
const copyCounter3 = JSON.parse(JSON.stringify(counter))
const copyCounter4 = structuredClone(counter)

// Копирование с помощью библиотеки lodash
// const copyCounter5 = cloneDeep(counter)