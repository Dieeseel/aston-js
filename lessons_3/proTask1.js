// Развернуть строку в обратном направлении при помощи методов массивов

function reverseStr(str) {
    if (typeof str !== 'string') {
        console.log('Введена не строка')
        return
    }

    return str.split('').reverse().join('')
}