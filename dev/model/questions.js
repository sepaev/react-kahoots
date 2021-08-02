export const module_21 = [
  
  {
    question:'Массив это структура данных для хранения коллекции...',
    answers: ['уникальных значений.', 'значений в произвольном порядке.', 'индексированых значений.', 'однотипных значений.'],
    rightAnswer: 'индексированых значений.'
  },
  {
    question:'Индексация элементов массива начинается с…',
    answers: ['произвольного числа', '1', '-1', '0'],
    rightAnswer: '0'
  },
  {
    question:'Выберите верное объявление массива names из трёх элементов.',
    answers: ['const names = ["Манго" - "Поли" - "Аякс"]', 'const names = ("Манго", "Поли", "Аякс")', 'const names = ["Манго", "Поли", "Аякс"]', 'const names = {"Манго", "Поли", "Аякс"}'],
    rightAnswer: 'const names = ["Манго", "Поли", "Аякс"]'
  },
  {
    question:'Длина массива хранится в его свойстве...',
    answers: ['numberOfElements', 'length', 'arrayLength', 'elements'],
    rightAnswer: 'length'
  },
  {
    question:'Как получить элемент со значением 3 из массива numbers? const numbers = [1, 2, 3, 4, 5]',
    answers: ["numbers[3]", "numbers[2]", "numbers['2']", "numbers['3']"],
    rightAnswer: 'numbers[2]'
  },
  {
    question:'Каким будет результат выражения? [1, 3, 5] === [1, 3, 5]',
    answers: ["NaN", "undefined", "true", "false"],
    rightAnswer: 'false'
  },
  {
    question:'Что делает метод push()?',
    answers: ['Добавляет один элемент в конец массива.', 'Добавляет один или несколько элементов в конец массива.', 'Добавляет один или несколько элементов в начало массива.', 'Добавляет один элемент в начало массива.'],
    rightAnswer: 'Добавляет один или несколько элементов в конец массива.'
  },
  {
    question:'Каким будет результат выражения? [7, 3, 8, 9, 2].slice(3)',
    answers: ['Новый массив [7, 3, 8]', 'Исходный массива [7, 3, 8]', 'Новый массив [8, 9, 2]', 'Новый массив [9, 2]'],
    rightAnswer: 'Новый массив [9, 2]'
  },
  {
    question:'Каким будет результат выражения? [8, 5, 3, 9, З].indexOf(З)',
    answers: ['3', '4', '2', '[2,5]'],
    rightAnswer: '2'
  },
  {
    question:'Каким будет результат выражения? [8, 5, 3, 9, З].indexOf(4)',
    answers: ['false', '-1', 'undefined', 'null'],
    rightAnswer: 'undefined'
  },
  {
    question:'Каким будет результат выражения? [3, 5, 12, 7, 4]. includes(8)',
    answers: ['null', 'undefined', 'false', '-1'],
    rightAnswer: 'false'
  },
  {
    question:'Каким будет результат выражения? [3, 5, 12, 7, 4]. includes(5)',
    answers: ['2', '1', '5', 'true'],
    rightAnswer: '5'
  },
  {
    question:'Каким будет результат выражения? [""JS"", ""is"", ""awesome!""].join("" "")',
    answers: ['"JS,is,awesome!"', '"JSisawesome!"', '"JS is awesome!"', '"JS is awesome !"'],
    rightAnswer: '"JS is awesome!"'
  },
  {
    question:'Каким будет результат выражения? [2, 4, 6].concat[1, 3], [5])',
    answers: ['[1, 2, 3, 4, 5, 6]', '[2, 4, 6, 5, 1, 3]', '[2, 4, 6, [1, 3], [5]]', '[2, 4, 6, 1, 3, 5]'],
    rightAnswer: '[2, 4, 6, [1, 3], [5]]'
  },
];

export const module_22 = [
   {
    question:'Каково основное назначение функций?',
    answers: ['Ускорение работы скрипта, функции проще интерпретировать.', 'Повторное использование и дробление кода на логические части.', 'Создание локальных областей видимости для скрытия переменных.', 'Удобство хранения кода.'],
    rightAnswer: 'Повторное использование и дробление кода на логические части.'
  },
  {
    question: 'Что такое name?                     function greet(name) {                         console.log("Добро пожаловать ${name}");                      }',
    answers: ['Аргумент1', 'Переменная', 'Параметр', 'Функция'],
    rightAnswer: 'Параметр'
  },
  {
    question: "Что такое 'Манго' ? greet('Манго');",
    answers: ['Переменная', 'Аргумент', 'Параметр', 'Функция'],
    rightAnswer: 'Аргумент'
  },
  {
    question:'Каким будет результат вызова функции calc ? const с = 20; function calc (a, b) { const с = 10;  return a + b + с;} calc(5, 15)',
    answers: ['40', '20', '30', '10'],
    rightAnswer: '30'
  },
  {
    question:'Если в теле функции нету оператора return, то она...',
    answers: ['не возвращает никакого значения', 'возвращает null', 'возвращает undefined', 'возвращает пустую строку'],
    rightAnswer: 'возвращает undefined'
  },
  {
    question:"Что будет выведено в консоль? function double (array) {  for (let i = 0; i < array.length; i += 1) { array[i] *= 2; } } const numbers = [1, 2, 3, 4, 5]; double(numbers); console.log(numbers);",
    answers: ['Ошибка', '[1, 2, 3, 4, 5]', '[2,4,6,8,10]', '[2, 2, 2, 2, 2]'],
    rightAnswer: '[2,4,6,8,10]'
  },
  {
    question:'Что будет выведено в консоль? greet() const greet = function () { console.log("Добро пожаловать")}',
    answers: ['Строка "Добро пожаловать"', 'Будет ошибка доступа к переменной greet', '', ''],
    rightAnswer: 'Будет ошибка доступа к переменной greet'
  },
  {
    question:'Что будет выведено в консоль? greet() function greet () { console.log(""Добро пожаловать"")}',
    answers: ['Строка "Добро пожаловать"', 'Будет ошибка доступа к переменной greet', '', ''],
    rightAnswer: 'Строка "Добро пожаловать"'
  },
  {
    question:'Что такое arguments в теле функции? function foo() {console.log(arguments);}',
    answers: ['Локальная переменная содержащая массив аргументов', 'Локальная переменная содержащая псевдомассив всех аргументов', 'Локальная переменная содержащая массив параметров', 'Локальная переменная содержащая псевдомассив параметров'],
    rightAnswer: 'Локальная переменная содержащая псевдомассив всех аргументов'
  },
  {
    question:'Псевдомассив это…',
    answers: ['массив, до применения к нему метода Array.from()', 'строка, но с методами массива для обработки символов строки', 'такой же индексированный список как и массив, но без методов', 'строка, которую нужно преобразовать в массив'],
    rightAnswer: 'такой же индексированный список как и массив, но без методов'
  },
  {
    question:'Что будет выведено в консоль?function greet () { console.log(""Добро пожаловать"")}greet(5, ""Манго"", true)',
    answers: ['5, "Манго", true', '5', 'null', '[5, "Манго", true]'],
    rightAnswer: '[5, "Манго", true]'
  },
  {
    question:'Что доступно в «области видимости функции»?',
    answers: ['Набор локальных переменных.', 'Набор параметров и локальных переменных.', 'Набор глобальных переменных.', 'Набор локальных и глобальных переменных.'],
    rightAnswer: 'Набор локальных и глобальных переменных.'
  },
  {
    question:'По какому принципу работает стек вызовов функций?',
    answers: ['Первым вошел, первым вышел (FIFO)', 'Первым вошел, последним вышел (FILO)', 'Последним вошел, первым вышел (LIFO)', 'Последним вошел, последним вышел (LILO)'],
    rightAnswer: 'Последним вошел, первым вышел (LIFO)'
  },
];