let questions = [
    {
        "number": 1,
        "question": "Which keyword is used to declare a variable that can be reassigned in JavaScript?",
        "answer": "let",
        "options": ["var", "let", "const", "static"]
    },
    {
        "number": 2,
        "question": "What will `typeof null` return in JavaScript?",
        "answer": "object",
        "options": ["null", "undefined", "object", "string"]
    },
    {
        "number": 3,
        "question": "Which function is used to print output to the browser console?",
        "answer": "console.log()",
        "options": ["print()", "console.log()", "echo()", "document.write()"]
    },
    {
        "number": 4,
        "question": "Which operator checks both value and type equality?",
        "answer": "===",
        "options": ["=", "==", "===", "=>"]
    },
    {
        "number": 5,
        "question": "What does the `NaN` value represent?",
        "answer": "Not a Number",
        "options": ["No assigned Number", "Not a Number", "Negative number", "Non-assigned Null"]
    },
    {
        "number": 6,
        "question": "What is the output of `Boolean(0)`?",
        "answer": "false",
        "options": ["true", "false", "undefined", "0"]
    },
    {
        "number": 7,
        "question": "Which method converts a JSON string into a JavaScript object?",
        "answer": "JSON.parse()",
        "options": ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "parse.JSON()"]
    },
    {
        "number": 8,
        "question": "What will `typeof []` return?",
        "answer": "object",
        "options": ["array", "object", "list", "undefined"]
    },
    {
        "number": 9,
        "question": "Which keyword is used to define a constant in JavaScript?",
        "answer": "const",
        "options": ["static", "var", "const", "let"]
    },
    {
        "number": 10,
        "question": "What will `2 + '2'` evaluate to?",
        "answer": "22",
        "options": ["4", "22", "NaN", "undefined"]
    },
    {
        "number": 11,
        "question": "Which built-in method removes the last element from an array?",
        "answer": "pop()",
        "options": ["pop()", "shift()", "splice()", "remove()"]
    },
    {
        "number": 12,
        "question": "Which method is used to add one or more elements to the end of an array?",
        "answer": "push()",
        "options": ["push()", "append()", "add()", "insert()"]
    },
    {
        "number": 13,
        "question": "What is the output of `typeof NaN`?",
        "answer": "number",
        "options": ["NaN", "number", "undefined", "object"]
    },
    {
        "number": 14,
        "question": "What is a closure in JavaScript?",
        "answer": "A function that has access to variables from its outer scope",
        "options": [
            "A way to close a loop",
            "A function that has access to variables from its outer scope",
            "An immediately invoked function",
            "A method to destroy variables"
        ]
    },
    {
        "number": 15,
        "question": "What is the default value of an uninitialized variable?",
        "answer": "undefined",
        "options": ["null", "undefined", "0", "false"]
    },
    {
        "number": 16,
        "question": "Which method is used to join all elements of an array into a string?",
        "answer": "join()",
        "options": ["concat()", "join()", "merge()", "stringify()"]
    },
    {
        "number": 17,
        "question": "Which object method can be used to get the keys of an object?",
        "answer": "Object.keys()",
        "options": ["Object.keys()", "Object.values()", "Object.entries()", "Object.get()"]
    },
    {
        "number": 18,
        "question": "What is the result of `3 + true` in JavaScript?",
        "answer": "4",
        "options": ["3true", "4", "NaN", "error"]
    },
    {
        "number": 19,
        "question": "Which method executes a function after a specified number of milliseconds?",
        "answer": "setTimeout()",
        "options": ["setTimeout()", "setInterval()", "delay()", "timer()"]
    },
    {
        "number": 20,
        "question": "What does the `bind()` method do?",
        "answer": "Creates a new function with a specific `this` value",
        "options": [
            "Binds data to variables",
            "Creates a new function with a specific `this` value",
            "Combines two functions",
            "Connects variables to objects"
        ]
    },
    {
        "number": 21,
        "question": "What will `typeof undefined` return?",
        "answer": "undefined",
        "options": ["null", "undefined", "object", "string"]
    },
    {
        "number": 22,
        "question": "Which keyword is used to handle errors in JavaScript?",
        "answer": "try...catch",
        "options": ["catch", "try...catch", "throw", "if...else"]
    },
    {
        "number": 23,
        "question": "Which operator is used to spread elements of an array?",
        "answer": "...",
        "options": ["++", "...", "**", "//"]
    },
    {
        "number": 24,
        "question": "What is the output of `typeof function() {}`?",
        "answer": "function",
        "options": ["object", "function", "undefined", "method"]
    },
    {
        "number": 25,
        "question": "Which loop is guaranteed to execute at least once?",
        "answer": "do...while",
        "options": ["for", "while", "do...while", "forEach"]
    },
    {
        "number": 26,
        "question": "What does the `map()` method return?",
        "answer": "A new array",
        "options": ["A single value", "A new array", "An object", "Undefined"]
    },
    {
        "number": 27,
        "question": "What will `0 == false` return?",
        "answer": "true",
        "options": ["true", "false", "undefined", "error"]
    },
    {
        "number": 28,
        "question": "Which keyword stops the execution of a loop?",
        "answer": "break",
        "options": ["break", "stop", "exit", "end"]
    },
    {
        "number": 29,
        "question": "What is the output of `'5' - 2`?",
        "answer": "3",
        "options": ["52", "3", "NaN", "undefined"]
    },
    {
        "number": 30,
        "question": "What is an IIFE?",
        "answer": "Immediately Invoked Function Expression",
        "options": [
            "Immediate Iteration Function Execution",
            "Immediately Invoked Function Expression",
            "Inline Internal Function Event",
            "Instant Internal File Execution"
        ]
    },
    {
        "number": 31,
        "question": "Which method is used to check if an array includes a certain element?",
        "answer": "includes()",
        "options": ["has()", "contains()", "includes()", "indexOf()"]
    },
    {
        "number": 32,
        "question": "Which method is used to execute code at regular intervals?",
        "answer": "setInterval()",
        "options": ["setInterval()", "setTimeout()", "loop()", "interval()"]
    },
    {
        "number": 33,
        "question": "What is the difference between `null` and `undefined`?",
        "answer": "null is assigned; undefined means no value assigned",
        "options": [
            "They are the same",
            "undefined is an object",
            "null is assigned; undefined means no value assigned",
            "null means zero"
        ]
    },
    {
        "number": 34,
        "question": "Which method combines two or more arrays?",
        "answer": "concat()",
        "options": ["concat()", "merge()", "join()", "push()"]
    },
    {
        "number": 35,
        "question": "Which JavaScript feature allows writing asynchronous code that looks synchronous?",
        "answer": "async/await",
        "options": ["Promises", "async/await", "setTimeout()", "Callbacks"]
    },
    {
        "number": 36,
        "question": "Which method converts all array elements to a string separated by commas?",
        "answer": "toString()",
        "options": ["join()", "concat()", "toString()", "valueOf()"]
    },
    {
        "number": 37,
        "question": "What is a promise in JavaScript?",
        "answer": "An object representing the eventual completion or failure of an async operation",
        "options": [
            "A callback function",
            "An object representing the eventual completion or failure of an async operation",
            "A function that runs immediately",
            "A variable type"
        ]
    },
    {
        "number": 38,
        "question": "Which method stops event propagation in JavaScript?",
        "answer": "stopPropagation()",
        "options": ["preventDefault()", "stopPropagation()", "halt()", "cancel()"]
    },
    {
        "number": 39,
        "question": "Which object is the global object in browsers?",
        "answer": "window",
        "options": ["document", "window", "this", "global"]
    },
    {
        "number": 40,
        "question": "Which method adds new elements at the beginning of an array?",
        "answer": "unshift()",
        "options": ["push()", "unshift()", "prepend()", "shift()"]
    },
    {
        "number": 41,
        "question": "Which statement is true about arrow functions?",
        "answer": "They do not have their own 'this' binding",
        "options": [
            "They hoist like regular functions",
            "They do not have their own 'this' binding",
            "They can be used as constructors",
            "They must always return a value"
        ]
    },
    {
        "number": 42,
        "question": "What is the purpose of `use strict`?",
        "answer": "To enforce stricter parsing and error handling in JavaScript",
        "options": [
            "To make code faster",
            "To enforce stricter parsing and error handling in JavaScript",
            "To enable debugging mode",
            "To optimize loops"
        ]
    },
    {
        "number": 43,
        "question": "Which function is used to schedule a function to run after the current event loop?",
        "answer": "setTimeout(fn, 0)",
        "options": ["setInterval()", "setTimeout(fn, 0)", "requestAnimationFrame()", "nextTick()"]
    },
    {
        "number": 44,
        "question": "Which array method removes the first element from an array?",
        "answer": "shift()",
        "options": ["shift()", "pop()", "splice()", "delete()"]
    },
    {
        "number": 45,
        "question": "What is hoisting in JavaScript?",
        "answer": "The process where variable and function declarations are moved to the top",
        "options": [
            "Automatic garbage collection",
            "The process where variable and function declarations are moved to the top",
            "Raising scope errors",
            "Moving code blocks down"
        ]
    },
    {
        "number": 46,
        "question": "What does the `reduce()` method do?",
        "answer": "Executes a reducer function on each element to produce a single value",
        "options": [
            "Reduces the array size",
            "Executes a reducer function on each element to produce a single value",
            "Filters the array",
            "Maps array elements"
        ]
    },
    {
        "number": 47,
        "question": "Which symbol is used for template literals in JavaScript?",
        "answer": "Backticks (` `)",
        "options": ["Quotes (' ')", "Double quotes (\" \")", "Backticks (` `)", "Tilde (~)"]
    },
    {
        "number": 48,
        "question": "Which statement creates a class in JavaScript?",
        "answer": "class MyClass {}",
        "options": ["function MyClass()", "class MyClass {}", "createClass(MyClass)", "MyClass = class()"]
    },
    {
        "number": 49,
        "question": "Which event is triggered when an element gains focus?",
        "answer": "focus",
        "options": ["click", "blur", "focus", "hover"]
    },
    {
        "number": 50,
        "question": "What will `typeof Symbol()` return?",
        "answer": "symbol",
        "options": ["object", "symbol", "string", "undefined"]
    }
];
