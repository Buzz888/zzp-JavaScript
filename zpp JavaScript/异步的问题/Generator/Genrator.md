##Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）
1. Generator 函数返回一个指向内部状态的指针对象 必须调用遍历器对象的next方法，使得指针移向下一个状态
2. 调用 Generator 函数，返回一个遍历器对象，代表 Generator 函数的内部指针。以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束。
##yield yield表达式就是暂停标志。
1. 遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
2. 下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
3. 如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
4. 如果该函数没有return语句，则返回的对象的value属性值为undefined。
5. 需要注意的是，yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，因此等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。
6. yield表达式与return语句既有相似之处，也有区别。相似之处在于，都能返回紧跟在语句后面的那个表达式的值。区别在于每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行，而return语句不具备位置记忆的功能。
##for of 可以遍历 Generator中yield (只能是数字)
##Generator 函数和for...of循环，实现斐波那契数列的例子
##遍历其他方法 扩展运算符[...genrator()] 类数组方法Array.form(generator()) 数组解构let [x, y] = genrator() (可字符串);
##Async/Await 如何通过同步的方式实现异步
1. Async/Await 是函数Generator的语法糖.
2. Generator之所以可以通过同步实现异步是它具有暂停执行和恢复执行的特性和函数体内外的数据交换和错误处理机制



