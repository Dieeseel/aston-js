// Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько
// структур данных? Какие ?


// Массивы в JS можно назвать "неправильнымы" по причине того, что он содержит в себе некоторые методы
// других структур данных. К примеру:
// 1. Методы push() и pop() - основные методы стека
// 2. Методы push() и shift() - основные методы очереди
// Кроме этого, по факту массив в JS является объектом, из-за чего элементы массива можно индексировать не
// только числами, но и строкой, а так как объекты в JS явлются представлением хеш-таблиц, можно сделать вывод, 
// что и массив также может быть представлен как хеш таблица.

