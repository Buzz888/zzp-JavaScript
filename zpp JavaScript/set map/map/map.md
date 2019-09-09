##map和set
1. 共同点：集合、字典 可以储存不重复的值
2. 不同点：集合 是以 [value, value]的形式储存元素，字典 是以 [key, value] 的形式储存
##map类比与对象
 1. const stu = new Map();
 2. stu.set([键,值]) =>添加成员 与对象区别键名可以是对象数组
 3. 通过键获取值的方法stu.get(['键名'])
 4. stu.size 获取长度
 5. stu.has('键名')获取是否存在
 6. stu.clear()删除
 7. forEach()
 