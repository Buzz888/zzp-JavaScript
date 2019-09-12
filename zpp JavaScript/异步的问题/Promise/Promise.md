##什么是Promise
Promise是异步编程的一种解决方案  
## 几种异步编程的解决方案
1. 回调函数
2. 事件监听
3. 发布/订阅
4. Promise
##promise解决的痛处
1. 防止每个函数的相互依赖而形成嵌套方式的回调地狱的形成
2. 解决回调函数代码可读性差 耦合度过高 只能在回调中处理异常
##如何使用
1. Promise是一个构造函数
2. 通过new返回一个promiese对象
3. 函数内部有两个形参数(resolve,reject)
##promise的三种状态
1. 初始化状态(pending)
2. 成功调用resolve(fulfilled状态)
3. 失败调用reject(rejected状态)
##prmise的方法
1. then方法注册 resolve(成功)/reject(失败)的回调函数
2. catch方法可捕获then中发送的异常